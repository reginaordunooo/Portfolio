import { useState } from 'react'
import logo from '../assets/logoSky.png'
import sky from '../assets/skyCheck.png'

const SkyCheck = () => {
    const [flipped, setFlipped] = useState(false)

    return (
        <div className="flex flex-col px-[2rem] pb-[2rem] mb-[2rem]" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>
            <div className="flex flex-row justify-center items-center gap-[2rem]">
                <p className="max-w-[60rem] text-[1.2rem] leading-relaxed font-medium text-[#00507A]">
                    Developed an interactive React web app that visualizes real-time weather data using OpenWeatherMap and Meteomatics APIs. 
                    Integrates temperature, humidity, wind, and air quality into a single dashboard with maps, predictive alerts, and trend 
                    charts—helping users make informed decisions in farming, travel, and daily planning.
                </p>
                <div className="flex flex-col justify-center items-center leading-tight">
                    <img src={logo} alt="Logo" className="w-[8rem] mb-[-1.5rem]" />
                    <p className="text-[2rem] text-[#A9C8F4]" style={{ fontFamily: '"Source Serif Pro", serif' }}>
                        Sky Check
                    </p>
                </div>
            </div>
            <div className="flex justify-center mt-[1.5rem] gap-[2rem] text-[#00507A] text-[1rem] font-medium">
                <span>React</span>
                <span>OpenWeatherMap API</span>
                <span>Meteomatics API</span>
                <span>Express</span>
            </div>
            <div className="flex justify-center mt-[2rem]">
                <div className="relative w-[62%] h-[30rem] cursor-pointer [perspective:1000px]"
                    onClick={() => setFlipped(!flipped)}>
                    <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                            flipped ? "[transform:rotateY(180deg)]" : ""
                        }`}>
                        <div className="absolute w-full h-full [backface-visibility:hidden]">
                            <img src={sky} className="rounded-[15px] w-full h-full object-cover shadow-md"/>
                        </div>
                        <div className="absolute w-full h-full rounded-[15px] bg-[#00507A] text-white flex items-center justify-center text-center p-[1rem] [transform:rotateY(180deg)] [backface-visibility:hidden]">
                            <p className="max-w-[80%] text-[1.1rem] leading-relaxed">
                                The SkyCheck dashboard combines real-time climate data with visual analytics to forecast risks and help users take preventive action across sectors like agriculture and travel.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkyCheck



