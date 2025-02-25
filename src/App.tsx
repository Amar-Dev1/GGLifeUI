import './App.css';
import { GoUp, HomePage } from '../index';
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
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
        {
          showBtn && (
            <GoUp onclick={handleGoUp} status={showBtn} />
          )
        }
      </BrowserRouter>
    </>
  )
}

export default App;