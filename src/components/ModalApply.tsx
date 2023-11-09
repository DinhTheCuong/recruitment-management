import React, { useState } from 'react';
import { Button, Modal, ConfigProvider, Input, Form } from 'antd';

const ModalApply: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: unknown) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo);
  };

  type FieldType = {
    firstName?: string;
    lastName?: string;
    email?: string;
  };

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorBgContainer: '#0EB154',
              colorBorder: 'none',
              colorText: '#fff',
            },
          },
          token: {
            colorPrimaryHover: '#fff',
            colorPrimaryActive: '#fff',
          },
        }}
      >
        <Button onClick={showModal}>Apply</Button>
      </ConfigProvider>
      <Modal
        title={
          <span className='text-[#0EB154] text-xl'>
            Apply to Software Engineer
          </span>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout='vertical'
          className='mt-8'
        >
          <Form.Item<FieldType>
            label={<span className='font-bold'>First Name</span>}
            name='firstName'
            rules={[
              {
                required: true,
                message: (
                  <span className='text-sm'>Please input your first name!</span>
                ),
              },
            ]}
          >
            <Input
              allowClear
              placeholder='First Name'
            />
          </Form.Item>

          <Form.Item<FieldType>
            label={<span className='font-bold'>Last Name</span>}
            name='lastName'
            rules={[
              {
                required: true,
                message: (
                  <span className='text-sm'>Please input your last name!</span>
                ),
              },
            ]}
          >
            <Input
              allowClear
              placeholder='Last Name'
            />
          </Form.Item>

          <Form.Item<FieldType>
            label={<span className='font-bold'>Email</span>}
            name='email'
            rules={[
              {
                required: true,
                message: (
                  <span className='text-sm'>Please input your Email!</span>
                ),
              },
            ]}
          >
            <Input
              type='email'
              allowClear
              placeholder='Email'
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalApply;
