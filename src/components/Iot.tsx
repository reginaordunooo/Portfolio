import { useState } from 'react';
import logo from '../assets/loguito.svg';
import carrito from '../assets/IMG_7495.jpeg';
import presentacion from '../assets/presentacion.png';

const Iot = () => {
    const [isFlippedCarrito, setIsFlippedCarrito] = useState(false);
    const [isFlippedPresentacion, setIsFlippedPresentacion] = useState(false);

    return (
        <div className="flex flex-col bg-[#F9F5CF] border-[#F9F5CF] shadow-md p-[2rem] mb-[2rem] text-[#654e4a]">
            <div className="flex justify-center mb-[2rem]">
                <img src={logo} alt="Logo" />
            </div>
            <div className="flex flex-row justify-center items-center gap-[2rem] flex-wrap" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>
                <div className="flex flex-col w-[45%]">
                    <p className="text-[1rem] leading-relaxed mb-[1.5rem] text-justify">
                        Developed an IoT-based monitoring solution for beer transportation to ensure optimal
                        environmental conditions during transit. The system integrates multiple sensors with
                        an ESP8266 microcontroller to measure temperature, humidity, light, and distance,
                        transmitting real-time data to a web platform for analysis and visualization.
                    </p>
                    <div
                        className="relative w-[28rem] h-[17rem] cursor-pointer"
                        onClick={() => setIsFlippedCarrito(!isFlippedCarrito)}
                    >
                        <div
                            className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                                isFlippedCarrito ? '[transform:rotateY(180deg)]' : ''
                            }`}
                        >
                            <div className="absolute w-full h-full backface-hidden transition-transform duration-300 ease-in-out hover:scale-[1.03]">
                                <img src={carrito}className="rounded-[15px] w-full h-full shadow-md"/>
                            </div>
                            <div className="absolute w-full h-full rounded-[15px] bg-[#654e4a] text-white flex items-center justify-center text-center p-[1rem] [transform:rotateY(180deg)] backface-hidden transition-transform duration-300 ease-in-out hover:scale-[1.03]">
                                <p>Prototype built to simulate beer trailer monitoring conditions using IoT sensors.</p>
                            </div>
                        </div>
                    </div>
                </div>
 
                <div className="flex flex-row w-[45%] gap-[1.5rem]">
                    <div
                        className="relative w-[50rem] h-[25rem] cursor-pointer"
                        onClick={() => setIsFlippedPresentacion(!isFlippedPresentacion)}
                    >
                        <div
                            className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                                isFlippedPresentacion ? '[transform:rotateY(180deg)]' : ''
                            }`}
                        >
                            <div className="absolute w-full h-full backface-hidden transition-transform duration-300 ease-in-out hover:scale-[1.03]">
                                <img src={presentacion} className="rounded-[15px] w-full h-full shadow-md"/>
                            </div>
                            <div className="absolute w-full h-full rounded-[15px] bg-[#654e4a] text-white flex items-center justify-center text-center p-[1rem] [transform:rotateY(180deg)] backface-hidden transition-transform duration-300 ease-in-out hover:scale-[1.03]">
                                <p>Presentation showcasing our final prototype and the web dashboard that allowed clients to track their trailers, receive real-time alerts, and monitor environmental conditions remotely.</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-[1rem] leading-relaxed">
                        <span className="font-semibold">Project Architecture:</span>
                        <ul className="list-disc list-inside mt-[0.5rem] text-justify">
                            <li><span className="font-semibold">Hardware:</span> Light, ultrasonic, temperature, and humidity sensors; ESP8266 microcontroller; logic circuit (AND, OR, NOT).</li>
                            <li><span className="font-semibold">Software:</span> Arduino IDE for programming; Node-RED for data flow; web dashboard built with HTML, CSS, JavaScript, and PHP.</li>
                            <li><span className="font-semibold">Prototype:</span> Cardboard model simulating the trailer for testing sensor integration and system performance.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Iot;




