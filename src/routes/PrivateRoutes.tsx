// import { Navigate, useLocation } from 'react-router-dom';

// import { getFromLocalStorage } from '../helpers/utils/saveData';
// import { authEmail, authKey } from '../components/Constant/authKey';

// const PrivateRoutes = ({ children }: { children: React.ReactNode }) => {
//   const { pathname } = useLocation();
//   const token = getFromLocalStorage(authKey);
//   const email = getFromLocalStorage(authEmail);
//   if (!token && !email) {
//     return <Navigate to="/auth/login" state={{ path: pathname }} />;
//   }
//   return children;
// };

// export default PrivateRoutes;

import { Navigate, useLocation } from 'react-router-dom';
import { getFromLocalStorage } from '../helpers/utils/saveData';
import { authEmail, authKey } from '../components/Constant/authKey';
import { getUserInfo } from '../services/auth.service';
import toast from 'react-hot-toast';

const PrivateRoutes = ({
  children,
  requiredRole,
}: {
  children: React.ReactNode;
  requiredRole?: string; // Optional role check
}) => {
  const userInfo = getUserInfo();
  const userRole =
    userInfo && typeof userInfo !== 'string' ? userInfo.role : null;

  const { pathname } = useLocation();
  const token = getFromLocalStorage(authKey);
  const email = getFromLocalStorage(authEmail);

  if (!token && !email) {
    return <Navigate to="/auth/login" state={{ path: pathname }} />;
  }

  if (requiredRole && userRole !== requiredRole) {
    toast.error('You are not authorized to access this page');
    return <Navigate to="/auth/login" />;
  }

  return children;
};

export default PrivateRoutes;
