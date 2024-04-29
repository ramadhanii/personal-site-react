import MotionDiv from "@/components/motion-div";

export default function Skills() {
    return (
        <div id="skills" className="w-full">
            <div className="flex flex-col w-full p-2 md:pt-4">
                <MotionDiv>
                    <p className="text-2xl pb-2 lg:text-4xl w-full flex flex-col justify-center text-center">
                        Skills
                    </p>
                </MotionDiv>
                <MotionDiv>
                    <p className="text-center">
                        I have experiences in:
                    </p>
                </MotionDiv>
                <MotionDiv className="flex flex-row flex-wrap justify-center p-2">
                    <div className="border basis-1/4 rounded p-2 m-2 text-center flex flex-col gap-2">
                        <h1 className="text-xl text-black dark:text-gray-200">Various Languages and Frameworks</h1>
                        <p className="text-center text-sm text-gray-600 dark:text-gray-400">NodeJS (ExpressJS, VueJS, NextJS), PHP (Laravel), Elixir (PhoenixJS), Java (SpringBoot)</p>
                    </div>
                    <div className="border basis-1/4 rounded p-2 m-2 text-center flex flex-col gap-2">
                        <h1 className="text-xl text-black dark:text-gray-200">Problem Solving</h1>
                        <p className="text-center text-sm text-gray-600 dark:text-gray-400">Solving complex problems</p>
                    </div>
                    <div className="border basis-1/4 rounded p-2 m-2 text-center flex flex-col gap-2">
                        <h1 className="text-xl text-black dark:text-gray-200">Apps & DB Design</h1>
                        <p className="text-center text-sm text-gray-600 dark:text-gray-400">Designing, building, and maintaining high-performance, scalable applications</p>
                    </div>
                    <div className="border basis-1/4 rounded p-2 m-2 text-center flex flex-col gap-2">
                        <h1 className="text-xl text-black dark:text-gray-200">DevOps</h1>
                        <p className="text-center text-sm text-gray-600 dark:text-gray-400">Development with Git, and Docker</p>
                        <p className="text-center text-sm text-gray-600 dark:text-gray-400">Cloud Computing with GCP (Kubernetes), VPS (Haproxy, NGINX, PM2)</p>
                        <p className="text-center text-sm text-gray-600 dark:text-gray-400">CI/CD with Jenkins, DroneCI, ArgoCD</p>
                    </div>
                </MotionDiv>
            </div>
        </div>
    )
}