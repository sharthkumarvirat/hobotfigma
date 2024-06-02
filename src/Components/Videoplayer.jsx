import React from 'react'
import Contents from "../images/i8tgRHXx4oQ-SD 1.png";
import Checked from "../images/checked.png";
import Youtube from "../images/Youtube.png";
import user from "../images/user.png";
import document from "../images/document.png";
import handshake from "../images/handshake.png";
import search from "../images/search.png";
import request from "../images/quote-request.png";
import edit from "../images/edit.png";


export default function Videoplayer() {
    const boxes = [
        {
            imges: user,
            content: "Select Your Role and Sign Up",
            colors: "rgba(232, 251, 255, 1)",

        },
        {
            imges: document,
            content: "Buyers Post Your Requirements",
            colors: "rgba(255, 255, 255, 1)",
        },
        {
            imges: search,
            content: "Review, Select and Contact the Best Suppliers",
            colors: "rgba(255, 255, 255, 1)",
        },
        {
            imges: edit,
            content: "Suppliers Complete your profile and get notified for opportunites",
            colors: "rgba(232, 251, 255, 1)",
        },
        {
            imges: request,
            content: "Contact to Buyers and Share your Quote for the service",
            colors: "rgba(232, 251, 255, 1)",
        },
        {
            imges: handshake,
            content: "Both the parties can Connect and Make Business Leave a Feedback",
            colors: "rgba(255, 255, 255, 1)",
        }
    ]
    return (
        <div>
            <div className='customFlex pt-4 pb-12'>
                <div className='w-[80rem] h-[35rem] border-2 bg-[#072F57] customFlex'>
                    <div className='flex items-center justify-evenly h-full w-full'>
                        <div>
                            <div className='relative top-[13rem] left-[17rem]'>
                                <img width={100} src={Youtube} alt="" />
                            </div>
                            <img src={Contents} alt="" />
                        </div>
                        <div>
                            <div className='flex items-center gap-24'>
                                <h1 className='font-Poppins font-bold text-2xl text-orange-600 border-b-4 w-52 text-center py-1 border-orange-600'>Buyer</h1>
                                <h1 className='font-Poppins font-bold text-2xl  text-slate-100'>Supplier</h1>
                            </div>
                            <div>
                                <ul className='font-Poppins font-medium text-lg leading-9 text-slate-100'>
                                    <div className='flex items-center gap-3'>
                                        <img src={Checked} alt="" />
                                        <li>Post your requirements.</li>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <img src={Checked} alt="" />
                                        <li>Sit back for multiple suppliers to contact you. </li>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <img src={Checked} alt="" />
                                        <li> Choose among the suppliers based on the ratings and reviews.</li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='cont2'>
                <div className='w-full h-52 bg-[#E8FBFF]'>
                    <div className='flex items-center justify-evenly py-20'>
                        <p className='font-Poppins font-semibold text-4xl text-black'>Let Suppliers <span className='border-b-4 w-52 text-center border-orange-600' >Find You</span> </p>
                        <button className="w-56 h-14 rounded-lg bg-orange-600 font-Poppins font-bold text-base text-white"> Get Verified</button>
                    </div>
                </div>
            </div>
            <div className='cont-2 py-16 w-full flex items-center justify-center'>
                <div className='flex flex-col items-center justify-center w-[70%]' >
                    <h1 className='font-Poppins font-bold text-4xl'>How it works</h1>
                    <p className='font-Poppins font-normal text-lg'>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with </p>
                    <p className='font-Poppins font-normal text-lg pb-4'> potential buyers, and build successful business relationships, sharing valuable feedback.</p>
                </div>
            </div>
            <div className='customeFelx w-full'>
                <div className='grid grid-rows-2 grid-flow-col gap-4 items-center justify-center' >
                    {
                        boxes.map((box, index) => {
                            return (
                                <div className='flex flex-col items-center justify-evenly w-72 h-60 p-8' style={{ backgroundColor: box.colors }} >
                                    <img src={box.imges} alt="" />
                                    <p className='font-bold'>{box.content}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
