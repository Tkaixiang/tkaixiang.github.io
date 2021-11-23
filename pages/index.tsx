import Head from 'next/head'
import Header from '../components/header'
import About from '../components/about'
import Showcase from '../components/showcase'
import background from './../public/assets/background.jpg'
import { useEffect } from 'react'
import useState from 'react-usestateref'
import ReactFullpage from '@fullpage/react-fullpage';



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

  return (
    <div style={{ height: "fit-content", backgroundImage: `url(${background})`, backgroundSize: "cover" }} className="backgroundStyle bg-fixed fade-in w-full h-full">
      <Head>
        <title>Tkaixiang</title>
        <meta name="description" content="Home of Tkai" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ReactFullpage
        //fullpage options
        scrollingSpeed={700} /* Options here */
        setKeyboardScrolling={false}
        scrollOverflow={true}
        navigation={true}
        navigationPosition='right'
        render={({ state, fullpageApi }) => {
          return (
            <div>
              <div id="home" data-anchor="slide1" className="section" style={{ height: screenHeight }}>
                <Header fullpageApi={fullpageApi} />
              </div>

              <div id="about" data-anchor="slide2" style={{ marginTop: "10vh", marginBottom: "10vh" }} className="section flex items-center">
                <div className={`element-style ${visibilities.about ? "fade-in" : "opacity-0"}`}>
                  <About visibilities={visibilities} />
                </div>
              </div>

              <div id="showcase" data-anchor="slide3" style={{ marginTop: "10vh" }} className="section flex items-center">
                <div className={`element-style ${visibilities.showcase ? "fade-in" : "opacity-0"}`}>
                  <Showcase />
                </div>
              </div>

            </div>
          );
        }}
      />

    </div>
  )
}
