#!/usr/bin/env node

import { getArgs } from './helpers/args.js'; // импорт функции getArgs через ES modules
import { getWeather } from './services/api.service.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

const saveToken = async (token) => {
  if (!token.length) {
    printError('Не передан токен');
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess('Токен сохранен');
  } catch (e) {
    printError(e.message);
  }
}

const initCLI = () => { // создаем стрелочную функцию initCLI
  const args = getArgs(process.argv); // в переменную args присваиваем результат выполнения импортированной функции, с переданным в нее массивом process.argv
  // console.log(process.env);
  if (args.h) {
    printHelp();
  }
  if (args.s) {

  }
  if (args.t) {
    return saveToken(args.t);
  }
  getWeather('moscow');
  // вывести погоду
};

initCLI();