import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Home from './Modules/Screens/Home/Home.jsx';
import About from './Modules/Screens/About/About.jsx';
import Service from './Modules/Screens/Service/Service.jsx';
import Contact from './Modules/Screens/Contact/Contact.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RefundPolicy from './Components/Footer/RefundPolicy/RefundPolicy.jsx';
import PrivacyPolicy from './Components/Footer/PrivacyPolicy/PrivacyPolicy.jsx';
import TermCondition from './Components/Footer/TermsCondition/TermCondition.jsx';
import Disclaimer from './Components/Footer/Disclaimer/Disclaimer.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "refundpolicy",
        element: <RefundPolicy />
      },
      {
        path: "privacypolicy",
        element: <PrivacyPolicy/>
      },
      {
        path: "term-condition",
        element: <TermCondition/>
      },
      {
        path: "disclaimer",
        element: <Disclaimer/>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
