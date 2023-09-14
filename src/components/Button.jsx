import React from 'react'
import { motion } from 'framer-motion';

const Button = ({label,iconURL,bgCol,textCol,borderCol,fullWidth}) => {
  return (
    <motion.button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      bgCol
        ? `${bgCol} ${textCol} ${borderCol}`
        : "bg-coral-red text-white border-coral-red"
    } rounded-full ${fullWidth && "w-full"}`} 
    initial={{ opacity: 0.6 }}
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    whileInView={{ opacity: 1 }}
    >
        {label}
       { iconURL && <img src={iconURL} alt="icon" className='ml-2 rounded-full w-5 h-5' />}
    </motion.button>
    
  )
}

export default Button;