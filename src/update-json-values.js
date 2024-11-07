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

export default updateJson;
