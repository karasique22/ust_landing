import { ApplicationDialog } from '@/components/form/ApplicationDialog'
import { SiteFooter } from '@/components/layout/SiteFooter'
import AboutProgram from '@/sections/about-program'
import CareerTrack from '@/sections/career-track'
import DiplomaStartup from '@/sections/diploma-startup'
import Employment from '@/sections/employment'
import FinalCta from '@/sections/final-cta'
import Hero from '@/sections/hero'
import IntroUsp from '@/sections/intro-usp'
import LearningFormat from '@/sections/learning-format'
import Partners from '@/sections/partners'
import ProfessionalTracking from '@/sections/professional-tracking'
import ProgramDescription from '@/sections/program-description'
import Teachers from '@/sections/teachers'

export default function Home() {
	return (
		<main>
			<Hero />
			<IntroUsp />
			<AboutProgram />
			<ProgramDescription />
			<CareerTrack />
			{/* <DiplomaStartup />
			<ProfessionalTracking /> */}
			<Teachers />
			<Partners />
			<LearningFormat />
			<Employment />
			<FinalCta />
			<SiteFooter />
			<ApplicationDialog />
		</main>
	)
}
