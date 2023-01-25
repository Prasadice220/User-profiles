import React, { useState } from 'react'
import {EditFilled  } from '@ant-design/icons'

import { Button, Checkbox, Form, Input, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { updateName } from '../redux-toolkit/SliceCreate';
const EditModal = ({ide}) => {
  const dispatch=useDispatch()
  const states=useSelector(state=>state.counter.ObjVal)

  const fert= states.filter(item=>item.id === ide)

  const [Forms]=Form.useForm()
    const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
 
    setIsModalOpen(true);
  };
  const handleOk = () => {
    Forms.submit()
    
   
    
     
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    
    const vara=[ide,values]
    dispatch(updateName(vara))
    setIsModalOpen(false)
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed');
   
  };
  return (
    <div>  <Button type="primary" onClick={showModal}>
    <EditFilled  />
  </Button>
  <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk}  onCancel={handleCancel}>
  <Form
   form={Forms}
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  > 
  <Form.Item
    label="Name"
    name="username"
    
    initialValue={fert[0].name}
    rules={[{ required: true, message: 'Please input your username!' }]}
  >
  <Input />
  </Form.Item>
  <Form.Item
    label="Email"
    name="Email"
    initialValue={fert[0].email}
    rules={[{ required: true, message: 'Please input your username!' }]}
  >
    <Input />
  </Form.Item>
  <Form.Item
    label="Phone"
    name="phone"
    initialValue={fert[0].phone}
    rules={[{ required: true, message: 'Please input your username!' }]}
  >
    <Input />
  </Form.Item>
  <Form.Item
    label="Website"
    name="Website"
    initialValue={fert[0].website}
    rules={[{ required: true, message: 'Please input your username!' }]}
  >
    <Input />
  </Form.Item>
  
  </Form>
    
  </Modal></div>
  )
}

export default EditModal