import Hero from "../components/Hero"
import About from "../components/About"
import Tag from "../components/Tag"
import Pricing from '../components/Pricing'
import NewsLetter from "../components/NewsLetter"


const Home = () => {
  return (
    <section className="flex flex-col gap-y-12 w-full h-full ">
        <Hero />
        <About />
        <Tag />
        <Pricing />
        <NewsLetter />
    </section>
  )
}

export default Home