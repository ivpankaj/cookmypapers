import AboutHero from "@/components/about us comp/AboutHero";
import CallToAction from "@/components/about us comp/CallToAction";
import OurMission from "@/components/about us comp/OurMission";
import OurStory from "@/components/about us comp/OurStory";
import OurTeam from "@/components/about us comp/OurTeam";
import Testimonials from "@/components/about us comp/Testimonials";



export default function AboutPage() {
  return (
    <main className="min-h-screen bg-yellow-50">
      <AboutHero />
      <OurStory />
      <OurMission />
      <OurTeam />
      <Testimonials />
      <CallToAction />
    </main>
  )
}

