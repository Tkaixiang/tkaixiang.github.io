import Image from 'next/image';

const About = () => {
    return (
        <div className="w-full h-full overflow-y-auto">
            <h1 style={{ width: "fit-content" }} className="subpixel-antialiased text-5xl lg:text-6xl 2xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-green-500">About Me</h1>
            <div className="flex mt-6 items-center md:h-2/5 md:flex-row flex-col">
                <div className="mr-5">
                    <Image src="/Tkai28.png" width={700} height={700} />
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="mt-6 md:h-2/5 w-full grid md:grid-cols-2 xl:grid-cols-3 gap-4 ">
                <div className="card-style">
                    Hello
                </div>
                <div className="card-style">
                    Hello
                </div>
                <div className="card-style">
                    Hello
                </div>
                <div className="card-style">
                    Hello
                </div>
                <div className="card-style">
                    Hello
                </div>
                <div className="card-style">
                    Hello
                </div>
            </div>
        </div>
    )
}

export default About;