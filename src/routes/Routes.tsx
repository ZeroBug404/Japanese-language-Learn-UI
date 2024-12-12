import React from 'react';
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
import Lessons from '../pages/Lessons/Lessons';
import Vocabulary from '../pages/Vocabulary/Vocabulary';
import Tutorials from '../pages/Tutorials/Tutorials';
import LessonDetails from '../components/Lesson/LessonDetails';
import LessonsTable from '../components/Lesson/LessonsTable';
import AddLessons from '../pages/Dashboard/AddLessons';
import UpdateLesson from '../pages/Dashboard/UpdateLesson';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/auth/login',
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
      {
        path: '/lessons',
        element: (
          <PrivateRoutes>
            <>
              <PageTitle title="Lessons" />
              <Lessons />
            </>
          </PrivateRoutes>
        ),
      },
      {
        path: '/lessons/:lessonId',
        element: (
          <PrivateRoutes>
            <>
              <PageTitle title="Lessons" />
              <LessonDetails />
            </>
          </PrivateRoutes>
        ),
      },
      {
        path: '/vocabolaries',
        element: (
          <>
            <PageTitle title="Vocabolary" />
            <Vocabulary />
          </>
        ),
      },
      {
        path: '/tutorials',
        element: (
          <PrivateRoutes>
            <>
              <PageTitle title="Tutorials" />
              <Tutorials />
            </>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoutes requiredRole="admin">
        <DefaultLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: '/dashboard/lessons',
        element: (
          <>
            <PageTitle title="Lessons" />
            <LessonsTable />
          </>
        ),
      },
      {
        path: '/dashboard/add-lessons',
        element: (
          <>
            <PageTitle title="Lessons" />
            <AddLessons />
          </>
        ),
      },
      {
        path: '/dashboard/update-lesson/:lessonId',
        element: (
          <>
            <PageTitle title="Lessons" />
            <UpdateLesson />
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
