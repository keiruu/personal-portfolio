import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <div className="flex flex-row justify-center h-view items-center">

            <div className="flex-col text-primary font-rubik text-4xl font-bold">

                <h2 className="font-medium">hi I&apos;m</h2>

                <h1 className="text-8xl font-extrabold">abby.</h1>

                <p className="text-sm text-center font-extralight pt-10">IT Student at West Visayas State University.</p>
                <p className="text-sm text-center font-extralight ">I enjoy making apps for fun.</p>

                <div className="flex gap-5 justify-center items-center pt-5">

                    <button className="bg-transparent border border-brightpink hover:bg-brightpink text-brightpink hover:text-white 
                        font-light px-4 rounded-full w-[109px] h-[35px] text-sm transition-all">
                        learn more
                    </button>

                    <button className="bg-brightpink border border-brightpink hover:bg-transparent text-white hover:text-brightpink 
                        font-light px-4 rounded-full w-[109px] h-[35px] text-sm transition-all">
                        <FontAwesomeIcon icon={faDownload} /> resume
                    </button>
                </div>
            </div>

        </div>
    )
}