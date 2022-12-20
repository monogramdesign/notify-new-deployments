import useSWR from 'swr'

export function useLatestVersion() {
	const { data, isLoading } = useSWR('latestVersion', fetchLatestVersion, {
		revalidateOnFocus: true,
		revalidateIfStale: true,
		revalidateOnReconnect: true,
		revalidateOnMount: false
	})

	return { latestVersion: data, isLoading }
}

async function fetchLatestVersion() {
	const response = await fetch('/version.json', {
		headers: {
			pragma: 'no-cache',
			'cache-control': 'no-cache'
		}
	})

	const version = await response.json()

	return version.timestamp as number
}
