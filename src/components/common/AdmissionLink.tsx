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
		setHref(now >= admission.switchAt ? admission.afterSwitchUrl : admission.beforeSwitchUrl)
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
