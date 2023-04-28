import React, { FC } from 'react'
import { Avatar, Calendar, Layout ,Menu,MenuProps,Typography, theme} from 'antd'
import {SiJavascript} from "react-icons/si"
import {DiReact} from "react-icons/di"
import SubMenu from 'antd/es/menu/SubMenu';
import { menuItems } from '../constants/menuOptions';
import { useNavigate } from 'react-router-dom';
import JsMenu from './JsMenu';
import ReactjsMenu from './ReactjsMenu';
import ReactNativeMenu from './ReactNativeMenu';
import NextjsMenu from './NextjsMenu';
import NodejsMenu from './NodejsMenu';

  type MenuItem = Required<MenuProps>['items'][number];
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }
  

const {Header,Sider}=Layout;
const {Text}=Typography

interface Props{
    collapsed:boolean
    handleNavigate:(t:string) => void,
    selectTech:string
}

export const SideBar:FC<Props> = ({collapsed,handleNavigate,selectTech}) => {
  const navigate=useNavigate()
    const {
        token: { colorBgContainer , },
      } = theme.useToken();


  let content;
  if(selectTech === "JavaScript") {
    content=<JsMenu />;
  }
  const render=()=>{
   if(selectTech === "Reactjs"){
      return <ReactjsMenu />;
    }else if(selectTech === "ReactNative"){
      return <ReactNativeMenu />;
    }else if(selectTech === "Nextjs"){
      return <NextjsMenu />;
    }else if(selectTech === "Nodejs"){ 
      return <NodejsMenu />;
     }else{
      return <JsMenu />;
     }
  }

  return (
    <div className='side shadow-2xl' style={{backgroundColor:colorBgContainer}}>
    <Sider 
     style={{
      display:collapsed ? "none":"block",width:250,
      backgroundImage:"../../assets/bg.png"
    }}
    trigger={null} collapsible collapsed={collapsed}
    width={300}
    >
     <div className='flex flex-col items-center side overflow-scroll' style={{
      backgroundColor:colorBgContainer
      }}>
      <div className='flex flex-col items-center m-5'>
       {/* {
        !collapsed && (
            <Avatar
         size={100}
         className='m-5'
         src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        >
        </Avatar>
        )
       } */}
        </div>
          {render()}
        </div>
    </Sider>
    </div>
  )
}
