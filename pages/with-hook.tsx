import NotifyNewVersionWithHook from '../components/NotifyNewVersionWithHook'

import styles from '../styles/Home.module.css'

export default function WithHook() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<NotifyNewVersionWithHook />
			</main>
		</div>
	)
}
