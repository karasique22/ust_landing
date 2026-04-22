export interface Teacher {
	id: string
	name: string
	role: string
	photo: string
	achievements: string[]
}

export const teachers: Teacher[] = [
	{
		id: 'mityakin',
		name: 'Вадим Митякин',
		role: 'Наставник курса',
		photo: '/teachers/mityakin.png',
		achievements: [
			'Бизнес-консультант',
			'Методолог',
			'Автор книги «Метод параноика»'
		]
	},
	{
		id: 'bikbulatova',
		name: 'Бикбулатова Альбина Ахатовна',
		role: 'Наставник курса',
		photo: '/teachers/bikbulatova.png',
		achievements: [
			'Директор Департамента по работе с образовательными организациями Российского общества «Знание»'
		]
	},
	{
		id: 'sachkov',
		name: 'Сачков Александр Александрович',
		role: 'Наставник курса',
		photo: '/teachers/sachkov.jpg',
		achievements: [
			'Руководитель направления блока реализации стратегических проектов VK'
		]
	},
	{
		id: 'hvostov',
		name: 'Хвостов Александр Викторович',
		role: 'Наставник курса',
		photo: '/teachers/hvostov.jpg',
		achievements: ['Директор по связям с образовательным сообществом MAXIMUM']
	},
	{
		id: 'yanahov',
		name: 'Янахов Дамир Фаритович',
		role: 'Наставник курса',
		photo: '/teachers/yanahov.jpg',
		achievements: [
			'Руководитель направления по развитию кадрового потенциала ПКК РЭО'
		]
	},
	{
		id: 'barysheva',
		name: 'Екатерина Барышева',
		role: 'Наставник курса',
		photo: '/teachers/barysheva.jpg',
		achievements: [
			'Методолог',
			'Педагогический дизайнер',
			'Продюсер программ ДПО'
		]
	}
]
