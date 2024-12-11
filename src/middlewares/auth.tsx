import { Navigate } from 'react-router-dom';
import { getUserInfo } from '../services/auth.service';

const auth = (role: string) => (Component: React.ComponentType) => {
  return (props: any) => {
    const user = getUserInfo();

    if (user && typeof user !== 'string' && user.role === role) {
      return <Component {...props} />;
    } else {
      return <Navigate to="/auth/login" />;
    }
  };
};

export default auth;