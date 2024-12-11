import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import DefaultLayout from '../layout/DefaultLayout';
import ECommerce from '../pages/Dashboard/ECommerce';
import Calendar from '../pages/Calendar';
import Profile from '../pages/Profile';
import FormElements from '../pages/Form/FormElements';
import FormLayout from '../pages/Form/FormLayout';
import Tables from '../pages/Tables';
import Settings from '../pages/Settings';
import Chart from '../pages/Chart';
import Alerts from '../pages/UiElements/Alerts';
import Buttons from '../pages/UiElements/Buttons';
import SignIn from '../pages/Authentication/SignIn';
import SignUp from '../pages/Authentication/SignUp';
import MainLayout from '../layout/MainLayout';
import PrivateRoutes from './PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/auth/signin',
        element: (
          <>
            <PageTitle title="Signin" />
            <SignIn />
          </>
        ),
      },
      {
        path: '/auth/signup',
        element: (
          <>
            <PageTitle title="Signup" />
            <SignUp />
          </>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoutes>
        <DefaultLayout>
          <>
            <PageTitle title="eCommerce Dashboard" />
            <ECommerce />
          </>
        </DefaultLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        path: '/dashboard/calendar',
        element: (
          <>
            <PageTitle title="Calendar" />
            <Calendar />
          </>
        ),
      },
      {
        path: '/dashboard/profile',
        element: (
          <>
            <PageTitle title="Profile" />
            <Profile />
          </>
        ),
      },
      {
        path: '/dashboard/forms/form-elements',
        element: (
          <>
            <PageTitle title="Form Elements" />
            <FormElements />
          </>
        ),
      },
      {
        path: '/dashboard/forms/form-layout',
        element: (
          <>
            <PageTitle title="Form Layout" />
            <FormLayout />
          </>
        ),
      },
      {
        path: '/dashboard/tables',
        element: (
          <>
            <PageTitle title="Tables" />
            <Tables />
          </>
        ),
      },
      {
        path: '/dashboard/settings',
        element: (
          <>
            <PageTitle title="Settings" />
            <Settings />
          </>
        ),
      },
      {
        path: '/dashboard/chart',
        element: (
          <>
            <PageTitle title="Basic Chart" />
            <Chart />
          </>
        ),
      },
      {
        path: '/dashboard/ui/alerts',
        element: (
          <>
            <PageTitle title="Alerts" />
            <Alerts />
          </>
        ),
      },
      {
        path: '/dashboard/ui/buttons',
        element: (
          <>
            <PageTitle title="Buttons" />
            <Buttons />
          </>
        ),
      },
    ],
  },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
