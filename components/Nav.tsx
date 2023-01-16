'use client'

import Link from 'next/link'

import styles from '../styles/Home.module.css'
import { usePathname } from 'next/navigation'

const LINKS = [
	'/',
	'/with-hook',
	'/app/route-a',
	'/app/route-b',
	'/app/nested/route-a',
	'/app/nested/route-b'
]

export default function Nav() {
	const pathname = usePathname()

	return (
		<nav className={styles.nav}>
			<span>Go to:</span>

			{LINKS.map((link) => (
				<Link
					key={link}
					className={[styles.button, ...(pathname === link ? [styles['button-active']] : [])].join(
						' '
					)}
					href={link}
				>
					{link}
				</Link>
			))}
		</nav>
	)
}
