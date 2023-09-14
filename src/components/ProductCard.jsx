import React from 'react'
import { star } from '../assets/icons';
import { motion } from 'framer-motion';

const ProductCard = ({imgURL,name,price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <motion.img src={imgURL} alt={name} className='w-[280px] h-[280px]' whileHover={{
    scale: 1.2,
    transition: { duration: 0.2 },
  }}
  whileTap={{ scale: 0.9 }}/>
        <div className='mt-8 flex justify-start gap-2.5'>
            <img src={star} alt='rating' width={24} height={24} />
            <p className='font-montserrat text-xl leading-normal text-slate-gray'>4.5</p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
        <p className='mt-2 font-semibold font-montserrat text-coral-red text-2lx leading-normal'>{price}</p>
    </div>
  )
}

export default ProductCard;