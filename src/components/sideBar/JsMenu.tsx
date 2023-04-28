import { Menu } from 'antd'
import SubMenu from 'antd/es/menu/SubMenu'
import React from 'react'
import { SiJavascript } from 'react-icons/si'
import { domMenus, menuItems } from '../constants/menuOptions'
import { useNavigate } from 'react-router-dom'

const JsMenu = () => {
    const navigate=useNavigate()
  return (
    <Menu
    className='side h-[100vh]'
     style={{backgroundColor:"#fff"}}
     mode="inline"
     defaultSelectedKeys={['0']}
     defaultOpenKeys={['sub1']}>
     <SubMenu key="sub1" 
     icon={<SiJavascript color='yellow'  size={40} />} 
     title="JAVASCRIPT"
     style={{fontSize:17}}
     >
     {
      menuItems.map(({name,link},i)=>(
        <Menu.Item onClick={()=>navigate(link)} key={i} >{name}</Menu.Item>
      ))
     }
      </SubMenu>
      <SubMenu key="sub2" 
    //  icon={<SiJavascript color='yellow'  size={40} />} 
     title="DOM"
     style={{fontSize:17}}
     >
     {
      domMenus.map(({name,link},i)=>(
        <Menu.Item onClick={()=>navigate(link)} key={i} >{name}</Menu.Item>
      ))
     }
      </SubMenu>
     </Menu>
  )
}

export default JsMenu