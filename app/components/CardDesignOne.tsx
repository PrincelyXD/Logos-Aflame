import React from "react";
import { motion } from "framer-motion";

const CardDesignOne = ({
  icon,
  title,
  description,
}: {
  delay: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
        transition={{
            duration: 0.5,
           // Convert milliseconds to seconds
        }}
      className={`bg-gray-50 p-8 rounded-lg shadow-sm text-center 
       
      `}
    
    >
      <div className="flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default CardDesignOne;
