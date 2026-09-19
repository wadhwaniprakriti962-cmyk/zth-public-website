import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import CoordinationGap from './components/CoordinationGap'
import Journey from './components/Journey'
import Process from './components/Process'
import WhyZTH from './components/WhyZTH'
import InvestorMockRoom from './components/InvestorMockRoom'
import Credibility from './components/Credibility'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <CoordinationGap />
        <Journey />
        <Process />
        <WhyZTH />
        <InvestorMockRoom />
        <Credibility />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
