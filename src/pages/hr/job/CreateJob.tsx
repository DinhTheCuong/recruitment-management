import React from 'react';
import { Alert, Divider } from 'antd';
import { MdCloudDone } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Select } from 'antd';

const { TextArea } = Input;

const CreateJob: React.FC = () => {
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const formItemLayout = { labelCol: { span: 2 }, wrapperCol: { span: 21 } };
  const buttonItemLayout = { wrapperCol: { span: 14, offset: 2 } };

  const onReset = () => {
    form.resetFields();
  };

  const create = new Date();
  const expired = new Date(create).setMonth(create.getMonth() + 1);
  const expiredDate = new Date(expired);

  const onFinish = (values: any) => {
    console.log('Received values: ', values);
  };

  return (
    <div className='p-8'>
      <div className='flex items-center justify-between'>
        <span className='text-3xl font-bold text-[var(--hr-clr)]'>
          Create Job
        </span>
        <MdCloudDone
          className='text-3xl text-[var(--hr-clr)] hover:cursor-pointer hover:text-green-800'
          onClick={() => navigate('/hr/job/create')}
        />
      </div>
      <Alert
        description='HR can creates new job positions.'
        type='info'
        showIcon
        className='my-8'
      />
      <Divider />
      <div className='p-4 rounded-lg border-[1px] border-solid border-[var(--hr-clr)]'>
        <Form
          {...formItemLayout}
          layout='horizontal'
          form={form}
          onFinish={onFinish}
        >
          <Form.Item
            label={<span className='font-bold'>Code</span>}
            required
            hasFeedback
            name={'code'}
            rules={[
              {
                required: true,
                message: 'Please input code!',
              },
            ]}
          >
            <Input
              placeholder='Input Code ...'
              allowClear
            />
          </Form.Item>
          <Form.Item
            label={<span className='font-bold'>Job</span>}
            required
            hasFeedback
            name={'job'}
            rules={[
              {
                required: true,
                message: 'Please input job!',
              },
            ]}
          >
            <Input
              placeholder='Input Job Name ...'
              allowClear
            />
          </Form.Item>
          <Form.Item
            label={<span className='font-bold'>Position</span>}
            required
            hasFeedback
            name={'position'}
            rules={[
              {
                required: true,
                message: 'Please input position!',
              },
            ]}
          >
            <Input
              placeholder='Input Position ...'
              allowClear
            />
          </Form.Item>
          <Form.Item
            label={<span className='font-bold'>Level</span>}
            required
            hasFeedback
            name={'level'}
            rules={[
              {
                required: true,
                message: 'Please select level!',
              },
            ]}
          >
            <Select
              placeholder='Select level ...'
              options={[
                { value: 'intern', label: 'Intern' },
                { value: 'fresher', label: 'Fresher' },
                { value: 'junior', label: 'Junior' },
                { value: 'senior', label: 'Senior' },
              ]}
            />
          </Form.Item>
          <Form.Item
            label={<span className='font-bold'>Description</span>}
            required
            name={'description'}
            rules={[
              {
                required: true,
                message: 'Please input description!',
              },
            ]}
          >
            <TextArea
              rows={3}
              placeholder='Description here ...'
              allowClear
              showCount
            />
          </Form.Item>
          <Form.Item
            label={<span className='font-bold'>Create</span>}
            required
          >
            <span>
              {create.getDate() +
                '/' +
                (create.getMonth() + 1) +
                '/' +
                create.getFullYear()}
            </span>
          </Form.Item>
          <Form.Item
            label={<span className='font-bold'>Expired</span>}
            required
          >
            <span>
              {expiredDate.getDate() +
                '/' +
                (expiredDate.getMonth() + 1) +
                '/' +
                expiredDate.getFullYear()}
            </span>
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button
              htmlType='button'
              onClick={onReset}
            >
              Clear
            </Button>
            <Button
              className='bg-[var(--hr-clr)] ml-4'
              type='primary'
              htmlType='submit'
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CreateJob;
