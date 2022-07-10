#!/usr/bin/env node

import { getArgs } from './helpers/args.js'  // импорт функции getArgs через ES modules

const initCLI = () => { // создаем стрелочную функцию initCLI
  const args = getArgs(process.argv); // в переменную args присваиваем результат выполнения импортированной функции, с переданным в нее массивом process.argv
  console.log(args); // выводим результат в консоль
  if (args.h) {
    // вывод help
  }
  if (args.s) {
    // вывод city
  }
  if (args.s) {
    // вывод token
  }

  // вывести погоду
};

initCLI();