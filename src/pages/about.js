import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: false, // Вы можете изменить это на true, если анимация нужна только один раз
    threshold: 0.1, // Пороговое значение для срабатывания
  });

  return (
    <motion.div
      className="mx-auto max-w-6xl p-5 py-8 md:py-20"
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
      ref={ref}
    >
      <motion.div
        className="mb-8 md:mb-16 pb-4 text-6xl font-medium text-gray-300 md:text-left md:text-7xl"
        initial={{ x: -200 }}
        animate={{ x: inView ? 0 : -200 }}
        transition={{ duration: 1 }}
      >
        О себе
      </motion.div>
      <div className="items-center space-y-8 md:flex md:space-y-0">
        <motion.div
          className="basis-2/3 space-y-4"
          initial={{ x: -300 }}
          animate={{ x: inView ? 0 : -300 }}
          transition={{ duration: 1 }}
        >
          <span className="text-xl text-gray-500"> </span>
          <div className="text-4xl font-bold text-gray-300">Привет!</div>
          <div className="text-xl font-semibold text-gray-500"></div>
          <div className="text-justify font-light text-gray-400">
          Я Front-End разработчик, стремлюсь постоянно совершенствоваться и создавать
                гибкие, быстрые и семантические веб-сайты с великолепным внешним видом. Я люблю учиться, и мой
                опыт научил меня только одному: практика – это место, где ты узнаешь
                большинство. Все мои проекты доставляли мне огромное удовольствие от обучения. Я хорошо разбираюсь в
                создание SPA с использованием React, Redux и TypeScript. Есть опыт написания
                гибкие и адаптивные сайты. Моя разметка семантическая и доступна людям
                с инвалидностью. Для достижения большей продуктивности я использую Gulp и Webpack
                сборщики, также имею опыт написания и настройки собственных сборок. Я
                постоянно учусь и намерен изучить Vue и React Native.
          </div>
        </motion.div>
      </div>
      <div className="justify-between md:flex">
        <div className="flex items-center justify-center space-x-4 py-10">
          {social.map((link, index) => (
            <motion.a
              key={`about${index}`}
              href={link.link}
              target={'_blank'}
              rel="noreferrer"
              className="relative rounded-full"
              initial={{ y: 200 }}
              animate={{ y: inView ? 0 : 200 }}
              transition={{ duration: 1 }}
            >
              <motion.img
                src={link.icon}
                className="h-10 w-10"
                alt=""
                whileHover={{ scale: 1.2 }}
              />
            </motion.a>
          ))}
        </div>
        <motion.a
          className="relative m-auto flex w-max cursor-pointer items-center space-x-4 rounded-lg border bg-slate-200 p-2 px-10"
          href={''}
          target={'_blanck'}
          rel="noreferrer"
          initial={{ y: 200 }}
          animate={{ y: inView ? 0 : 200 }}
          transition={{ duration: 1 }}
        >
          <div>Resume</div>
          <motion.img
            className="h-6 w-6"
            src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
            alt=""
          />
        </motion.a>
      </div>
    </motion.div>
  );
}

const social = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    link: 'https://github.com/iArlequino',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/732/732200.png',
    link: 'mailto: denrevth@gmail.com',
  },
];

