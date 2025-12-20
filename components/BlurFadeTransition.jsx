"use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { usePathname } from "next/navigation";

// // components
// import Stairs from "./Stairs";

// const StairTransition = () => {
//   const pathname = usePathname();
//   return (
//     <>
//       <AnimatePresence mode="wait">
//         <div key={pathname}>
//           <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
//             <Stairs />
//           </div>
//           <motion.div
//             className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
//             initial={{ opacity: 1 }}
//             animate={{
//               opacity: 0,
//               transition: {
//                 delay: 1,
//                 duration: 0.4,
//                 ease: "easeInOut",
//               },
//             }}
//           />
//         </div>
//       </AnimatePresence>
//     </>
//   );
// };

// export default StairTransition;














import { motion } from "framer-motion";

// Number of steps/layers in the transition
const TOTAL_STEPS = 6;

// Animation variants
const blurFadeAnimation = {
  initial: {
    opacity: 1,
    filter: "blur(0px)"
  },
  animate: (index) => ({
    opacity: 0,
    filter: "blur(20px)",
    transition: {
      duration: 0.7,
      ease: "easeIn",
      delay: reverseIndex(index) * 0.07
    }
  }),
  exit: (index) => ({
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: reverseIndex(index) * 0.07
    }
  })
};

// Calculate the reverse index for staggered delay
const reverseIndex = (index) => TOTAL_STEPS - index - 1;

const BlurFadeTransition = () => {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {[...Array(TOTAL_STEPS)].map((_, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={blurFadeAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 bg-white"
          style={{
            zIndex: TOTAL_STEPS - index,
            // Add slight color variation for depth
            backgroundColor: `rgba(255, 255, 255, ${1 - index * 0.15})`
          }}
        />
      ))}
    </div>
  );
};

export default BlurFadeTransition;