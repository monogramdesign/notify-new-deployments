'use client'

import { useHasNewVersion } from '../lib/useHasNewVersion'

import styles from '../styles/Home.module.css'

export default function NotifyNewVersionWithHook() {
	const { hasNewVersion, isLoading } = useHasNewVersion()

	if (isLoading) return <span>Waiting to fetch new version...</span>

	if (hasNewVersion === false)
		return <span className={styles.title}>Current version is up to date</span>

	return (
		<>
			<span className={styles.title}>There is a new version!</span>

			<button className={styles.button} onClick={() => window.location.reload()}>
				Click here to update
			</button>
		</>
	)
}
