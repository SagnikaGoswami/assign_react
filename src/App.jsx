import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Studio from './pages/Studio'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Faqs from './pages/Faqs'

const App = () => {

  const router = createBrowserRouter([
    // home studio services contact faqs
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
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
