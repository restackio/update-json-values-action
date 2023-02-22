import {isObject, set} from 'lodash';

const replaceKeys = (
  obj: Record<string, any>,
  replaceValues: Record<string, any>
): Record<string, any> => {
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

const updateJson = (
  obj: Record<string, any>,
  replaceValues: Record<string, any>
): Record<string, any> => {
  return replaceKeys(obj, replaceValues);
};

export default updateJson;
