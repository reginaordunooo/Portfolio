import { useState } from 'react'
import logo from '../assets/LogoMotion.svg'
import lobby from '../assets/Lobby Profesor.svg'
import simulador from '../assets/Counter.svg'

const MotionLab = () => {
    const [flipped1, setFlipped1] = useState(false)
    const [flipped2, setFlipped2] = useState(false)

    return (
        <div className="flex flex-col bg-[#BFD3A9] border-[#BFD3A9] shadow-md px-[2rem] pb-[2rem] text-[#032b6f] mb-[2rem]" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>
            <div className="flex flex-row justify-center items-center gap-[2rem]">
                <img src={logo} className="w-[15rem] h-auto" />
                <p className="max-w-[60rem] text-[1.2rem] leading-relaxed font-medium">
                    Developed a dynamic web application designed to teach kinematics through real-time car motion simulations.
                    The platform allows students to collaborate, adjust variables such as velocity and acceleration, and solve 
                    physics challenges with immediate visual feedback, fostering a more engaging and interactive learning experience.
                </p>
            </div>

            <div className="flex flex-row justify-center items-center gap-[2rem] flex-wrap">
                <div 
                    className="relative w-[27rem] h-[17rem]" 
                    onClick={() => setFlipped1(!flipped1)}
                >
                    <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${flipped1 ? "[transform:rotateY(180deg)]" : ""}`}>
                        <div className="absolute w-full h-full backface-hidden transition-transform duration-300 ease-in-out hover:scale-[1.03]">
                            <img src={lobby} alt="Professor Lobby" className="rounded-[15px] w-full h-full object-cover shadow-md" />
                        </div>
                        <div className="absolute w-full h-full rounded-[15px] bg-[#032b6f] text-white flex items-center justify-center text-center p-[1rem] [transform:rotateY(180deg)] backface-hidden transition-transform duration-300 ease-in-out hover:scale-[1.03]">
                            <p>Professor lobby view displaying student sessions and simulation management tools.</p>
                        </div>
                    </div>
                </div>

                <div className="text-[1rem] leading-relaxed w-[25rem] text-center px-[1rem]" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>
                    <span className="font-semibold text-[1.1rem]">Project Architecture:</span>
                    <ul className="list-disc list-inside mt-[0.5rem] text-justify">
                        <li><span className="font-semibold">Frontend:</span> React for building an interactive web interface.</li>
                        <li><span className="font-semibold">Backend:</span> Express.js with Sequelize for efficient data handling.</li>
                        <li><span className="font-semibold">Database:</span> PostgreSQL for structured data storage and management.</li>
                        <li><span className="font-semibold">Features:</span> Real-time motion simulations, collaborative tools, and variable control.</li>
                    </ul>
                </div>

                <div 
                    className="relative w-[27rem] h-[17rem]" 
                    onClick={() => setFlipped2(!flipped2)}
                >
                    <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${flipped2 ? "[transform:rotateY(180deg)]" : ""}`}>
                        <div className="absolute w-full h-full backface-hidden transition-transform duration-300 ease-in-out hover:scale-[1.03]">
                            <img src={simulador} alt="Simulation Interface" className="rounded-[15px] w-full h-full object-cover shadow-md" />
                        </div>
                        <div className="absolute w-full h-full rounded-[15px] bg-[#032b6f] text-white flex items-center justify-center text-center p-[1rem] [transform:rotateY(180deg)] backface-hidden transition-transform duration-300 ease-in-out hover:scale-[1.03]">
                            <p>Simulation interface where students adjust variables and visualize motion in real time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MotionLab





