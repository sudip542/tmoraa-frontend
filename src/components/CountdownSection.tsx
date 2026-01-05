"use client";

import React, { useState, useEffect } from "react";

export default function CountdownSection() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const targetDate = new Date('2026-01-19').getTime();
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative overflow-hidden">

            <div data-aos="flip-down" className="mt-20 mb-10 flex justify-center px-4 items-center">
                <div className="w-full max-w-7xl rounded-2xl bg-[url('/countdown-bg.png')] bg-cover bg-center bg-no-repeat shadow-lg p-6 md:p-10 lg:px-16 text-white">

                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
                            Launch Countdown
                        </h2>
                        <p className="text-sm md:text-base lg:text-lg mt-4 px-0 md:px-10 lg:px-20">
                            Time until the official launch of Tmoraa
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
                        {/* Days */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/30">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 text-center">
                                {String(timeLeft.days).padStart(2, '0')}
                            </div>
                            <div className="text-sm md:text-base lg:text-lg text-white/90 font-medium text-center">
                                Days
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/30">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 text-center">
                                {String(timeLeft.hours).padStart(2, '0')}
                            </div>
                            <div className="text-sm md:text-base lg:text-lg text-white/90 font-medium text-center">
                                Hours
                            </div>
                        </div>

                        {/* Minutes */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/30">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 text-center">
                                {String(timeLeft.minutes).padStart(2, '0')}
                            </div>
                            <div className="text-sm md:text-base lg:text-lg text-white/90 font-medium text-center">
                                Minutes
                            </div>
                        </div>

                        {/* Seconds */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/30">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 text-center">
                                {String(timeLeft.seconds).padStart(2, '0')}
                            </div>
                            <div className="text-sm md:text-base lg:text-lg text-white/90 font-medium text-center">
                                Seconds
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-sm md:text-base lg:text-lg px-0 md:px-10 lg:px-20">
                            January 5th, 2026 - Be among the first to experience Tmoraa
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}