'use client'
import { useEffect, useState } from 'react'
import { admission } from '@/data/contacts'
import { cn } from '@/lib/utils'

interface AdmissionLinkProps {
	className?: string
	children: React.ReactNode
}

export function AdmissionLink({ className, children }: AdmissionLinkProps) {
	const [href, setHref] = useState(admission.beforeSwitchUrl)
	useEffect(() => {
		const now = Date.now()
		const url = now >= admission.switchAt ? admission.afterSwitchUrl : admission.beforeSwitchUrl
		// Static export: build-time HTML always has beforeSwitchUrl; client updates after mount.
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setHref(url)
	}, [])
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={cn(className)}
		>
			{children}
		</a>
	)
}
