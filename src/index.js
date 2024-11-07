import * as core from '@actions/core';
import fs from 'fs';

import {isObject, set} from 'lodash';

const replaceKeys = (obj, replaceValues) => {
  for (const [key, value] of Object.entries(obj)) {
    if (isObject(value)) {
      replaceKeys(value, replaceValues);
    } else {
      if (replaceValues[value]) {
        set(obj, key, replaceValues[value]);
      }
    }
  }
  return obj;
};

const updateJson = (obj, replaceValues) => {
  return replaceKeys(obj, replaceValues);
};

async function run() {
  try {
    const file = core.getInput('file', {required: true});
    const values = core.getInput('values', {required: true});

    let data = fs.readFileSync(file, 'utf8');
    let obj = JSON.parse(data);
    obj = updateJson(obj, JSON.parse(values));

    data = JSON.stringify(obj, null, 2);
    fs.writeFileSync(file, data, 'utf8');
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
