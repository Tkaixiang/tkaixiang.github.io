import Tkai28 from '../public/assets/Tkai28.png'
import ReactLogo from '../public/assets/react.png'
import NodeJS from '../public/assets/nodejs.png'
import mongodb from '../public/assets/mongodb.png'
import python from '../public/assets/python.png'
import sqlite from '../public/assets/sqlite.png'
import javascript from '../public/assets/javascript.png'
import express from '../public/assets/express.png'
import fastify from '../public/assets/fastify.png'
import linux from '../public/assets/linux.png'
import websocket from '../public/assets/websocket.jpeg'
import tableau from '../public/assets/tableau.png'
import flask from '../public/assets/flask.png'
import unity from '../public/assets/unity.png'
import cpp from '../public/assets/cpp.png'
import godot from '../public/assets/godot.png'
import csharp from '../public/assets/csharp.png'
import nginx from '../public/assets/nginx.png'
import AboutStyles from '../styles/about.module.css'
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

    const mutationHandler = (entries, observer) => {
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

    return (
        <div className="w-full h-full">
            <h1 style={{ width: "fit-content" }} className="text-5xl lg:text-6xl 2xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-green-500">About Me</h1>
            <div className="flex mt-6 items-center md:flex-row flex-col">
                <div className="mr-5">
                    <img src={Tkai28} />
                </div>
                <p className="text-gray-800 text-lg xl:text-xl">
                    Hi there 😊! I am Teo Kai Xiang (otherwise known by my online names as <code>Tkai</code> or <code>Tkaixiang</code>). I enjoy anything technology related, and have been mainly focusing on <b>Web/App Development</b> &amp; <b>Cybersecurity</b> recently. 
                    <br/><br/>
                    You might see me take part in local <b>Hackathons</b> and <b>CTFs</b>, do say hi if you do ✋! <br/>
                    You can find a list of stuff I have worked with below this, as well as a <b>Showcase</b> of projects I worked on further down the page.
                </p>
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
                            <img src={ReactLogo} layout="responsive" />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-24">
                            <img src={javascript} layout="responsive" />
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
                            <img src={NodeJS} layout="responsive" />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-36">
                            <img src={mongodb} layout="responsive" />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-48">
                            <img src={nginx} layout="responsive" />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-16">
                            <img src={linux} layout="responsive" />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-32">
                            <img src={sqlite} layout="responsive" />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-48">
                            <img src={express} layout="responsive" />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-48">
                            <img src={fastify} layout="responsive" />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-48">
                            <img src={websocket} layout="responsive" />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-48">
                            <img src={flask} layout="responsive" />
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
                            <img src={javascript} layout="responsive" />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-56">
                            <img src={python} layout="responsive" />
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
                            <img src={tableau} layout="responsive" />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-32">
                            <img src={unity} layout="responsive" />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-32">
                            <img src={cpp} layout="responsive" />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-40">
                            <img src={godot} layout="responsive" />
                        </div>
                    </div>
                    <div className={AboutStyles.cardStyle}>
                        <div className="w-16">
                            <img src={csharp} layout="responsive" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;