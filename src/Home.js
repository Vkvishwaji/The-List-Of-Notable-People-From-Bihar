import React,{useState} from 'react'
import CardMenu from './CardMenu'
import Menu from './CardApi'

const Home = () => {
    const[menuData,setMenuData]=useState(Menu)
  return (
    <>
        <CardMenu menuData={menuData}/>
    </>
  )
}

export default Home