import NotifyNewVersionWithHook from '../components/NotifyNewVersionWithHook'

import styles from '../styles/Home.module.css'

export default function WithHook() {
	return (
		<main className={styles.container}>
			<span>{'<NotifyNewVersionWithHook />'} from page:</span>

			<NotifyNewVersionWithHook />
		</main>
	)
}
