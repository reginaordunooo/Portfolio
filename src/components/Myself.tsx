const Myself = () => {
    return (
        <div className="flex flex-row bg-white border-white rounded-[30px] shadow-md m-[2rem] p-[2rem] items-center justify-center text-[#00507A] transition-transform duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl">
            <div className="flex flex-col gap-[0.5rem] w-[40%]" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>
                <h1 className="text-[3rem] font-semibold">Regina Orduño</h1>
                <p className="text-[1.5rem] text-[#00507A]/80">21 years old</p>
            </div>
            <div className="w-[55%]" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>
                <p className="text-[1rem] leading-relaxed">
                    A driven Computer Science student at Tecnológico de Monterrey with strong problem-solving and analytical skills, and a passion for web development and cybersecurity. Committed to applying knowledge and technology through software development, data management, and research to address real-world challenges. Inspired by personal interests such as reading and music, which enrich my perspective and creativity in academic and professional contexts.
                </p>
            </div>
        </div>
    )
}

export default Myself
