import { motion } from "framer-motion"
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import BlurFadeTransition from "./BlurFadeTransition";

function ToggleComponent() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <BlurFadeTransition />
            {/* <YourComponent /> */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}