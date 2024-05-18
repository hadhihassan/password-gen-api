import Icon from '../../public/GettyImages-528338761.webp';

export default function Header() {
    return (
        <div className='flex gap-2 items-center text-white p-5 h-20'>
            <img className='w-10 h-10 rounded' src={Icon} alt="Icon" />
            <div className="relative font-inter antialiased">
                <main className="relative  flex flex-col justify-center overflow-hidden">
                    <div className="w-full max-w-6xl mx-auto px-6 mt-1 md:px-1 py-">
                        <div className="text-center">
                            <div className="font-semibold text-2xl mt-2 md:text-1xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
                                Pass 
                                <span className="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                                    <ul className="block font-bold  animate-text-slide text-left leading-tight [&_li]:block">
                                        <li>Gen</li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
