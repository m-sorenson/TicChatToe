import * as types from '../constants/ActionTypes.js';

export function foundMatch(id) {
  return { type: types.FOUND_MATCH, id };
}
