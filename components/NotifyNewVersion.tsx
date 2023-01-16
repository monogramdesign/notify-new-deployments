'use client'

import { useLatestVersion } from '../lib/useLatestVersion'
import { usePageLoadVersion } from '../lib/usePageLoadVersion'

import styles from '../styles/Home.module.css'

export default function NotifyNewVersion() {
	const { latestVersion, isLoading: isLoadingLatest } = useLatestVersion()
	const { pageLoadVersion, isLoading: isLoadingPageLoad } = usePageLoadVersion()

	const isLoading = isLoadingLatest || isLoadingPageLoad

	if (isLoading) {
		return <span>Loading...</span>
	}

	const hasNewVersion = Boolean(latestVersion && pageLoadVersion)
		? latestVersion !== pageLoadVersion
		: false

	return (
		<>
			<h1 className={styles.title}>
				{hasNewVersion ? 'There is a new version!' : 'Current version is up to date'}
			</h1>

			{hasNewVersion && (
				<button className={styles.button} onClick={() => window.location.reload()}>
					Click here to update
				</button>
			)}

			{pageLoadVersion && (
				<span className={styles.description}>
					Current version: {new Date(pageLoadVersion).toString()}
				</span>
			)}

			{latestVersion && (
				<span className={styles.description}>
					Latest version: {new Date(latestVersion).toString()}
				</span>
			)}
		</>
	)
}
