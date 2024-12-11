import { Navigate, useLocation } from 'react-router-dom';

import { getFromLocalStorage } from '../helpers/utils/saveData';
import { authEmail, authKey } from '../components/Constant/authKey';

const PrivateRoutes = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const token = getFromLocalStorage(authKey);
  const email = getFromLocalStorage(authEmail);
  if (!token && !email) {
    return <Navigate to="/auth/signin" state={{ path: pathname }} />;
  }
  return children;
};

export default PrivateRoutes;
