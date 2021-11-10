import Head from 'next/head'
import Header from '../components/header'
import About from '../components/about'
import Showcase from '../components/showcase'
import background from './../public/assets/background.webp'
import { Element, scroller } from 'react-scroll'
import { useEffect } from 'react'
import useState from 'react-usestateref'


export default function Home(props) {
  const [visibilities, setVisibilities, visibilitiesRef] = useState({
    about: false,
    showcase: false
  })
  const [screenHeight, setSH] = useState(0)

  const mutationHandler = (entries, observer): void => {
    const copy = JSON.parse(JSON.stringify(visibilitiesRef.current))
    let trueCount = 0
    // only 1 should be true at any moment
    for (let i = 0; i < entries.length; i++) {
      if (entries[i].intersectionRatio >= 0.05) {
        copy[entries[i].target.id] = true
        trueCount += 1
      }
      else copy[entries[i].target.id] = false
    }
    setVisibilities(copy)
  }

  useEffect(() => {
    const mainBody = document.getElementById("main-body")
    let observer = new IntersectionObserver(mutationHandler, {
      root: mainBody,
      rootMargin: '0px',
      threshold: [0.05, 0.25, 0.5, 0.75, 1.0]
    })
    observer.observe(document.getElementById("about"))
    observer.observe(document.getElementById("showcase"))

    setSH(window.innerHeight)

    window.onresize = (): void => {
        setSH(window.innerHeight)
    }
      
    }, [])

  const scrollToElement = (name: string): void => {
    scroller.scrollTo(name, { containerId: 'main-body', duration: 500, smooth: true, offset: -30 })
  }

  return (
    <div id="main-body" style={{ overflowY: "scroll", height: screenHeight }}>
      <div style={{ height: "fit-content" }}>
        <Head>
          <title>Tkaixiang</title>
          <meta name="description" content="Home of Tkai" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div style={{ backgroundImage: `url(${background})`, backgroundSize: "cover"  }} className="backgroundStyle bg-fixed fade-in w-full h-full">
          <div style={{ height: screenHeight }}>
            <Header scrollTo={scrollToElement} />
          </div>

          <div id="about" className="flex items-center mt-5" style={{ height: "fit-content", paddingBottom: "10vh" }}>
            <Element name="about" className={`element-style ${visibilities.about ? "fade-in" : "opacity-0"}`}>
              <About visibilities={visibilities} />
            </Element>
          </div>

          <div id="showcase" className="flex items-center" style={{ height: "fit-content", paddingBottom: "10vh" }}>
            <Element name="showcase" className={`element-style ${visibilities.showcase ? "fade-in" : "opacity-0"}`}>
              <Showcase />
            </Element>
          </div>

        </div>
      </div>
    </div>
  )
}
