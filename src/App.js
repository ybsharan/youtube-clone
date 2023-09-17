import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import { Provider } from 'react-redux';
import store from './utils/store';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />,
      },
      {
        path: 'watch',
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className='h-[100vh]'>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

/**
  
  
   Head 
   - Hamburgur menu and Logo
   - SearchBar and Button
   - SignIn 
Body 
   - Sidebar
       - MenuItems
   - MainContainer
       - ButtonList
       - VideoContainer
            - VideoCard



 * 
 */
