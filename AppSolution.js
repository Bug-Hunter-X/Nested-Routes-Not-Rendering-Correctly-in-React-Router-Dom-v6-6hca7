import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom';

function App() {
  let element = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/about', element: <About/>},
    {path: '*', element: <NotFound/>}
  ]);
  return element;
}

export default App;