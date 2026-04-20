'use client'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle
} from '@/components/ui/dialog'
import { toast } from 'sonner'

import { ApplicationForm } from './ApplicationForm'
import { useApplicationDialog } from './useApplicationDialog'

export function ApplicationDialog() {
	const { isOpen, setOpen, close } = useApplicationDialog()

	return (
		<Dialog
			open={isOpen}
			onOpenChange={setOpen}
		>
			<DialogContent className="rounded-2xl bg-white/85 p-8 text-black backdrop-blur-xl sm:max-w-4xl md:p-12">
				<DialogHeader className="text-center">
					<DialogTitle className="mx-auto text-4xl leading-tight font-bold md:text-5xl">
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
