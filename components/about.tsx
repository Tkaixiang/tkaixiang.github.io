import Tkai28 from '../public/assets/Tkai28.webp'
import ReactLogo from '../public/assets/react.webp'
import NodeJS from '../public/assets/nodejs.webp'
import mongodb from '../public/assets/mongodb.png'
import python from '../public/assets/python.webp'
import sqlite from '../public/assets/sqlite.webp'
import javascript from '../public/assets/javascript.webp'
import express from '../public/assets/express.webp'
import fastify from '../public/assets/fastify.webp'
import linux from '../public/assets/linux.webp'
import websocket from '../public/assets/websocket.webp'
import tableau from '../public/assets/tableau.png'
import flask from '../public/assets/flask.webp'
import unity from '../public/assets/unity.webp'
import cpp from '../public/assets/cpp.png'
import godot from '../public/assets/godot.webp'
import csharp from '../public/assets/csharp.webp'
import nginx from '../public/assets/nginx.png'
import AboutStyles from '../styles/about.module.css'
import GithubSVG from '../public/assets/github.svg'
import LinkedinSVG from '../public/assets/linkedin.svg'
import { Line } from 'rc-progress';
import useState from 'react-usestateref'
import { useEffect } from 'react';


const progressConstants = {
    line1: 80,
    line2: 75,
    line3: 70,
    line4: 65,
    line5: 50
}
const About = (props) => {

    const progressList = {
        line1: useState(0),
        line2: useState(0),
        line3: useState(0),
        line4: useState(0),
        line5: useState(0)
    }

    const mutationHandler = (entries, observer): void => {
        for (let i = 0; i < entries.length; i++) {
            if (entries[i].isIntersecting && progressList[entries[i].target.id][2].current === 0) {
                setTimeout(() => { progressList[entries[i].target.id][1](progressConstants[entries[i].target.id]) }, 400)
            }
        }
    }

    useEffect(() => {
        let observer = new IntersectionObserver(mutationHandler, {
            root: null,
            rootMargin: '0px',
            threshold: [0.5, 1.0]
        })
        observer.observe(document.getElementById("line1"))
        observer.observe(document.getElementById("line2"))
        observer.observe(document.getElementById("line3"))
        observer.observe(document.getElementById("line4"))
        observer.observe(document.getElementById("line5"))
    }, [])

    useEffect(() => {
        if (props.visibilities.about) {
            for (const line in progressList) {
                progressList[line][1](0)
            }
        }
    }, [props.visibilities.about])

    const openUrl = (url: string) => {
        window.open(url, '_blank').focus();
    }

    return (
        <div className="w-full h-full">
            <h1 style={{ width: "fit-content" }} className="text-5xl lg:text-6xl 2xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-green-500">About Me</h1>
            <div className="flex mt-6 items-center lg:flex-row flex-col">
                <div className="mr-5">
                    <img src={Tkai28} />
                </div>
                <p className="text-gray-200 text-lg xl:text-xl">
                    Hi there 😊! I am Teo Kai Xiang (otherwise known by my online names as <code>Tkai</code> or <code>Tkaixiang</code>). I enjoy anything technology related, and have been mainly focusing on <b>Web/App Development</b> &amp; <b>Cybersecurity</b> recently.
                    <br /><br />
                    You might see me take part in local <b>Hackathons</b> and <b>CTFs</b>, do say hi if you do ✋! <br />
                    You can find a list of stuff I have worked with below this, as well as a <b>Showcase</b> of projects I worked on further down the page.
                </p>
                <div className="ml-3 grid grid-cols-2  w-full mt-5 lg:mt-0 lg:w-20 lg:grid-cols-1 gap-4 ">
                    <div className={`${AboutStyles.cardStyle}` } onClick={() => {openUrl("https://github.com/Tkaixiang")}}>
                        <div className="text-2xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle} onClick={() => {openUrl("https://www.linkedin.com/in/teo-kai-xiang-3209a61b3/")}}>
                        <div className="text-2xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"></path>
                            </svg>
                        </div>
                    </div>

                </div>

            </div>

            <hr className="mt-5 border-gray-500 border-t-2" />
            <h2 style={{ width: "fit-content" }} className="mt-2 text-3xl lg:text-4xl 2xl:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-green-500"> Proficiency &amp; Skills</h2>
            <div className="mt-5 grid lg:grid-cols-2 gap-4">
                <div id="line1" className="flex flex-col justify-center">
                    <div className="text-2xl font-bold flex items-baseline ">
                        <h1 className="mr-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">Front-End Development</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <Line strokeColor={"#108ee9"} percent={progressList.line1[0]} />
                </div>
                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-48">
                            <img src={ReactLogo} />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-24">
                            <img src={javascript} />
                        </div>
                    </div>

                </div>
                <div className="lg:col-span-2 flex justify-center"><hr className="mt-5 border-gray-700 w-19/20 border-t-2 border-dashed" /></div>
                <div className="flex flex-col justify-center">
                    <div id="line2" className="text-2xl font-bold flex items-baseline">
                        <h1 className="mr-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300  to-yellow-300">Back-End Development</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <Line strokeColor={"#6366F1"} percent={progressList.line2[0]} />
                </div>
                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-32">
                            <img src={NodeJS} />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-36">
                            <img src={mongodb} />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-48">
                            <img src={nginx} />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-16">
                            <img src={linux} />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-32">
                            <img src={sqlite} />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-48">
                            <img src={express} />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-48">
                            <img src={fastify} />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-48">
                            <img src={websocket} />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-48">
                            <img src={flask} />
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2 flex justify-center"><hr className="mt-5 border-gray-700 w-19/20 border-t-2 border-dashed" /></div>
                <div className="flex flex-col justify-center">
                    <div id="line3" className="text-2xl font-bold flex items-baseline">
                        <h1 className="mr-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-blue-500  to-green-300">Languages I am Comfortable In</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                        </svg>
                    </div>
                    <Line strokeColor={"#10B981"} percent={progressList.line3[0]} />
                </div>
                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-24">
                            <img src={javascript} />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-56">
                            <img src={python} />
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2 flex justify-center"><hr className="mt-5 border-gray-700 w-19/20 border-t-2 border-dashed" /></div>
                <div className="flex flex-col justify-center">
                    <div id="line4" className="text-2xl font-bold flex items-baseline">
                        <h1 className="mr-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500  to-blue-500">Cybersecurity</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <Line strokeColor={"#EF4444"} percent={progressList.line4[0]} />
                </div>
                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-xl font-bold mb-3 text-center">
                    <div className={AboutStyles.cardStyle}>
                        <div>
                            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">Forensics</h1>
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div>
                            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-red-700">Reverse Engineering</h1>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2 flex justify-center"><hr className="mt-5 border-gray-700 w-19/20 border-t-2 border-dashed" /></div>
                <div className="flex flex-col justify-center">
                    <div id="line5" className="text-2xl font-bold flex items-baseline">
                        <h1 className="mr-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500  to-yellow-500">Misc.</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                    </div>
                    <Line strokeColor={"#F59E0B"} percent={progressList.line5[0]} />
                </div>
                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-48">
                            <img src={tableau} />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-32">
                            <img src={unity} />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-32">
                            <img src={cpp} />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-40">
                            <img src={godot} />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-16">
                            <img src={csharp} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;