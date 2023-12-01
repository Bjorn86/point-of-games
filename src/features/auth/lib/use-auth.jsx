import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { selectRegisterInfo, selectLoginInfo } from 'entities/auth';
import { paths } from 'shared/model/paths-config';
import { userDataCleared } from 'entities/user';
import { userRegisters } from '../register/model/user-registers';
import { userLogsOut } from '../logout/model/user-logs-out';
import { userLogsIn } from '../login/model/user-logs-in';

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
          ? userRegisters({ email, password })
          : userLogsIn({ email, password });
      dispatch(action);
    },
    [dispatch],
  );

  const handleLogout = useCallback(() => {
    dispatch(userLogsOut());
    dispatch(userDataCleared());
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
