import * as core from '@actions/core';
import fs from 'fs';

import updateJsonValues from './update-json-values';

async function run() {
  try {
    const file = core.getInput('file', {required: true});
    const values = core.getInput('values', {required: true});

    let data = fs.readFileSync(file, 'utf8');
    let obj = JSON.parse(data);
    obj = updateJsonValues(obj, JSON.parse(values));

    data = JSON.stringify(obj, null, 2);
    fs.writeFileSync(file, data, 'utf8');
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
