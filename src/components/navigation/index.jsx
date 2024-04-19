"use client"
import React from 'react';
import { BtnList } from '@/app/data';
import NavButton from './NavButton';

const Navigation = () => {

    const angleIncrement = 360 / BtnList.length;

  return (
    <div className='fixed w-full h-screen flex justify-center items-center'>
        <div className='w-max flex justify-center items-center relative hover:pause animate-spin-slow group'>
        {
            BtnList.map((btn, index)=>{

                const angleRad = (index * angleIncrement * Math.PI) / 180;
                const radius = 'calc(20vw - 1rem)';
                const x = `calc(${radius} * ${Math.cos(angleRad)})`;
                const y = `calc(${radius} * ${Math.sin(angleRad)})`;

                console.log(index, angleRad, radius, x, y);

                return <NavButton key={btn.label} x={x} y={y} {...btn}/>
            })
        }
    </div>
    </div>
  )
}

export default Navigation