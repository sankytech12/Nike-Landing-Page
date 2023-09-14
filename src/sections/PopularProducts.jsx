import React,{useRef} from 'react'
import { products } from '../constants';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';

const PopularProducts = () => {
  const scrollRef = useRef(null)

  return (
    <div ref={scrollRef} style={{ overflow: "scroll" }}>
    <motion.section id='products' className='max-container max-sm:mt-12'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ root: scrollRef }}
    >
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>Our <span className='text-coral-red'>Popular</span> Products</h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, cupiditate natus quae perspiciatis distinctio culpa veniam, laborum ad quasi debitis optio, tempora suscipit minus? Eum dolorum iste impedit excepturi numquam quisquam accusantium totam magnam delectus.</p>
      </div>
        <div className='mt-16 grid lg:grid-cols-4 md:grid-col-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 '>
          {products.map((product)=>(
            <ProductCard key={product.name} {...product} />
          ))}
      </div>
    </motion.section>
    </div>
  )
}

export default PopularProducts;