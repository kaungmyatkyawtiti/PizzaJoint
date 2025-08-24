import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Base from './pages/Base'
import Toppings from './pages/Toppings'
import Order from './pages/Order'
import Header from './pages/Header'
import PizzaProvider from './hooks/PizzaProvider'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/base",
    element: <Base />,
  },
  {
    path: "/toppings",
    element: <Toppings />,
  },
  {
    path: "/order",
    element: <Order />,
  },
])

function App() {
  return (
    <>
      <Header />
      <PizzaProvider>
        <RouterProvider router={router} />
      </PizzaProvider>
    </>
  )
}

export default App
