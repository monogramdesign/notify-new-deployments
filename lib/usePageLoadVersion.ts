import useSWRImmutable from 'swr/immutable'

import versionJSON from '../public/version.json'

export function usePageLoadVersion() {
	const { data, isLoading } = useSWRImmutable('pageLoadVersion', () => versionJSON.timestamp)

	return { pageLoadVersion: data, isLoading }
}
