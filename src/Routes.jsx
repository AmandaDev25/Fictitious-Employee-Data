import { Navigate } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import NotFound from './pages/NotFound';
import Dashboard from './pages/dashboard/Index';
import UserList from './pages/user/UserList';
import RecoverPassword from './pages/RecoverPassword';
import { SetVerifyPassword } from './pages/SetVerifyPassword';
import UserAdd from './pages/user/UserAdd';
import UserEdit from './pages/user/UserEdit';
import { UserChangePassword } from './pages/user/UserChangePassword';
import AccessDenied from './pages/AccessDenied';
import PostPage from './pages/postpage/Index';
import WhoWeAre from './pages/WhoWeAre/Index';
import Login from '../src/pages/Login'
import Register from './pages/Register';
import NewCollaborator from './pages/newCollab/Index';
import Collaborator from './pages/collaborator/Index';

const routes = (currentUser) => {
  return [
    {
      element:
          <MainLayout />,
      children: [
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
        {
          path: '/collaborator/:id',
          element: <Collaborator />,
        },
        
        {
          path: '/usuario',
          element: <UserList />,
        },
        {
          path: '/usuario/editar/:id',
          element: <UserEdit />,
        },
        {
          path: '/usuario/adicionar',
          element: <UserAdd />,
        },
        {
          path: '/trocar-senha',
          element: <UserChangePassword />,
        },
        {
          path: '/page',
          element: <PostPage/>,
        },
        {
          path: '/new',
          element: <NewCollaborator />,
        },
        {
          path: '/who',
          element: <WhoWeAre />,
        },
        { path: '403', element: <AccessDenied /> },
      ],
    },
    {
      path: '/',
      element:
          <MainLayout />,
      children: [
        { path: '/recuperar/senha', element: <RecoverPassword /> },
        {
          path: '/primeiro/acesso/:hash',
          element: <SetVerifyPassword typeOperation="FIRST_ACCESS" />,
        },
        {
          path: '/recuperar/senha/:hash',
          element: <SetVerifyPassword typeOperation="RECOVER_PASSWORD" />,
        },
        { path: '/404', element: <NotFound /> },
        { path: '/403', element: <AccessDenied /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
      ],
    },
  ];
};

export default routes;
