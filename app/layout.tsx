import type { ReactNode } from 'react'

import Nav from '../components/Nav'

import '../styles/globals.css'
import styles from '../styles/Home.module.css'

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>
				<div id="__next">
					<Nav />

					<div className={styles.container}>{children}</div>
				</div>
			</body>
		</html>
	)
}
