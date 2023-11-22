import { setEnteredParams } from './model/set-entered-params';
import { parseCommandString } from './lib/utils';

export const point = (dispatch) => (commandString) => {
  const { command, params } = parseCommandString(commandString);
  if (command) {
    dispatch(setEnteredParams(command, params));
  }
};
