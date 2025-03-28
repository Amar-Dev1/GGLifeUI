import { Dashboard, GoUp, HomePage, Logout, Signup, Login, ThemeProvider } from './index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [showBtn, setShowBtn] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY >= 600)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const handleGoUp = () => {
    window.scrollTo({ top: 0 })
  }
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />

          </Routes>
          {
            showBtn && (
              <GoUp onclick={handleGoUp} status={showBtn} />
            )
          }
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App;