import type { ReactNode } from 'react'
import NotifyNewVersion from '../../../components/app/NotifyNewVersion'

export default function NestedRouteLayout({ children }: { children: ReactNode }) {
	return (
		<>
			{children}

			<NotifyNewVersion />
		</>
	)
}
