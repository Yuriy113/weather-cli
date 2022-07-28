import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

const filePath = join(homedir(), 'weather-data.json');

const saveKeyValue = async (key, value) => {
  const data = {};

  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
}

export { saveKeyValue };