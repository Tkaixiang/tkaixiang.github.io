import { useEffect } from 'react'
import useState from 'react-usestateref'
import headerStyles from './../styles/header.module.css';


const text = ["Hello", "I am Tkai"]
const Header = (props) => {
    const [header, setHeader, headerRef] = useState("")
    const [finishedOnce, finishedOnceSet, finishedOnceRef] = useState(false)
    const [playing, setPlaying] = useState(false)

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const playText = async () => {
        for (let line = 0; line < text.length; line++) {
            for (let c = 0; c < text[line].length; c++) {
                setHeader(headerRef.current + text[line][c])
                await sleep(45)
            }
            if (line < text.length - 1) {
                setHeader(headerRef.current + "\n")
                await sleep(450)
            } 
            
        }
        if (!finishedOnceRef.current) finishedOnceSet(true)
        await sleep(1000)
        hideText()
    }

    const hideText = async () => {
        while (headerRef.current.length > 0) {
            setHeader(headerRef.current.slice(0, -1))
            await sleep(25)
        }
        await sleep(100)
        playText()
    }

    useEffect(async () => {
        if (!playing) {
            await sleep(500)
            playText()
            setPlaying(true)
        }
    }, [])

    return (
        <div className="h-full text-center" style={{ position: "relative", top: 0 }}>
            <div className="text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold">
                <h1 style={{ whiteSpace: "pre-line", position: "absolute", margin: "auto", left: 0, right: 0, top: "40%"}} className={`bg-clip-text text-transparent bg-gradient-to-r text-center from-red-500 to-blue-500`}>
                    {header}
                </h1>
            </div>

            <div style={{ position: "absolute", bottom: "20px" }} className="text-center w-full flex justify-center text-gray-800 ">
                {finishedOnce && (
                    <div onClick={() => {
                        props.scrollTo("about")
                    }} className={`${headerStyles.fadeIn} p-4 2xl:p-6 shadow-2xl cursor-pointer flex items-center flex-col rounded-lg text-gray-300 bg-gray-300 bg-opacity-30 hover:shadow-sm hover:opacity-50 transition-all duration-300`}>
                        <h1 className="text-xl xl:text-3xl 2xl:text-5xl font-semibold ">Let&apos;s Begin!</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 sm:h-10 sm:w-10 lg:h-10 lg:w-10 xl:h-14 xl:w-14 2xl:h-20 2xl:w-20 mt-10 animate-bounce " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header;
