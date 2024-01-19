import './app.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Orders from "./pages/Orders"
import Customers from "./pages/Customers"
import Reports from "./pages/Reports"
import Integrations from "./pages/Integrations"
import Sidebar from "./components/sidebar/Sidebar"
import Header from './components/header/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentMonth from './pages/saved_reports/CurrentMonth'
import LastQuarter from './pages/saved_reports/LastQuarter'
import YearEnd from './pages/saved_reports/YearEnd'
import Footer from './components/footer/Footer'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar />
        <div className="app-contents">
          <Header />
          <div className="app-links">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/saved_reports/current" element={<CurrentMonth />} />
              <Route path="/saved_reports/last_quarter" element={<LastQuarter />} />
              <Route path="/saved_reports/yearend" element={<YearEnd />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
