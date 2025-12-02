import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails.JSX';
import ReadList from '../Pages/ReadList/ReadList';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';



export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index:true,
            loader: () => fetch('booksData.json'),
            path: '/',
            Component: Home
        },
        {
         path: '/login',
         Component: Login
        },
        {
          path:'/register',
          Component: Register
        },
        {
          path:'/about',
          Component: About,
        },
        {
           path:'readList',
           loader: () => fetch('booksData.json'),
           Component: ReadList
        },
        {
          path:'/bookDetails/:id',
           loader: () => fetch('booksData.json'),
          Component: BookDetails,
        }
    ]
  },
]);