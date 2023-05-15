'use client';
import { Satisfy } from 'next/font/google';
import Image from 'next/image';
import './page.css';
import { useState } from 'react';

const satisfy = Satisfy({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  const [open, setOpen] = useState('');
  const onClick = () => {
    setOpen(open === '' ? 'open' : '');
  };

  return (
    <div
      onClick={onClick}
      className={open ? 'birthdayCard open' : 'birthdayCard'}
    >
      <div className='cardFront'>
        <h3 className={satisfy.className}>Happy Mother&apos;s Day</h3>
      </div>
      <div className='cardInside'>
        <p className={satisfy.className}>Put some nice words here</p>
        <br />
        <p className={satisfy.className}>
          I just generated with AI but maybe you can come up with something on
          your own
        </p>
        <br />
        <p className={satisfy.className}>And put your name under here,</p>
        <p className={satisfy.className}>Your name</p>
      </div>
    </div>
  );
}
