import Head from 'next/head'
import Header from './../components/header'
import About from './../components/about'
import Showcase from './../components/showcase'
import background from './../public/assets/background.webp'
import { Element, scroller } from 'react-scroll'
import { useEffect } from 'react'
import useState from 'react-usestateref'

var lastTrue = ""
export default function Home() {
  const [visibilities, setVisibilities, visibilitiesRef] = useState({
    about: false,
    showcase: false
  })

  const mutationHandler = (entries, observer) => {
    const copy = JSON.parse(JSON.stringify(visibilitiesRef.current))
    let trueCount = 0
    let trueName = ""
    for (let i = 0; i < entries.length; i++) {
      if (entries[i].intersectionRatio >= 0.05) {
        copy[entries[i].target.id] = true
        trueCount += 1
        trueName = entries[i].target.id
      }
      else copy[entries[i].target.id] = false
    }
    if (!copy[lastTrue] && lastTrue !== trueName && trueCount <= 1) {
      lastTrue = trueName
      setVisibilities(copy)
    }
  }

  useEffect(() => {
    let observer = new IntersectionObserver(mutationHandler, {
      root: null,
      rootMargin: '0px',
      threshold: [0.05, 0.5, 1.0]
    })
    observer.observe(document.getElementById("about"))
    observer.observe(document.getElementById("showcase"))
  }, [])

  const scrollToElement = (name) => {
    scroller.scrollTo(name)
  }

  return (
    <div style={{overflowY: "scroll", height: "100vh", scrollSnapType: "y mandatory"}}>
    <div style={{height: "fit-content", paddingBottom: "5vh"}}>
      <Head>
        <title>Tkaixiang</title>
        <meta name="description" content="Home of Tkai" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }} className="bg-fixed fade-in w-full h-full">
        <div className="h-screen" style={{ scrollSnapAlign: "center" }}>
          <Header scrollTo={scrollToElement} />
        </div>

        <div name="about" id="about" className="flex items-center" style={{ scrollSnapAlign: "start", height: "fit-content", paddingBottom: "15vh" }}>
          <Element className={`element-style ${visibilities.about ? "fade-in" : "opacity-0"}`}>
            <About visibilities={visibilities} />
          </Element>
        </div>

        <div name="showcase" id="showcase" className="flex items-center" style={{ scrollSnapAlign: "start", height: "fit-content" }}>
          <Element className={`element-style ${visibilities.showcase ? "fade-in" : "opacity-0"}`}>
            <Showcase />
          </Element>
        </div>

      </div>
      </div>
    </div>
  )
}
