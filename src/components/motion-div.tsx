import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function MotionDiv({ className, children }: { children: React.ReactNode, className?: string }) {
  const variants = {
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5 }  },
    hidden: { opacity: 1, x: 0, y: 50 },
  }

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className={className}
      ref={ref}
      initial="hidden"
      animate={control}
      // exit={{ opacity: 0 }}
      // transition={{ duration: 0.5 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}