import { useEffect, useState } from 'react';

import Loader from './common/Loader';
import AppRoutes from './routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <>
      <Loader />
      <Toaster />
    </>
  ) : (
    <>
      <AppRoutes />
      <Toaster />
    </>
   
  );
}

export default App;
