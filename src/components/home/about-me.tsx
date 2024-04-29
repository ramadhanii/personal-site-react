import MotionDiv from "../motion-div";

export default function AboutMe() {
    return (
        <div id="second-content" className="w-full">
            <div className="flex flex-col w-full p-2 md:pt-4">
                <MotionDiv>
                    <p className="text-2xl pb-2 lg:text-4xl">
                        About me
                    </p>
                </MotionDiv>
                <MotionDiv>
                    <p className="text-justify">
                        I&apos;m a highly motivated and experienced software engineer with over 8 years of expertise in designing, building, and maintaining high-performance, scalable applications. I&apos;m passionate about solving complex problems and optimizing application performance, especially within the Payment Services industry.
                        Leadership and Teamwork. <br />
                    </p>
                </MotionDiv>
            </div>
        </div>
    )
}