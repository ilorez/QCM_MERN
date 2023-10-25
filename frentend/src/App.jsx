import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// layouts
import RootLayout from './layouts/RootLayout'

// pages
import Home from './pages/home'
import QCM from './pages/mainQcm'
import Levels from './pages/components/Levels'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout />} >
        <Route index element={<Home />} />
        <Route path='/ilQCM/:choice/:level' element={<QCM />} />
      </Route>
    </>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
