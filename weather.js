#!/usr/bin/env node

import { getArgs } from './helpers/args.js'; // импорт функции getArgs через ES modules
import { printHelp } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

const initCLI = () => { // создаем стрелочную функцию initCLI
  const args = getArgs(process.argv); // в переменную args присваиваем результат выполнения импортированной функции, с переданным в нее массивом process.argv
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    
  }
  if (args.t) {
    saveKeyValue('token', args.t)
  }

  // вывести погоду
};

initCLI();