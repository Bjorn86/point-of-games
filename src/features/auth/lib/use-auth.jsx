import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { selectRegisterInfo, selectLoginInfo } from 'entities/auth';
import { paths } from 'shared/model/paths-config';
import { registerUser } from '../register/model/register-user';
import { logoutUser } from '../logout/model/logout-user';
import { loginUser } from '../login/model/login-user';

export const useAuth = () => {
  const { isLoading: isRegisterLoading, error: registerError } =
    useSelector(selectRegisterInfo);
  const { isLoading: isLoginLoading, error: loginError } =
    useSelector(selectLoginInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleLogout = useCallback(() => {
    dispatch(logoutUser());
    navigate(paths.home, { replace: true });
  }, [dispatch, navigate]);

  return {
    isRegisterLoading,
    registerError,
    isLoginLoading,
    loginError,
    handleAction,
    handleLogout,
  };
};
