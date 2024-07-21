import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import NotFound404 from './components/NotFound404/NotFound404';
import AddEmployee from './components/AddEmployee/AddEmployee';
import EmployeeList from './components/EmployeeList/EmployeeList';
import Header from './components/Header/Header';



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
        path: "/",
        element: <AddEmployee/>
      },
      {
        path: "/employee-list",
        element: <EmployeeList/>
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(

      <RouterProvider router={router} /> 

)
