import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Studio from './pages/Studio'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Faqs from './pages/Faqs'
import Service1 from './pages/Service1'
import Service2 from './pages/Service2'
import Service3 from './pages/Service3'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/studio',
      element: <Studio />
    }, 
    {
      path: '/services',
      element: <Services />
    },
    {
      path: '/contact',
      element: <Contact />
    }, 
    {
      path: '/faqs',
      element: <Faqs />
    },
    {
      path: '/services/service1',
      element: <Service1 />
    },
    {
      path: '/services/service2',
      element: <Service2 />
    },
    {
      path: '/services/service3',
      element: <Service3 />
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
