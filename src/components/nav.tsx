import DarkThemeToggle from "./dark-theme-toggle";
import MotionDiv from "./motion-div";
import Image from "next/image";
import Link from 'next/link'

export default function Nav() {
    return (
        <div className="flex flex-row">
            <div className="flex flex-col justify-center w-[150px]">
                <MotionDiv className="flex justify-center">
                    <a href="/">
                        <Image
                            src="/avatar.png"
                            alt="Muhammad Ramadhani"
                            className="rounded-full bg-white"
                            width={80}
                            height={80}
                            priority
                        />
                    </a>
                </MotionDiv>
            </div>

            <MotionDiv className="flex justify-end sm:justify-between w-full">
                <Link href="/" className="hidden sm:block text-2xl lg:text-4xl my-auto p-2 title text-emerald-700 dark:text-emerald-700">
                    Muhammad Ramadhani
                </Link>

                <div className="flex flex-row py-6 p-2 md:p-6">
                    <DarkThemeToggle />
                    <Link className="p-2" href="/reading">Reading</Link>
                    <Link className="p-2" href="/projects">Projects</Link>
                </div>
            </MotionDiv>
        </div>
    )
}