export interface Teacher {
	id: string
	name: string
	role: string
	photo: string
	achievements: [string, string, string]
}

export const teachers: Teacher[] = [
	{
		id: 'mitkin',
		name: 'Миткин Сергей Борисович',
		role: 'Доктор экономических наук, профессор',
		photo: '/teachers/placeholder.jpg',
		achievements: ['Достижение 1', 'Достижение 2', 'Достижение 3']
	},
	{
		id: 'bibulatova',
		name: 'Бибулатова Наталья Петровна',
		role: 'Кандидат педагогических наук, доцент',
		photo: '/teachers/placeholder.jpg',
		achievements: ['Достижение 1', 'Достижение 2', 'Достижение 3']
	},
	{
		id: 'ivanov-1',
		name: 'Иванов Александр Иванович',
		role: 'Эксперт в области EdTech',
		photo: '/teachers/placeholder.jpg',
		achievements: ['Достижение 1', 'Достижение 2', 'Достижение 3']
	},
	{
		id: 'ivanov-2',
		name: 'Иванов Дмитрий Сергеевич',
		role: 'Продакт-менеджер, 10+ лет в образовании',
		photo: '/teachers/placeholder.jpg',
		achievements: ['Достижение 1', 'Достижение 2', 'Достижение 3']
	}
]
