import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { selectRegisterInfo, selectLoginInfo } from 'entities/auth';
import { registerUser } from '../register/model/register-user';
import { loginUser } from '../login/model/login-user';

export const useAuth = () => {
  const { isLoading: isRegisterLoading, error: registerError } =
    useSelector(selectRegisterInfo);
  const { isLoading: isLoginLoading, error: loginError } =
    useSelector(selectLoginInfo);
  const dispatch = useDispatch();

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
