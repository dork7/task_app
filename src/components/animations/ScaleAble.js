import { useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import "./styles.css";

const ScaleAble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  console.log("colorMode", colorMode);

  return (
    <motion.div
      layout
      data-isOpen={isOpen}
      data-colormode={colorMode}
      initial={{ borderRadius: 50 }}
      className="parent"
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div layout className="child" />
    </motion.div>
  );
};

export default ScaleAble;
