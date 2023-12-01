import { enteredParamsSet } from './model/entered-params-set';
import { parseCommandString } from './lib/utils';

export const point = (dispatch) => (commandString) => {
  const { command, params } = parseCommandString(commandString);
  if (command) {
    dispatch(enteredParamsSet(command, params));
  }
};
