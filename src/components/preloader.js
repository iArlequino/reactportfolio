import React from 'react';
import Goku1 from '../assets/goku1.webp';

export default function Preloader() {
  const quotes = [
    {
      quote: "Omnia tempus habent",
      author: '',
    },
    { quote: 'Tempus edax rerum', author: '' },
    {
      quote: 'Tempus curat omnia',
      author: '',
    },
  ];
  
  const random = Math.floor(Math.random() * quotes.length);
  
  return (
    <div className="preloader space-y-2">
      <div className="goku-bg w-40 text-center">
        <img src={Goku1} alt="Goku_Img" className="invert"></img>
      </div>
      <div className="max-w-[400px] font-light text-gray-200">“{quotes[random].quote}”</div>
      <div className="max-w-[400px] text-sm font-light text-violet-800">
        {' '}
        - {quotes[random].author}
      </div>
    </div>
  );
}

