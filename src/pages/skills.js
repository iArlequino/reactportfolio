import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: false,  // Changed to false to trigger every time element enters the view
    threshold: 0.01,
  });

  useEffect(() => {
    if (inView) {
      console.log('Element is in view!');
    }
  }, [inView]);

  return (
    <div className="mx-auto max-w-6xl p-5 py-8 md:py-20" id="skills">
      <div className="mb-8 md:mb-16 pb-4 text-6xl font-medium text-gray-300 md:text-left md:text-7xl">
        Навыки
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {skills.map((skill, index) => (
          <motion.div
            className="flex items-center space-x-2"
            key={`skill${index}`}
            ref={ref}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: inView ? 0 : -200, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {skill.icon && <div className="text-2xl flex">{skill.icon}</div>}
            {skill.img && (
              <img
                src={skill.img}
                className="h-6 w-6"
                alt=""
              />
            )}
            <div className="text-gray-500">{skill.skill}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const skills = [
  { icon: <i className="devicon-html5-plain colored"></i>, skill: 'HTML5' },
  { icon: <i className="devicon-css3-plain colored"></i>, skill: 'CSS' },
  { icon: <i className="devicon-tailwindcss-plain colored"></i>, skill: 'Tailwind CSS' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', skill: 'SASS' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', skill: 'JavaScript' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', skill: 'Typescript' },
  { icon: <i className="devicon-react-original colored"></i>, skill: 'React' },
  { icon: <i className="devicon-nodejs-plain colored"></i>, skill: 'Node JS' },
  { icon: <i className="devicon-redux-original colored"></i>, skill: 'Redux' },
  { icon: <i className="devicon-bootstrap-plain colored"></i>, skill: 'Bootstrap' },
  { icon: <i className="devicon-materialui-plain colored"></i>, skill: 'Material UI' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', skill: 'MongoDB' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', skill: 'MySQL' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg', skill: 'PostgreSQL' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', skill: 'Redis' },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', skill: 'Docker' },
];
