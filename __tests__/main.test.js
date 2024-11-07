import {expect, test} from '@jest/globals';

import updateJsonValues from '../src/update-json-values';

test('updates values in json from the values provided', async () => {
  const obj = {
    a: 'TEMPLATE_VALUE_HERE',
    b: 'TEMPLATE_VALUE_HERE',
    c: {
      d: 'NESTED_TEMPLATE_VALUE_HERE'
    },
    e: {
      f: {
        g: 'TEMPLATE_VALUE_HERE',
        h: {
          i: 'NESTED_TEMPLATE_VALUE_HERE'
        }
      }
    }
  };
  const values = {
    TEMPLATE_VALUE_HERE: 'value_replaced',
    NESTED_TEMPLATE_VALUE_HERE: 'nested_value_replaced'
  };
  const expectedObj = {
    a: 'value_replaced',
    b: 'value_replaced',
    c: {
      d: 'nested_value_replaced'
    },
    e: {
      f: {
        g: 'value_replaced',
        h: {
          i: 'nested_value_replaced'
        }
      }
    }
  };
  expect(updateJsonValues(obj, values)).toEqual(expectedObj);
});
