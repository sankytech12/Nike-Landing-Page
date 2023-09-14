import React from 'react'
import { offer } from '../assets/images';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';

const SpecialOffer = () => {
  return (
    <section className='flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} alt="" width={773} height={687} className='object-contain w-full' />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
           <span className='text-coral-red'>Special</span> Offer 
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>Ensuring Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ab fugit et repellat, vel, veritatis harum est quas cum cupiditate culpa ex aliquid impedit eligendi minima temporibus, eaque reiciendis error!</p>
        <p className='mt-6 lg:max-w-lg info-text'>Our dedication to detail and excellance ensures your satisfaction.</p>
        <div className='mt-11 flex flex-wrap gap-4'>
        <Button label="Shop now" iconURL={arrowRight}/>
        <Button label="Learn more" bgColor='bg-white' borderCol="border-slate-gray" textCol="text-slate-gray" />
        </div>
        </div>
    </section>
  )
}

export default SpecialOffer;