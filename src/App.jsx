import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Dynamics365 from './pages/Dynamics365'
import SupportOS from './pages/SupportOS'
import Energy from './pages/Energy'
import ServicePage from './pages/ServicePage'
import CoverPage from './pages/CoverPage'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="cover" element={<CoverPage />} />
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/microsoft-dynamics-365" element={<Dynamics365 />} />
          <Route path="services/supportos" element={<SupportOS />} />
          <Route path="industries/energy-resources" element={<Energy />} />
          <Route path="services/:slug" element={<ServicePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
