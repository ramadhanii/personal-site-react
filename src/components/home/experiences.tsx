import MotionDiv from "@/components/motion-div";
import Image from "next/image";
import Link from "next/link";

export default function Experiences() {
    return (
        <div id="experiences" className="w-full">
            <div className="flex flex-col w-full p-2 md:pt-4">
                <MotionDiv>
                    <p className="text-2xl pb-2 lg:text-4xl w-full flex flex-col justify-center text-center">
                        Experiences
                    </p>
                </MotionDiv>
                <MotionDiv>
                    <p className="text-center">
                        Several companies and organizations I&apos;ve worked for:
                    </p>
                </MotionDiv>
                <MotionDiv className="flex flex-row justify-center">
                    <Link href="https://tabsquare.ai" target="_blank" className="rounded p-2 m-2 justify-center flex flex-col">
                        <Image
                            src="/tabsquare.png"
                            alt="Logo"
                            className="p-2 bg-white grayscale hover:grayscale-0"
                            width={230}
                            height={80}
                            priority
                        />
                    </Link>
                    <Link href="https://langitpayment.com" target="_blank" className="rounded p-2 m-2 justify-center flex flex-col">
                        <Image
                            src="/langitpay1.png"
                            alt="Logo"
                            className="p-2 bg-white rounded grayscale hover:grayscale-0"
                            width={100}
                            height={80}
                            priority
                        />
                    </Link>
                    <Link href="https://uberka.id" target="_blank" className="rounded p-2 m-2 justify-center flex flex-col">
                        <Image
                            src="/eureka.png"
                            alt="Logo"
                            className="p-2 bg-white rounded grayscale hover:grayscale-0"
                            width={140}
                            height={80}
                            priority
                        />
                    </Link>
                    <Link href="https://point.red/" target="_blank" className="rounded p-2 m-2 justify-center flex flex-col">
                        <Image
                            src="/red-point.png"
                            alt="Logo"
                            className="p-2 bg-white rounded grayscale hover:grayscale-0"
                            width={100}
                            height={80}
                            priority
                        />
                    </Link>
                    <Link href="https://sprintasia.co.id" target="_blank" className="rounded p-2 m-2 justify-center flex flex-col">
                        <Image
                            src="/sprint.png"
                            alt="Logo"
                            className="p-2 bg-white rounded grayscale hover:grayscale-0"
                            width={100}
                            height={80}
                            priority
                        />
                    </Link>
                </MotionDiv>
            </div>
        </div>
    )
}