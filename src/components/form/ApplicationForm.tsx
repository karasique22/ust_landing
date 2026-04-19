'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { IMaskInput } from 'react-imask'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { sendApplication } from '@/lib/telegram'

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
			className="flex flex-col gap-4"
		>
			<div>
				<Input
					placeholder="ФИО"
					{...register('name')}
				/>
				{errors.name && (
					<p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
				)}
			</div>

			<div>
				<Controller
					name="phone"
					control={control}
					render={({ field }) => (
						<IMaskInput
							mask="+7 (000) 000-00-00"
							onAccept={val => field.onChange(val)}
							value={field.value}
							placeholder="+7 (000) 000-00-00"
							className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
						/>
					)}
				/>
				{errors.phone && (
					<p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
				)}
			</div>

			<div>
				<Input
					type="email"
					placeholder="Email"
					{...register('email')}
				/>
				{errors.email && (
					<p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
				)}
			</div>

			<Button
				type="submit"
				className="w-full"
				disabled={isSubmitting}
			>
				Оставить заявку!
			</Button>
		</form>
	)
}
