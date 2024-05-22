'use client';
import Link from "@/components/nav";
import MotionDiv from "@/components/motion-div";
export default function Page() {
    return (
        <main className="min-h-screen w-full p-2 md:p-4 lg:p-24 flex flex-col bg-[#f5f5f5] dark:bg-slate-950">
            <Link />
            <section id="heading" className="md:p-6 md:pl-8">
                <MotionDiv className="flex flex-col ">
                    <h1 className="text-2xl md:text-5xl text-black dark:text-gray-200">Reading</h1>
                    <p className="text-sm pt-2">Hi there, in this section you will find all my reading/bookmarks that I think it will be useful.</p>
                </MotionDiv>
            </section>
        </main>
    )
}