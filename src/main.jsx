import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './ErrorPage/ErrorPage';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import BooksDetails from './components/BooksDetails/BooksDetails';
import ContactUs from './components/ContactUs/ContucetUs';
import LatestBooks from './components/LatestBooks/LatestBooks';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/books',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/Books.json')
      },
      {
        path: '/pages',
        element: <PagesToRead></PagesToRead>
      },
      {
        path: '/booksDetails/:bookId',
        element: <BooksDetails></BooksDetails>,
        loader: () => fetch('/Books.json')
      },
      {
        path:'/contact',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/latestbooks',
        element: <LatestBooks></LatestBooks>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
