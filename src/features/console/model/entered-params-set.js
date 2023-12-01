import { createAction } from '@reduxjs/toolkit';

export const enteredParamsSet = createAction(
  '@@console/enteredParamsSet',
  (command, params) => ({
    payload: {
      command,
      params,
    },
  }),
);
