import React from 'react'
import Suitcase from "../images/suitcase 1.png";
import Vector from "../images/Vector.png";
import Arrow from "../images/Vector (3).png";

let cities = [
    'Abu Dhabi', 'Sharjah & Ajman', 'Ras Al Khaimah', 'Dubai', 'Fujairah', 'Umm Al Quwain'
]
export default function Content() {
    return (
        <>
            <div className='contentMain h-[600px] customFlex flex-col'>
                <div className='customFlex flex-col pb-4'>
                    <h1 className='font-Poppins font-bold text-5xl leading-10 text-white pb-4'>Are You a Supplier?</h1>
                    <h1 className='font-Poppins font-normal text-5xl leading-10 text-white'>Explore Matching Opportunities.</h1>
                </div>
                <div className='flex items-center gap-3 mt-6 pb-6 sm:flex-col md:flex-row lg:flex-row'>

                    <div className='w-96 min-h-14 bg-white border-2 border-grey rounded flex items-center justify-evenly'>
                        <div><img src={Suitcase} alt="" /></div>
                        <div>
                            <h1 className='font-Poppins font-light text-base leading-10' >Search your required service here</h1>
                        </div>
                    </div>

                    <div className='w-96 min-h-14 bg-white border-2 border-grey rounded flex items-center justify-evenly'>
                        <div><img src={Vector} alt="" /></div>
                        <div>
                            <h1 className='font-Poppins font-light text-base leading-10' >Search your desired location here</h1>
                        </div>
                    </div>
                    <button className="btn btn-success text-white">Search</button>
                </div>
                <div>
                    <span className='font-Poppins font-bold text-lg leading-7 text-white'>Are you a buyer?</span> <a className='font-Poppins font-normal text-lg leading-7 text-white underline underline-offset-4 '> Click here if you are looking to post a requirements</a>
                </div>
            </div>

            {/* Part 2 */}
            <div className='flex items-center justify-evenly h-[500px]'>
                <div>
                    <h1 className='font-Poppins font-bold text-4xl leading-10'>Ready to dive into <span className='text-blue-950'>HABOT?</span></h1>
                    <p className='font-Poppins font-light text-lg mt-5'>
                        Signing up with HABOT opens the door to a world of new opportunities <br />
                        and potential for business growth. Gain access to a vibrant community <br />
                        of like-minded individuals, unlock valuable resources, and take the first <br />
                        step towards realizing your entrepreneurial dreams.
                    </p>
                    <button className="w-80 h-14 border-2 rounded-md bg-green-700 mt-3">
                        <div className='flex items-center justify-around'>
                            <p className='font-Poppins font-bold text-lg leading-6 text-white'> Sign up Today !</p>
                            <img src={Arrow} alt="" />
                        </div>
                    </button>
                </div>
                <div className='grid grid-rows-3 grid-flow-col gap-4'>
                    {
                        cities.map((city) => {
                            return ( 
                                <div className='w-64 h-16 border-2 border-orange-400 rounded-md' key={city}>
                                    <p className='font-Poppins font-medium text-lg leading-7 mt-3.5 text-center'>{city}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
