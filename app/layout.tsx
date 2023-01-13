import type { ReactNode } from 'react'

import '../styles/globals.css'
import styles from '../styles/Home.module.css'

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>
				<div className={styles.container}>
					<main className={styles.main}>{children}</main>
				</div>
			</body>
		</html>
	)
}
