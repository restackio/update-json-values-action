import {isObject, keys, set} from 'lodash';

const replaceKeys = (
  obj: Record<string, any>,
  replaceValues: Record<string, any>,
  keysToReplace: string[]
): Record<string, any> => {
  for (const [key, value] of Object.entries(obj)) {
    if (isObject(value)) {
      replaceKeys(value, replaceValues, keysToReplace);
    } else {
      if (keysToReplace.includes(value)) {
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
  const keysToReplace = keys(replaceValues);
  return replaceKeys(obj, replaceValues, keysToReplace);
};

export default updateJson;
