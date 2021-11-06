import Head from 'next/head'
import Header from './../components/header'
import About from './../components/about'
import { Element, scroller } from 'react-scroll'
import { useEffect} from 'react'
import useState from 'react-usestateref'
export default function Home() {
  const [visibilities, setVisibilities] = useState({
    about: true,
    showcase: false
  })
  const [lastTrue, setLastTrue, lastTrueRef] = useState("")

  const mutationHandler = (entries, observer) => {
    const copy = JSON.parse(JSON.stringify(visibilities))
    let trueCount = 0
    let trueName = ""
    for (let i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        copy[entries[i].target.id] = true
        trueCount += 1
        trueName = entries[i].target.id
      } 
      else copy[entries[i].target.id] = false
    }
    if (!copy[lastTrueRef] && trueCount <= 1) {
      setLastTrue(trueName)
      setVisibilities(copy)
    } 
  }

  useEffect(() => {
    let observer = new IntersectionObserver(mutationHandler, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    });
    observer.observe(document.getElementById("about"))
    observer.observe(document.getElementById("showcase"))
  }, [])

  const scrollToElement = (name) => {
    scroller.scrollTo(name)
  }

  return (
    <div>
      <Head>
        <title>Tkaixiang</title>
        <meta name="description" content="Home of Tkai" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" fade-in bg-gradient-to-tr from-blue-400  to-green-400 w-full h-full ">
        <div className="h-screen" style={{ scrollSnapAlign: "center" }}>
          <Header scrollTo={scrollToElement} />
        </div>

        <div name="about" id="about" className="h-screen flex items-center" style={{ scrollSnapAlign: "start" }}>
          {visibilities.about && (
            <Element className="element-style fade-in">
              <About />
            </Element>
          )}

        </div>

        <div name="showcase" id="showcase" className="h-screen flex items-center" style={{ scrollSnapAlign: "start" }}>
          {visibilities.showcase && (
            <Element className="element-style fade-in">Showcase</Element>
          )}
        </div>
      </div>
    </div>
  )
}
