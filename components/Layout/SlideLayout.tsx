import { motion } from "framer-motion"

const SlideLayout = ({ children, className = "" }) => (
  <div
    className={`w-full h-[calc(100%-54px)] absolute left-0 top-[56px]
    z-[10] bg-black border-[2px] border-green ${className}`}
  >
    <motion.div
      className="w-full h-full"
      initial={{
        x: "100%",
      }}
      animate={{
        x: "0%",
      }}
      exit={{
        x: "0%",
      }}
      transition={{
        duration: 0.4,
      }}
    >
      {children}
    </motion.div>
  </div>
)

export default SlideLayout
