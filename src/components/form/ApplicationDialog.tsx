'use client'
import { toast } from 'sonner'

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle
} from '@/components/ui/dialog'

import { ApplicationForm } from './ApplicationForm'
import { useApplicationDialog } from './useApplicationDialog'

export function ApplicationDialog() {
	const { isOpen, setOpen, close } = useApplicationDialog()

	return (
		<Dialog
			open={isOpen}
			onOpenChange={setOpen}
		>
			<DialogContent className="max-w-2xl p-6 md:p-10 mx-4">
				<DialogHeader>
					<DialogTitle className="text-2xl font-semibold">
						Получить консультацию!
					</DialogTitle>
				</DialogHeader>
				<ApplicationForm
					onSuccess={() => {
						close()
						toast.success('Заявка отправлена!')
					}}
					onError={err => toast.error(err.message)}
				/>
			</DialogContent>
		</Dialog>
	)
}
