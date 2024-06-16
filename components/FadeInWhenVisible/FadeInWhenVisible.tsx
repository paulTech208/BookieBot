// import { motion, useAnimation } from "framer-motion"
// import { useInView } from "react-intersection-observer"
// import { FC, useEffect } from "react"

import { Children } from "react"
import { chiliz } from "viem/chains"

// interface FadeInWhenVisibleProps {
//   children: any
//   className?: string
//   checkInview?: boolean
// }

// const FadeInWhenVisible: FC<FadeInWhenVisibleProps> = ({
//   children,
//   className,
//   checkInview = true,
// }) => {
//   const controls = useAnimation()
//   const [ref, inView] = useInView()

//   useEffect(() => {
//     if (inView || !checkInview) {
//       controls.start("visible")
//       return
//     }

//     controls.start("hidden")
//   }, [controls, inView, checkInview])

//   return (
//     <motion.div
//       ref={ref}
//       animate={controls}
//       initial="hidden"
//       transition={{ duration: 1 }}
//       variants={{
//         visible: { opacity: 1, y: 0 },
//         hidden: { opacity: 0, y: 100 },
//       }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   )
// }

// export default FadeInWhenVisible

const GameListHeader = (Children) => {
  return (
    <div>
      <p>{Children}</p>
    </div>
  )
}

export default GameListHeader
