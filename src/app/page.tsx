
'use client'

import Nav from "@/components/nav";
import MotionDiv from "@/components/motion-div";
import { FaGithub, FaGitlab, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import AboutMe from "@/components/home/about-me";
import Skills from "@/components/home/skills";
import Experiences from "@/components/home/experiences";
import PageSeparator from "@/components/page-separator";
import Link from "next/link";

export default function Home() {

    return (
        <main className="min-h-screen w-full flex flex-col p-2 md:p-4 lg:p-24 bg-[#f5f5f5] dark:bg-slate-950">
            <Nav />

            <div className="flex flex-row">

                <div className="flex flex-col justify-center w-[150px]">
                    <div className="flex flex-col justify-between p-5 md:p-2 h-[calc(100vh-100px)] lg:h-[calc(100vh-200px)]">
                        <MotionDiv className="flex justify-center">
                            <Link target="_blank" className="text-center text-xs md:text-sm" href="https://docs.google.com/document/d/12nK-EZq0slOj3H6wSyay0bdI_98G0B8lhtZqI1COjZA?usp=sharing"><span className="block">Download</span> Resume</Link>
                        </MotionDiv>
                        <MotionDiv className="flex flex-col space-y-1 text-center justify-center p-2 md:p-6 md:pb-0 md:px-8">
                            <Link target="_blank" className="flex justify-center hover:text-sky-600 dark:hover:text-sky-600 p-2" href="https://linkedin.com/in/muhammad-ramadhani"><FaLinkedinIn className="w-8 h-8" /></Link>
                            <Link target="_blank" className="flex justify-center hover:text-gray-800 dark:hover:text-gray-800 p-2" href="https://github.com/ramadhanii"><FaGithub className="w-8 h-8" /></Link>
                            <Link target="_blank" className="flex justify-center hover:text-orange-600 dark:hover:text-orange-600 p-2" href="https://gitlab.com/dhanii"><FaGitlab className="w-8 h-8" /></Link>
                            <Link target="_blank" className="flex justify-center hover:text-sky-400 dark:hover:text-sky-400 p-2" href="https://twitter.com/mrdhaniiii"><FaTwitter className="w-8 h-8" /></Link>
                        </MotionDiv>
                    </div>
                </div>

                <section id="content" className="flex flex-col">
                    <div className="flex flex-col justify-between w-full pt-5 md:p-4 md:pt-2 h-[calc(100vh-100px)] lg:h-[calc(100vh-200px)]">
                        <MotionDiv>
                            <p className="text-4xl md:text-5xl lg:text-8xl">
                                Hello!<span className="hover:animate-spin">👋</span><br />
                                I&apos;m Dhani.
                            </p>
                        </MotionDiv>
                        <MotionDiv className="before:from-white before:to-transparent">
                            <p className="pb-4 text-4xl md:text-5xl lg:text-8xl">A Software Engineer with 8+ years of experience.</p>
                        </MotionDiv>
                    </div>
                </section>
            </div>

            <AboutMe />
            <PageSeparator />
            <Skills />
            <PageSeparator />
            <Experiences />
        </main>
    );
}
