import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeChange = ({theme,setTheme}) => {

  useEffect(()=>{
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(theme || (prefersDarkMode ? 'dark' : ' light'))},[])

  useEffect(()=>{
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme',theme)
  },[theme])

  return (
    <div>
        <button className='flex'>
        {theme === "dark" ? (
            <img onClick={()=>setTheme('light')} src={assets.moon} className=' size-6 md:size-7 p-1 border rounded-full bg-amber-50 border-gray-400' />
          ) : (
            <img onClick={()=>setTheme('dark')} src={assets.sun} className='size-6 md:size-7 p-1 rounded-full bg-amber-50 border-black border-2' />
          ) }
        </button>
    </div>
  )
}

export default ThemeChange
