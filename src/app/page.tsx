import Hero from '@/sections/hero'
import IntroUsp from '@/sections/intro-usp'
import AboutProgram from '@/sections/about-program'
import ProgramDescription from '@/sections/program-description'
import CareerTrack from '@/sections/career-track'
import DiplomaStartup from '@/sections/diploma-startup'
import ProfessionalTracking from '@/sections/professional-tracking'
import Teachers from '@/sections/teachers'
import Partners from '@/sections/partners'
import LearningFormat from '@/sections/learning-format'
import Employment from '@/sections/employment'
import FinalCta from '@/sections/final-cta'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { ApplicationDialog } from '@/components/form/ApplicationDialog'

export default function Home() {
	return (
		<main>
			<Hero />
			<IntroUsp />
			<AboutProgram />
			<ProgramDescription />
			<CareerTrack />
			<DiplomaStartup />
			<ProfessionalTracking />
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
