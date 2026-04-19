'use client'
import { useSyncExternalStore } from 'react'

let isOpen = false
const listeners = new Set<() => void>()
const emit = () => { for (const l of listeners) l() }
const subscribe = (l: () => void) => { listeners.add(l); return () => listeners.delete(l) }
const getSnapshot = () => isOpen
const getServerSnapshot = () => false

export function useApplicationDialog() {
	const open = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
	return {
		isOpen: open,
		open: () => { isOpen = true; emit() },
		close: () => { isOpen = false; emit() },
		setOpen: (v: boolean) => { isOpen = v; emit() }
	}
}
