import React, { FC, useState } from 'react'
import { Avatar, Button, Input, Layout ,Typography, theme} from 'antd'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SearchOutlined
  } from '@ant-design/icons';
  import {SiJavascript, SiNextdotjs, SiNodedotjs, SiReact} from "react-icons/si"

const {Header,Sider}=Layout;
const {Search}=Input;
interface Props{
    collapsed:boolean,
    setCollapsed:(t:boolean) => void
    setSelectTech:React.Dispatch<React.SetStateAction<string>>
    selectTech:string,
    user:any
}
export const HeaderTop:FC<Props> = ({collapsed,setCollapsed,setSelectTech,selectTech,user}) => {
   
    const {
      token: { colorBgContainer },
    } = theme.useToken();
  
  return (
    <div className=' shadow-2xl'>
    <Header 
    style={{
        backgroundColor:"#013",
        height:150,
        color:"#fff",
        display: 'flex',
         justifyContent:"space-between",
         alignItems:"center"
        }}
        className='side'
        >
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger text-2xl',
            onClick: () => setCollapsed(!collapsed),
          })}
           {/* <Search placeholder="rechercher un employé" className=' w-72' onSearch={()=>{}} enterButton /> */}
          <div className="comp w-100 flex flex-wrap">
          <Button  onClick={()=>setSelectTech("Javascript")} 
          className={`w-50 text-2xl m-2 p-4 items-center flex h-10 ${selectTech ==='Javascript' && "bg-green-400 "}` }
          icon={<SiJavascript color='yellow' />}><span className='ml-2 text-2xl p-2'>Javascript</span> </Button>
          <Button onClick={()=>setSelectTech("Reactjs")} 
          className={`w-50 text-2xl m-2 p-4 items-center flex h-10 ${selectTech ==='Reactjs' && "bg-green-400 "}` } icon={<SiReact color='#4545bb' />}> <span className='ml-2 text-2xl'>Reactjs</span></Button>
          <Button onClick={()=>setSelectTech("ReactNative")} 
          className={`w-50 text-2xl m-2 p-4 items-center flex h-10 ${selectTech ==='ReactNative' && "bg-green-400 "}` } icon={<SiReact color='#3434da' />}> <span className='ml-2 text-2xl'>React-native</span></Button>
          <Button onClick={()=>setSelectTech("Nextjs")} className={`w-50 text-2xl m-2 p-4 items-center flex h-10 ${selectTech ==='Nextjs' && "bg-green-400 "}` } icon={<SiNextdotjs color='#3434da' />}> <span className='ml-2 text-2xl'>Nextjs</span></Button>
          <Button onClick={()=>setSelectTech("Nodejs")} className={`w-50 text-2xl m-2 p-4 items-center flex h-10 ${selectTech ==='Nodejs' && "bg-green-400 "}` } icon={<SiNodedotjs color='#1dd058' />}> <span className='ml-2 text-2xl'>Nodejs</span></Button>
          </div>
          <div className='flex items-center justify-center'>
            <div className='flex text-black items-center flex-col justify-center'>
              <Avatar src="https://picsum.photos/200" size={50} />
              <p className=' text-xl font-semibold ml-14 '>Bonjour Ndongo</p>
            </div>
          </div>
    </Header>
    </div>
  )
}
