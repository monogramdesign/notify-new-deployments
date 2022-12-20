import NotifyNewVersion from '../components/NotifyNewVersion'

import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<NotifyNewVersion />
			</main>
		</div>
	)
}
