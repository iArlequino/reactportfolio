import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Xenia from '../assets/xenia.webp';
import Phoner from '../assets/phoner.png';
import Streetster from '../assets/streetster.jpg';
import Intense from '../assets/intense.jpg';
import Divan from '../assets/divan.jpg';

const projectVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const projects = [
  {
    title: '1',
    details: '.',
    img: Intense,
    links: [
      {
        icon: <img alt="" src="./assets/link__v1_negate.png" className="h-full"></img>,
        link: '',
      },
    ],
  },
  {
    title: '2',
    details: ".",
    img: Xenia,
    links: [
      {
        icon: <img alt="" src="https://img.icons8.com/ios-filled/50/000000/link--v1.png" className="h-full"></img>,
        link: '',
      },
    ],
  },
  {
    title: 'Streetster',
    details: 'Веломагазин Streetster',
    img: Streetster,
    links: [
      {
        icon: <img alt="" src="https://img.icons8.com/ios-filled/50/000000/link--v1.png" className="h-full"></img>,
        link: 'https://streetster.vercel.app',
      },
    ],
  },
  {
    title: 'Phoner',
    img: Phoner,
    details: "Простой лендинг интернет магазина электроники на React",
    links: [
      {
        icon: <img alt="" src="https://img.icons8.com/ios-filled/50/000000/link--v1.png" className="h-full"></img>,
        link: 'https://phoner-react-shop.vercel.app',
      },
    ],
  },
  {
    title: 'Intense',
    details: 'Интенсив по скоростному наращиванию рестниц',
    img: Intense,
    links: [
      {
        icon: <img alt="" src="https://img.icons8.com/ios-filled/50/000000/link--v1.png" className="h-full"></img>,
        link: 'https://intense-one.vercel.app',
      },
    ],
  },
  {
    title: 'Divan',
    details: 'Сайт о реставрации мебели',
    img: Divan,
    links: [
      {
        icon: <img alt="" src="https://img.icons8.com/ios-filled/50/000000/link--v1.png" className="h-full"></img>,
        link: 'https://divan-amber.vercel.app',
      },
    ],
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative overflow-hidden bg-[hsl(272,68%,4%)]" id="projects">
      <div className="mx-auto max-w-6xl p-5 py-8 md:py-20" id="experience">
        <div className="mb-8 md:mb-16 pb-4 text-6xl font-medium text-gray-300 md:text-left md:text-7xl">
          Проекты
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-4">
          {projects.map((proj, index) => (
            <motion.a
              href={proj.links[0].link}
              className={`space-y-4 bg-[hsl(272,68%,2%)] text-white p-4 shadow-md transition duration-300 ${
                hoveredIndex !== null && hoveredIndex !== index ? 'blur-sm' : ''
              }`}
              key={`project${index}`}
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={projectVariants}
              transition={{ duration: 1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-32 overflow-hidden border-b">
                <img alt="" src={proj.img} className="absolute left-0 my-auto w-full"></img>
              </div>
              <div className="text-2xl text-gray-200">{proj.title}</div>
              <div className="h-20 overflow-y-auto text-xs font-light text-gray-400">
                {proj.details}
              </div>
              <div className="flex items-center justify-end space-x-4 opacity-40">
                {proj.links.map((link, index) => (
                  <a
                    href={link.link}
                    target={'_blank'}
                    rel="noreferrer"
                    className="flex h-5 cursor-pointer items-center text-2xl text-gray-200"
                    key={`project-link${index + proj.title}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}























