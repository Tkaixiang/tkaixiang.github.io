import ShowcaseStyles from '../styles/showcase.module.css'
import parkaholic from '../public/assets/merge.png'
import sieberrsec from '../public/assets/sieberrsec.jpg'
import exegesis from '../public/assets/exegesis.jpg'
import Microbform from '../public/assets/microbform.jpg'
import buildit from '../public/assets/buildit.jpg'

const Showcase = (props) => {

    const openUrl = (url: string) => {
        window.open(url, '_blank').focus();
    }

    return (
        <div className="w-full h-full">
            <h1 style={{ width: "fit-content" }} className="text-5xl lg:text-6xl 2xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-green-500">Showcase</h1>
            <div className="w-full grid  lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-5">
                <div className={ShowcaseStyles.cardStyle} onClick={() => openUrl("https://parkaholic.sg")}>
                    <h1 className="text-3xl font-bold mb-3">Parkaholic.sg</h1>
                    <div className="w-11/12 mb-3 shadow-2xl rounded-2xl overflow-hidden">
                        <img src={parkaholic} />
                    </div>
                    <p className="text-gray-800 text-lg xl:text-xl">Initiated and developed the front-end + backend for <b>Parkaholic.sg</b>, a carpark finder application available on <b>iOS, Android &amp; Web</b>. The app provides a convenient all-in-one place to view <b>carpark data from various government agencies</b> such as Carpark Entrances, Live Carpark Availability, Carpark Rates and more!</p>
                    <h1 className="text-xl mt-5"><u>Technologies Used:</u> ReactJS, Express, MongoDB, Flask, SQLite3, AntD UI Library, Nginx</h1>
                </div>
                <div className={ShowcaseStyles.cardStyle} onClick={() => openUrl("https://github.com/IRS-Cybersec/ctf_platform")}>
                    <h1 className="text-3xl font-bold mb-3">Sieberrsec CTF Platform</h1>
                    <div className="w-11/12 mb-3 shadow-2xl rounded-2xl overflow-hidden">
                        <img src={sieberrsec}/>
                    </div>
                    <p className="text-gray-800 text-lg xl:text-xl">Initiated and developed the front-end + backend for <b>Sieberrsec CTF Platform</b>, a CTF training platform with neat features that aid in learning and training.</p>
                    <h1 className="text-xl mt-5"><u>Technologies Used:</u> ReactJS, Fastify, MongoDB, AntD UI Library, Nginx, Postfix for SMTP server</h1>
                </div>
                <div className={ShowcaseStyles.cardStyle} onClick={() => openUrl("https://github.com/IRS-Cybersec/ctfdump")}>
                    <h1 className="text-3xl font-bold mb-3">My CTF Writeups</h1>
                    <p className="text-gray-800 text-lg xl:text-xl">You can find the writeups my team (Sieberrsec) and I wrote for various CTFs by clicking on this fancy card!</p>
                    <h1 className="text-xl mt-5"><u>Technologies Used:</u> Brain &amp; Pain</h1>
                </div>
                <div className={ShowcaseStyles.cardStyle} onClick={() => openUrl("https://github.com/8man4life/E-magine")}>
                    <h1 className="text-3xl font-bold mb-3">Exegesis</h1>
                    <div className="w-11/12 mb-3 shadow-2xl rounded-2xl overflow-hidden">
                        <img src={exegesis}  />
                    </div>
                    <p className="text-gray-800 text-lg xl:text-xl">Developed the front-end for <b>Exegesis</b>, an innovative E-Learning platform. <br/> <i>This was made in roughly 2 days for the NTU SCSE Hackathon and was awarded the Technopreneurship Award (Special Mention)</i></p>
                    <h1 className="text-xl mt-5"><u>Technologies Used:</u> ReactJS, Express, MongoDB, AntD UI Library, Nginx</h1>
                </div>
                <div className={ShowcaseStyles.cardStyle} onClick={() => openUrl("https://github.com/Tkaixiang/Microbform")}>
                    <h1 className="text-3xl font-bold mb-3">Microbform</h1>
                    <div className="w-11/12 mb-3 shadow-2xl rounded-2xl overflow-hidden">
                        <img src={Microbform}  />
                    </div>
                    <p className="text-gray-800 text-lg xl:text-xl">Developed <b>Microbform</b>, an interactive, humorous and entertaining game that follows the adventures of a microbe with social anxiety. This game aimed to provide life through the lens of someone with social anxiety.<br/> <i>This was made in roughly 24 hours for the Mindfulhacks Hackathon</i></p>
                    <h1 className="text-xl mt-5"><u>Technologies Used:</u> Godot Engine</h1>
                </div>
                <div className={ShowcaseStyles.cardStyle} onClick={() => openUrl("https://github.com/Tkaixiang/SGCC2017Games")}>
                    <h1 className="text-3xl font-bold mb-3">BuildIT</h1>
                    <div className="w-11/12 mb-3 shadow-2xl rounded-2xl overflow-hidden">
                        <img src={buildit} />
                    </div>
                    <p className="text-gray-800 text-lg xl:text-xl">Developed <b>buidIT</b> which aimed to gamify the learning of environmental conservation<br/> <i>This was made for the 2017 Singapore Games Creation Competition and was awarded 1st runner-up</i></p>
                    <h1 className="text-xl mt-5"><u>Technologies Used:</u> Unity 3D</h1>
                </div>

            </div>
        </div>
    )
}

export default Showcase;