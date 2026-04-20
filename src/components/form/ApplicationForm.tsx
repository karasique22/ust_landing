'use client'
import { Button } from '@/components/ui/button'
import { sendApplication } from '@/lib/telegram'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { IMaskInput } from 'react-imask'
import * as z from 'zod'

const schema = z.object({
	name: z
		.string()
		.min(1, 'Введите ФИО')
		.refine(v => v.trim().split(/\s+/).length >= 2, 'Введите имя и фамилию'),
	phone: z
		.string()
		.refine(
			v => v.replace(/\D/g, '').length === 11,
			'Введите полный номер телефона'
		),
	email: z.string().min(1, 'Введите email').email('Некорректный email')
})

type FormData = z.infer<typeof schema>

interface ApplicationFormProps {
	onSuccess: () => void
	onError?: (err: Error) => void
}

const inputWrapperClass = [
	'relative overflow-hidden rounded-2xl',
	'bg-[linear-gradient(90deg,rgba(255,255,255,0.1),rgba(0,0,0,0.1))] backdrop-blur-md',
	'border border-white/40',
	'shadow-[1px_4px_10px_rgba(0,0,0,0.25)]'
].join(' ')

const inputClass =
	'relative z-10 h-14 w-full bg-transparent px-6 text-lg text-black placeholder:text-black/40 outline-none'

export function ApplicationForm({ onSuccess, onError }: ApplicationFormProps) {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: { name: '', phone: '', email: '' }
	})

	const onSubmit = async (data: FormData) => {
		try {
			await sendApplication(data)
			onSuccess()
		} catch (err) {
			onError?.(err instanceof Error ? err : new Error(String(err)))
		}
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			noValidate
			className="mx-auto flex w-full max-w-xl flex-col items-center gap-4"
		>
			<div className="flex w-full flex-col gap-1">
				<div className={inputWrapperClass}>
					<input
						{...register('name')}
						type="text"
						placeholder="ФИО"
						aria-invalid={!!errors.name}
						className={inputClass}
					/>
				</div>
				{errors.name && (
					<p className="text-sm text-red-400">{errors.name.message}</p>
				)}
			</div>

			<div className="flex w-full flex-col gap-1">
				<div className={inputWrapperClass}>
					<Controller
						name="phone"
						control={control}
						render={({ field }) => (
							<IMaskInput
								{...field}
								mask="+7 (000) 000-00-00"
								placeholder="Телефон"
								inputRef={field.ref}
								onAccept={value => field.onChange(value)}
								aria-invalid={!!errors.phone}
								className={inputClass}
							/>
						)}
					/>
				</div>
				{errors.phone && (
					<p className="text-sm text-red-400">{errors.phone.message}</p>
				)}
			</div>

			<div className="flex w-full flex-col gap-1">
				<div className={inputWrapperClass}>
					<input
						{...register('email')}
						type="email"
						placeholder="Почта"
						aria-invalid={!!errors.email}
						className={inputClass}
					/>
				</div>
				{errors.email && (
					<p className="text-sm text-red-400">{errors.email.message}</p>
				)}
			</div>

			<div className="flex justify-center pt-2">
				<Button
					type="submit"
					variant="gradient"
					disabled={isSubmitting}
				>
					{isSubmitting ? 'Отправляем...' : 'Оставить заявку!'}
				</Button>
			</div>
		</form>
	)
}
