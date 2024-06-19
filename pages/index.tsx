import Head from "next/head";
import Header from "../components/header";
import About from "../components/about";
import Showcase from "../components/showcase";
import background from "./../public/assets/background.webp";
import { useEffect } from "react";
import useState from "react-usestateref";
import ReactFullpage from "@fullpage/react-fullpage";
import Particles from "react-tsparticles";

export default function Home(props) {
  const [visibilities, setVisibilities, visibilitiesRef] = useState({
    about: false,
    showcase: false,
  });
  const [screenHeight, setSH] = useState(0);

  const mutationHandler = (entries, observer): void => {
    const copy = JSON.parse(JSON.stringify(visibilitiesRef.current));
    let trueCount = 0;
    // only 1 should be true at any moment
    for (let i = 0; i < entries.length; i++) {
      if (entries[i].intersectionRatio >= 0.05) {
        copy[entries[i].target.id] = true;
        trueCount += 1;
      } else copy[entries[i].target.id] = false;
    }
    setVisibilities(copy);
  };

  useEffect(() => {
    const mainBody = document.getElementById("main-body");
    let observer = new IntersectionObserver(mutationHandler, {
      root: mainBody,
      rootMargin: "0px",
      threshold: [0.05, 0.25, 0.5, 0.75, 1.0],
    });
    observer.observe(document.getElementById("about"));
    observer.observe(document.getElementById("showcase"));

    setSH(window.innerHeight);

    window.onresize = (): void => {
      setSH(window.innerHeight);
    };
  }, []);

  return (
    <div className="bg-black">
      <div
        style={{
          height: "fit-content",
          backgroundImage: `url(${background})`,
          backgroundSize: "100% 50%",
          backgroundRepeat: "no-repeat",
        }}
        className="backgroundStyle fade-in w-full h-full"
      >
        <Head>
          <title>Tkaixiang</title>
          <meta name="description" content="Home of Tkai" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Particles
          options={{
            fullScreen: {
              zIndex: 0,
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                repulse: {
                  distance: 400,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: {
                  value: "#ffffff",
                },
                distance: 150,
                opacity: 0.4,
              },
              move: {
                attract: {
                  rotate: {
                    x: 600,
                    y: 600,
                  },
                },
                enable: true,
                path: {},
                outModes: "out",
                random: true,
                speed: 1,
                spin: {},
              },
              number: {
                density: {
                  enable: true,
                },
                value: 35,
              },
              opacity: {
                random: true,
                value: {
                  min: 0,
                  max: 1,
                },
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0,
                },
              },
              size: {
                random: true,
                value: {
                  min: 1,
                  max: 3,
                },
                animation: {
                  speed: 4,
                  minimumValue: 2,
                },
              },
            },
          }}
        />

        <ReactFullpage
          //fullpage options
          scrollingSpeed={700} /* Options here */
          setKeyboardScrolling={false}
          scrollOverflow={true}
          navigation={true}
          navigationPosition="right"
          render={({ state, fullpageApi }) => {
            return (
              <div>
                <div
                  id="home"
                  data-anchor="slide1"
                  className="section"
                  style={{ height: screenHeight }}
                >
                  <Header fullpageApi={fullpageApi} />
                </div>

                <div
                  id="about"
                  data-anchor="slide2"
                  style={{ marginTop: "10vh", marginBottom: "10vh" }}
                  className="section flex items-center"
                >
                  <div
                    className={`glassy-bg element-style ${
                      visibilities.about ? "fade-in" : "opacity-0"
                    }`}
                  >
                    <About visibilities={visibilities} />
                  </div>
                </div>

                <div
                  id="showcase"
                  data-anchor="slide3"
                  style={{ marginTop: "10vh" }}
                  className="section flex items-center"
                >
                  <div
                    className={`glassy-bg element-style ${
                      visibilities.showcase ? "fade-in" : "opacity-0"
                    }`}
                  >
                    <Showcase />
                  </div>
                </div>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}
