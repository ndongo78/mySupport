import { Menu } from 'antd'
import SubMenu from 'antd/es/menu/SubMenu'
import React from 'react'
import { SiJavascript, SiReact } from 'react-icons/si'
import { menuItems } from '../constants/menuOptions'
import { useNavigate } from 'react-router-dom'

const ReactjsMenu = () => {
    const navigate=useNavigate()
  return (
    <Menu
    className='side'
     style={{backgroundColor:"#fff"}}
     mode="inline"
     openKeys={["sub1"]}
     defaultSelectedKeys={['0']}
     defaultOpenKeys={['sub1']}>
     <SubMenu key="sub1" 
     icon={<SiReact color='yellow'  size={40} />} 
     title="Reactjs"
     style={{fontSize:17}}
     >
     {
      [].map(({name,link},i)=>(
        <Menu.Item onClick={()=>navigate(link)} key={i} >{name}</Menu.Item>
      ))
     }
      </SubMenu>
     </Menu>
  )
}

export default ReactjsMenu