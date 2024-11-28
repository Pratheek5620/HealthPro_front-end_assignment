import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function Result() {
    return (
        <div className="min-h-screen bg-[#1a1a1a]">
            {/* Main Content */}
            <main className="relative min-h-[calc(100vh-73px)] ">
                <div className="container mx-auto px-6 py-8">
                    {/* Breadcrumb */}
                    <div className="text-sm text-gray-400 mb-8">
                        <Link href="/home" className="hover:text-white">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/home" className="hover:text-white">IVF Success Rate Calculator</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white">Result</span>
                    </div>

                    {/* Title with dot */}
                    <div className="flex items-center gap-3 mb-12">
                        <div className="w-3 h-3 rounded-full bg-[#ff6b6b]"></div>
                        <h1 className="text-3xl text-white font-bold">Your estimated IVF Success Rate is</h1>
                    </div>

                    {/* Results Section */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
                        {/* Success Rate Circle */}
                        <div className="relative items-center justify-center">
                            {/* <div className="w-64 h-64 relative"> */}
                                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45" fill="black" className="opacity-100" />
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="#004d40" strokeWidth="10" />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="45"
                                        fill="none"
                                        stroke="#00ff9d"
                                        strokeWidth="10"
                                        strokeDasharray="282.7"
                                        strokeDashoffset="101.772" // 282.7 * (1 - 0.64)
                                        className="drop-shadow-[0_0_10px_rgba(0,255,157,0.5)]"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                    <span className="text-6xl font-bold mb-2">64%</span>
                                    <span className="text-sm">With 1 IVF Cycle</span>
                                </div>
                            {/* </div> */}
                        </div>

                        {/* Image with Gradient Overlay */}
                        <div className="flex-1 max-w-3xl relative">
                            <Image
                                src="/happy-couple.png"
                                alt="Happy couple"
                                width={800}
                                height={600}
                                className="rounded-lg w-full h-full object-cover mix-blend-luminosity "
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/80 to-transparent rounded-lg" />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}
