import useSWR from 'swr'

import { useLatestVersion } from './useLatestVersion'
import { usePageLoadVersion } from './usePageLoadVersion'

export function useHasNewVersion() {
	const { latestVersion } = useLatestVersion()
	const { pageLoadVersion } = usePageLoadVersion()

	const shouldCheck = Boolean(latestVersion && pageLoadVersion)

	const { data, isLoading } = useSWR(
		shouldCheck ? [latestVersion, pageLoadVersion] : null,
		() => latestVersion !== pageLoadVersion
	)

	return { hasNewVersion: data, isLoading: isLoading || shouldCheck === false }
}
