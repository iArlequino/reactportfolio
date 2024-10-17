import React from 'react';
import './preloader.css';

export default function Preloader() {
  const quotes = [
    { quote: "Omnia tempus habent", author: '' },
    { quote: 'Tempus edax rerum', author: '' },
    { quote: 'Tempus curat omnia', author: '' },
  ];

  const random = Math.floor(Math.random() * quotes.length);

  return (
    <div className="preloader space-y-2">
      <div className="w-40 text-center">
        {/* Кастомный спиннер с градиентом */}
        <div className="spinner mx-auto">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
      <div className="max-w-[400px] font-light text-gray-200">
        “{quotes[random].quote}”
      </div>
      <div className="max-w-[400px] text-sm font-light text-violet-800">
      </div>
    </div>
  );
}




