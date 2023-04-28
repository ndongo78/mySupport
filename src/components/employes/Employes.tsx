import React from 'react'
import { Button } from 'antd'
import { Input, Space } from 'antd';
const {Search}=Input;

const Employes = () => {
  return (
    <div className=''>
        <div className="flex justify-between items-center">
            <Button type='primary' style={{height:60}} className='m-5 bg-blue-900 text-xl font-bold'>Ajouter un employé</Button>
            <Search placeholder="rechercher un employé" className=' w-72' onSearch={()=>{}} enterButton />
        </div>
    </div>
  )
}

export default Employes