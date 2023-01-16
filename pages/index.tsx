import NotifyNewVersion from '../components/NotifyNewVersion'

import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<main className={styles.container}>
			<span>{'<NotifyNewVersion />'} from page:</span>
			<NotifyNewVersion />
		</main>
	)
}
