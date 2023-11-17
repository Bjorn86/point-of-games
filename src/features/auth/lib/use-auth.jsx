// IMPORT PACKAGES
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

// IMPORT SELECTORS
import { selectRegisterInfo, selectLoginInfo } from 'entities/auth';

// IMPORT ACTIONS
import { registerUser } from '../register/model/register-user';
import { loginUser } from '../login/model/login-user';

// USE AUTHORIZATION REQUEST INFO
export const useAuth = () => {
  // HOOKS
  const { isLoading: isRegisterLoading, error: registerError } =
    useSelector(selectRegisterInfo);
  const { isLoading: isLoginLoading, error: loginError } =
    useSelector(selectLoginInfo);
  const dispatch = useDispatch();

  // SUBMIT HANDLER
  const handleAction = useCallback(
    ({ email, password }, formType) => {
      const action =
        formType === 'registration'
          ? registerUser({ email, password })
          : loginUser({ email, password });
      dispatch(action);
    },
    [dispatch],
  );

  return {
    isRegisterLoading,
    registerError,
    isLoginLoading,
    loginError,
    handleAction,
  };
};
