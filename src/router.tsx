import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import NotFound404 from './components/NotFound404/NotFound404';
import EmployeeList from './components/EmployeeList/EmployeeList';
import Header from './components/Header/Header';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';
import FormAddEmployee from './components/FormAddEmployee/FormAddEmployee';



const HeaderLayout = () => {
  return <>
    <Header/>
    <Outlet/>
   </>
}

const router = createBrowserRouter([
  {
    element: <HeaderLayout/>,
    errorElement: <NotFound404/>, 
    children :[
      {
        path: "/hrnet-front",
        element: <FormAddEmployee/>
      },
      {
        path: "/hrnet-front/employee-list",
        element: <EmployeeList/>
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} /> 
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


