import AboutHero from './components/AboutHero'
import TrustSection from '../landing/components/TrustSection'
import CtaSection from './components/CtaSection' 
import AboutImageSection from './components/AboutImageSection'

const AboutPage = () => {
  return (
    <main>
        <AboutHero />
        <AboutImageSection />
        <CtaSection /> 
        <TrustSection />
    </main>
  )
}

export default AboutPage;