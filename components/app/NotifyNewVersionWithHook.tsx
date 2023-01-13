'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useHasNewVersion } from '../../lib/useHasNewVersion'

import styles from '../../styles/Home.module.css'

export default function NotifyNewVersionWithHook() {
	const router = useRouter()
	const pathname = usePathname()

	const { hasNewVersion, isLoading } = useHasNewVersion()

	if (isLoading) return <span>Loading...</span>

	if (hasNewVersion === false)
		return <span className={styles.title}>Current version is up to date</span>

	return (
		<>
			<span className={styles.title}>There is a new version!</span>

			<button
				className={styles.button}
				onClick={() => router.push(pathname as string, { forceOptimisticNavigation: true })}
			>
				Click here to update
			</button>
		</>
	)
}
