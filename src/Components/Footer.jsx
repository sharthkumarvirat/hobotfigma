import React from 'react'
import logo from "../images/Group 4.png"
import linkedIn from "../images/LinkedIn.png"
import instagram from "../images/Instagram.png"
import twitter from "../images/Twitter.png"
import facebook from "../images/Facebook.png"

const company = ['About', 'FAQ'];
const terms = ['Data privacy', 'Terms', 'Accessibility'];
const related = ['Find Buyer', 'Feedback'];

export default function Footer() {
    return (
        <>
            <footer className="customFlex w-full py-12 bg-[#123557] mt-10">
                <div className='flex items-center justify-evenly h-full w-[85%] border-y-2 border-slate-600 py-4'>
                    <div className='flex itesm-center justify-between w-full'>
                        <div className='flex justify-evenly w-[60%]'>
                            <div className='mt-6'>
                                <img src={logo} alt="" />
                                <p className='font-Poppins font-light text-base text-white mt-4'>&copy; R Singhania</p>
                            </div>
                            <div>
                                <h6 className="font-Arial font-bold text-base text-stone-200">Company</h6>
                                {
                                    company.map((el) => {
                                        return (
                                            <p className='text-white'>{el}</p>
                                        )
                                    })
                                }
                            </div>

                            <div>
                                <h6 className="font-Arial font-bold text-base text-stone-200">Terms</h6>
                                {
                                    terms.map((el) => {
                                        return (
                                            <p className='text-white'>{el}</p>
                                        )
                                    })
                                }
                            </div>

                            <div>
                                <h6 className="font-Arial font-bold text-base text-stone-200">Related</h6>
                                {
                                    related.map((el) => {
                                        return (
                                            <p className='text-white'>{el}</p>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className='flex items-center justify-around gap-3'>
                            <img src={linkedIn} alt="" />
                            <img src={twitter} alt="" />
                            <img src={facebook} alt="" />
                            <img src={instagram} alt="" />
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}
