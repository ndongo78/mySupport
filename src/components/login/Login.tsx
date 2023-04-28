import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import logo from "../../assets/logo.png"

type Props={
  loginUser:(v:any)=>void
}

const Login: React.FC<Props> = ({loginUser}) => {
  const onFinish = (values: any) => {
    loginUser(values)
   //console.log('Received values of form: ', values);
  };

  return (
    <div className="login flex flex-col justify-center h-[100vh] items-center ">
    <Form
      name="normal_login"
      className="login-form rounded-xl bg-[#155] h-96 w-80 flex justify-center items-center flex-col"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      
    >     
    <div className='m-5'>
    <div className='flex self-center bg-[#2e2e3c] m-auto rounded-full justify-end items-center w-24 h-24'>
         <img src={logo} alt="" className=' '  />
    </div>
    <p className='text-center text-white font-bold'>S'identifier </p>
      <Form.Item
        name="email"
        
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input className='w-56 p-2' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <p></p>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]} 
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          className='w-56 p-2'
        />
      </Form.Item>
      {/* <Form.Item>
        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item> */}
      <Form.Item>
        <Button type="primary" htmlType="submit"
         className="login-form-button w-56 bg-blue-700 text-2xl h-12 font-bold">
          Se connecter
        </Button>
      </Form.Item>
      </div>
    </Form>
    </div>
  );
};

export default Login;