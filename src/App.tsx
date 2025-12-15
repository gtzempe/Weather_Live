import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import { ThemeProvider } from './context/theme-provider'
import WeatherDasboard from './pages/weather-dashboard'
import CityPage from './pages/CityPage'

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider defaultTheme='dark'>
      <Layout>
        <Routes>
          <Route path="/" element={<WeatherDasboard/>}/>
          <Route path="/city/:cityName" element={<CityPage/>}/>
        </Routes>
      </Layout>
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
