export interface EmploymentRole {
	number: number
	title: string
	subtitle?: string
}

export const employmentRoles: EmploymentRole[] = [
	{ number: 1, title: 'продукт-менеджер EdTech' },
	{ number: 2, title: 'руководитель образовательной платформы' },
	{ number: 3, title: 'эксперт по цифровому обучению' },
	{ number: 4, title: 'директор по образовательным продуктам' },
	{ number: 5, title: 'основатель стартапа' },
	{ number: 6, title: 'владелец ИИ-продукта' }
]
