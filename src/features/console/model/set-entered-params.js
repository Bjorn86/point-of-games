import { createAction } from '@reduxjs/toolkit';

export const setEnteredParams = createAction(
  '@@console/setEnteredParams',
  (command, params) => ({
    payload: {
      command,
      params,
    },
  }),
);
