// pages/help.js
import React from 'react';
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";




export default function Help() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">GET HELP</h1>
                    <div className="relative w-full max-w-lg mx-auto">
                        <input
                            type="text"
                            placeholder="What can we help you with?" 
                            className="w-full border border-gray-300 rounded-md py-2 px-4 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />

                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">
                            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
                        </h2>
                        <p className="text-gray-600 mb-4">
                            We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 mb-4">
                            <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
                            <li>Apple Pay</li>
                        </ul>
                        <p className="text-gray-600 mb-4">
                            If you enter your PAN information at checkout, you’ll be able to pay for your order with PayTM or a local credit or debit card.
                        </p>
                        <p className="text-gray-600 mb-4">
                            <strong>Nike Members</strong> can store multiple debit or credit cards in their profile for faster checkout. If you’re not already a Member,{' '}
                            <a href="#" className="text-blue-600 underline">join us today</a>.
                        </p>
                        <div className="flex gap-4 mb-8">
                            <button className="bg-black text-white px-4 py-2 rounded-md">JOIN US</button>
                            <button className="bg-black text-white px-4 py-2 rounded-md">SHOP NIKE</button>
                        </div>

                        <h3 className="text-lg font-semibold text-black mb-4">FAQs</h3>
                        <div className="mb-4">
                            <p className="font-semibold text-black">Does my card need international purchases enabled?</p>
                            <p className="mt-2 text-gray-600">Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
                        </div>
                        <div className=" mb-4">
                            <p className="font-semibold text-black">Can I pay for my order with multiple methods?</p>
                            <p className="mt-2 text-gray-600">No, payment for Nike orders can’t be split between multiple payment methods.</p>
                        </div>
                        <div className=" mb-4">
                            <p className=" text-black font-semibold ">What payment method is accepted for SNKRS orders?</p>
                            <p className="mt-2 text-gray-600">You can use any accepted credit card to pay for your SNKRS order.</p>
                        </div>
                        <div className="  mb-4">
                            <p className="text-black font-semibold">Why don’t I see Apple Pay as an option?</p>
                            <p className="mt-2 text-gray-600">To see Apple Pay as an option in the Nike App or on Nike.com, you’ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you’ll need to use Safari to use Apple Pay on Nike.com.</p>

                            <div className=''>

                                <p className='text-black font-semibold mb-4'>Was this answer helpful?</p>
                                <ul className='flex gap-4 '>
                                    <FaThumbsUp /><FaThumbsDown />
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <ul className='grid justify-center mb-6'>
                            <img src='/mob.png' alt='mobilepic' width={64} height={64} className='mb-4' />
                        </ul>
                        <ul className='grid justify-center mt-10'>
                            <p className='items-center'> 000 800 919 0566</p>
                        </ul>
                        <ul className='grid justify-center mb-6 '>
                            <p>Products & Orders: 24 hours a day,</p>
                            <p className='ml-20'> 7 days a week</p>
                            <p> Company Info & Enquiries: 07:30- </p>
                            <p className='ml-14'> 16:30, Monday - Friday</p>
                        </ul>

                        <ul className='grid justify-center mb-6 mt-10'>
                            <img src='/MSG.png' alt='message icon' width={64} height={64} />
                        </ul>

                        <ul className='grid justify-center'>
                            <p>24 hours a day</p>
                        </ul>

                        <ul className='grid justify-center'>
                            <p>7 days a week</p>
                        </ul>

                        <ul className='grid justify-center mb-6 mt-10'>
                            <img src='/email.png' alt='email icon pic' width={64} height={64} />
                        </ul>
                        <ul className='grid justify-center'>
                            <p>We'll reply within</p>
                        </ul>
                        <ul className='grid justify-center'>
                            <p>five business days</p>
                        </ul>
                        <ul className='grid justify-center mb-6 mt-10'>
                            <img src='/location.png' alt='location icon' />
                        </ul>

                        <ul className='grid justify-center'>
                            <p>STORE LOCATOR</p>
                        </ul>

                        <ul className='grid justify-center'>
                            <p>Find Nike retail stores near you</p>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}
