import Hero from './components/hero/hero'
import About from './components/about/about'
import Products from './components/Products/Products'
import Instagram from './components/instagram/instagram'
import Contact from './components/contact/contact'


export default function Home() {
  return (
    <main className="w-full h-full bg-">
      <Hero/>
      <About/>
      {/* <Products/>
      <Instagram/>
      <Contact/> */}
    </main>
  )
}
