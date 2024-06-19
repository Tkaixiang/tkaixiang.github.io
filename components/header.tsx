import { useEffect, useRef } from "react";
import useState from "react-usestateref";
import headerStyles from "./../styles/header.module.css";

const text = ["Hello", "I am Tkai"];
const Header = (props) => {
  const [header, setHeader, headerRef] = useState([]);
  const [finishedOnce, finishedOnceSet, finishedOnceRef] = useState(false);
  const playing = useRef(false);

  // async functions return a promise
  // add the type of your return function inside the <>
  const sleep = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const playText = async (): Promise<void> => {
    for (let line = 0; line < text.length; line++) {
      for (let c = 0; c < text[line].length; c++) {
        setHeader([
          ...headerRef.current,
          <span key={`line-${line}-${c}`}>{text[line][c]}</span>,
        ]);
        await sleep(50);
      }
      if (line < text.length - 1) {
        setHeader([...headerRef.current, <br key="break" />]);
        await sleep(400);
      }
    }
    if (!finishedOnceRef.current) finishedOnceSet(true);
    await sleep(1000);
    await hideText();
  };

  const hideText = async (): Promise<void> => {
    while (headerRef.current.length > 0) {
      setHeader([...headerRef.current.slice(0, -1)]);
      await sleep(30);
    }
    await sleep(100);
    await playText();
  };

  const startUp = async (): Promise<void> => {
    if (!playing.current) {
      playing.current = true;
      await sleep(500);
      await playText();
    }
  };

  useEffect((): void => {
    startUp();
  }, []);

  return (
    <div
      style={{ justifyContent: "space-between" }}
      className="h-screen text-center flex items-center flex-col"
    >
      <div></div>
      <div className="text-6xl h-6 lg:text-7xl xl:text-8xl font-extrabold">
        <h1
          style={{ overflow: "hidden", whiteSpace: "pre-line" }}
          className={`${headerStyles.typingEffect} bg-clip-text text-transparent bg-gradient-to-r text-center from-purple-600 via-red-600 to-yellow-600`}
        >
          {header.map((obj) => obj)}
        </h1>
      </div>

      <div
        style={{ marginBottom: "3vh" }}
        className={` text-center w-full flex justify-center text-gray-800`}
      >
        <div
          onClick={() => {
            props.fullpageApi.moveTo("slide2");
          }}
          className={`${
            finishedOnce ? headerStyles.fadeIn : "opacity-0"
          } p-4 2xl:p-6 shadow-2xl cursor-pointer flex items-center flex-col rounded-lg text-gray-200 glassy-bg hover:shadow-sm hover:opacity-50 hover:-translate-y-3 transition-all duration-300`}
        >
          <h1 className="text-xl xl:text-3xl font-semibold ">
            Let&apos;s Begin!
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 sm:h-10 sm:w-10 lg:h-10 lg:w-10 xl:h-14 xl:w-14  mt-10 animate-bounce "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
