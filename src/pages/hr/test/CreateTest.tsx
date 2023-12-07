import React, { useState } from 'react';
import { Alert, Divider } from 'antd';
import { MdCloudDone } from 'react-icons/md';
import { Button, Form, Input, Select, Tabs } from 'antd';

const QuestionsTab: React.FC<{ numberQuestions: any }> = (props) => {
  return (
    <Tabs
      defaultActiveKey='1'
      items={
        props.numberQuestions
          ? new Array(Number(props.numberQuestions)).fill(null).map((_, i) => {
              const id = String(i + 1);
              return {
                label: `Question  ${id}`,
                key: id,
                children: <Answers />,
              };
            })
          : new Array(3).fill(null).map((_, i) => {
              const id = String(i + 1);
              return {
                label: `Question  ${id}`,
                key: id,
                children: <Answers />,
              };
            })
      }
      className='col-span-2 flex justify-center w-full bg-white p-4 rounded-lg mb-8'
    />
  );
};

const Answers: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <Form
      layout='horizontal'
      form={form}
    >
      <Form.Item
        label={<span className='font-bold'>Question</span>}
        required
        hasFeedback
        name={'question'}
        rules={[
          {
            required: true,
            message: 'Please input question 1!',
          },
        ]}
      >
        <Input
          placeholder='Input Question 1 ...'
          allowClear
        />
      </Form.Item>
      <Form.Item
        label={<span className='font-bold'>Answer 1</span>}
        required
        hasFeedback
        name={'answer_1'}
        rules={[
          {
            required: true,
            message: 'Please input answer 1!',
          },
        ]}
      >
        <Input
          placeholder='Input Answer 1 ...'
          allowClear
        />
      </Form.Item>
      <Form.Item
        label={<span className='font-bold'>Answer 2</span>}
        required
        hasFeedback
        name={'answer_1'}
        rules={[
          {
            required: true,
            message: 'Please input answer 2!',
          },
        ]}
      >
        <Input
          placeholder='Input Answer 2 ...'
          allowClear
        />
      </Form.Item>
      <Form.Item
        label={<span className='font-bold'>Answer 3</span>}
        required
        hasFeedback
        name={'answer_1'}
        rules={[
          {
            required: true,
            message: 'Please input answer 3!',
          },
        ]}
      >
        <Input
          placeholder='Input Answer 3 ...'
          allowClear
        />
      </Form.Item>
      <Form.Item
        label={<span className='font-bold'>Answer 4</span>}
        required
        hasFeedback
        name={'answer_1'}
        rules={[
          {
            required: true,
            message: 'Please input answer 4!',
          },
        ]}
      >
        <Input
          placeholder='Input Answer 4 ...'
          allowClear
        />
      </Form.Item>
      <Form.Item
        label={<span className='font-bold'>Correct Answer</span>}
        required
        hasFeedback
        name={'correct'}
        rules={[
          {
            required: true,
            message: 'Please select Correct Answer!',
          },
        ]}
      >
        <Select
          placeholder='Select Correct Answer ...'
          options={[
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },
          ]}
        />
      </Form.Item>
    </Form>
  );
};

const CreateTest: React.FC = () => {
  const [numberQuestions, setNumberQuestions] = useState(0);

  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values: any) => {
    console.log('Received values: ', values);
  };

  const handleInputNumberQuestions = (e: any) => {
    if (e.target.value > 10) {
      setNumberQuestions(10);
    } else if (e.target.value < 3) {
      setNumberQuestions(3);
    } else {
      setNumberQuestions(e.target.value);
    }
  };

  return (
    <div className='p-8'>
      <div className='flex items-center justify-between'>
        <span className='text-3xl font-bold text-[var(--hr-clr)]'>
          Create Test
        </span>
        <MdCloudDone className='text-3xl text-[var(--hr-clr)] hover:cursor-pointer hover:text-green-800' />
      </div>
      <Alert
        description='HR can creates new test exercises (3 - 10 questions).'
        type='info'
        showIcon
        className='my-8'
      />
      <Divider />
      <div className='p-4 rounded-lg border-[1px] border-solid border-[var(--hr-clr)]'>
        <Form
          layout='horizontal'
          form={form}
          onFinish={onFinish}
          className='grid grid-cols-2 gap-4'
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
            label={<span className='font-bold'>Topic</span>}
            required
            hasFeedback
            name={'topic'}
            rules={[
              {
                required: true,
                message: 'Please input topic!',
              },
            ]}
          >
            <Input
              placeholder='Input Topic ...'
              allowClear
            />
          </Form.Item>
          <Form.Item
            label={<span className='font-bold'>Time</span>}
            required
            hasFeedback
            name={'time'}
            rules={[
              {
                required: true,
                message: 'Please input time!',
              },
            ]}
          >
            <Input
              placeholder='Input Time ...'
              allowClear
              type='number'
              addonAfter='minutes'
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
            label={<span className='font-bold'>Total Questions</span>}
            required
            hasFeedback
            name={'total_questions'}
            rules={[
              {
                required: true,
                message: 'Please select Total Questions!',
              },
            ]}
          >
            <Input
              placeholder='Input Number ...'
              allowClear
              type='number'
              addonAfter='questions'
              max={10}
              onChange={handleInputNumberQuestions}
            />
          </Form.Item>
          <QuestionsTab numberQuestions={numberQuestions} />
          <Form.Item>
            <Button
              htmlType='button'
              onClick={onReset}
            >
              Reset
            </Button>
            <Button
              className='bg-[var(--hr-clr)] ml-4'
              type='primary'
              htmlType='submit'
            >
              Create
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CreateTest;
