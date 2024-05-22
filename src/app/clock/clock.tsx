'use client';

import Link from "@/components/nav";
import MotionDiv from "@/components/motion-div";
import { useEffect, useState } from "react";

type ClockProps = {
    day: string,
    hour: string | number,
    minute: string | number,
    ampm: string,
    second: string | number,
    date: string | number,
    month: string | number,
    year: string | number
}

const dayInString = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

function formatDate(date: Date): ClockProps {
    const dates = date.getDate();
    const months = date.getMonth();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    const hour = hours ? (hours < 10 ? '0' + hours : hours) : 12;
    const minute = minutes < 10 ? '0' + minutes : minutes;
    const second = seconds < 10 ? '0' + seconds : seconds;
    const theDate = dates < 10 ? '0' + dates : dates;
    const month = months < 10 ? '0' + months : months;
    return {
        day: dayInString[date.getDay()],
        hour,
        minute,
        ampm,
        second,
        date: theDate,
        month,
        year: date.getFullYear()
    }
}


export default function Clock() {
    const [date, setDate] = useState({} as ClockProps);


    useEffect(() => {
        const interval = setInterval(() => setDate(formatDate(new Date())), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="min-h-screen w-full p-2 md:p-4 lg:p-24 flex flex-col bg-[#f5f5f5] dark:bg-slate-950">
            <Link hideBranding={true} />

            <MotionDiv className="flex flex-row justify-center w-full h-[calc(100vh-120px)] lg:h-[calc(100vh-300px)]">
                {
                    date.hour ?
                        <div className="p-4 pt-20 md:p-36 flex flex-col justify-center align-middle">
                            <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-center text-black dark:text-gray-200">
                                {date.hour}:{date.minute}:{date.second} {date.ampm}
                            </h1>
                            <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl md:pt-3 text-center text-black dark:text-gray-200">
                                {date.day} &#x2022; {date.date}-{date.month}-{date.year}
                            </h1>
                        </div>
                        :
                        <div className="text-black dark:text-white p-24 pt-3">Loading...</div>
                }
            </MotionDiv>
        </main>
    )
}