import React, { useState } from 'react';
import { MdTimer } from 'react-icons/md';
import type { CountdownProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ReactJS } from '../../../data/questions';
import { Card, Radio, Button, Statistic, Alert, Divider } from 'antd';

interface Answers {
  [key: number]: string;
}

const { Countdown } = Statistic;

const data = ReactJS.questions;
const TestEx: React.FC = () => {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Answers>({});
  const [score, setScore] = useState(0);
  const [deadline, setDeadline] = useState(0);
  const [status, setStatus] = useState('prepare');

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handleAnswerChange = (e: any) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion + 1]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const newScore = data.reduce((acc: number, question: any) => {
      const userAnswer = userAnswers[question.id];

      if (userAnswer === question.correctAnswer) {
        return acc + 1;
      }
      return acc;
    }, 0);

    setScore(newScore);
    setStatus('finish');
  };

  const onFinish: CountdownProps['onFinish'] = () => {
    setStatus('finish');
  };

  return (
    <div className='p-8'>
      <Alert
        description='You only have one chance to take the test!'
        type='warning'
        showIcon
      />
      <Divider />
      {status === 'prepare' && (
        <div className='flex flex-col items-center justify-center gap-8'>
          <span className='text-3xl font-bold text-[var(--hr-clr)]'>
            Test {ReactJS.name}
          </span>
          <span className='text-lg'>
            Total <span className='font-bold text-red-600'>{data.length}</span>{' '}
            questions!
          </span>
          <span className='text-lg'>
            You have{' '}
            <span className='font-bold text-red-600'>{ReactJS.time}</span>{' '}
            minutes!
          </span>
          <span className='text-lg'>
            Minimum{' '}
            <span className='font-bold text-red-600'>
              {Math.floor((data.length * 7) / 10)}/{data.length}
            </span>{' '}
            questions to pass!{' '}
          </span>
          <Button
            size='large'
            type='primary'
            className='bg-[var(--hr-clr)]'
            onClick={() => {
              setStatus('start'),
                setDeadline(Date.now() + 1000 * 60 * ReactJS.time);
            }}
          >
            Start
          </Button>
        </div>
      )}

      {status === 'start' && (
        <div>
          <Card
            title={
              <div className='flex items-center justify-between'>
                <span className='text-2xl font-bold text-[var(--hr-clr)]'>
                  ReactJS
                </span>
                <div className='flex items-center gap-4'>
                  <Countdown
                    format='mm:ss'
                    value={deadline}
                    onFinish={onFinish}
                  />
                  <MdTimer className='text-3xl text-[var(--hr-clr)] hover:cursor-pointer hover:text-green-800' />
                </div>
              </div>
            }
          >
            <span className='text-lg font-bold'>
              Question {currentQuestion + 1}: {data[currentQuestion].question}
            </span>

            <Radio.Group
              onChange={handleAnswerChange}
              value={userAnswers[currentQuestion + 1]}
              className='flex justify-between items-center mt-8'
            >
              <div className='flex flex-col gap-4'>
                {data[currentQuestion].answers.map((option) => (
                  <Radio
                    key={option}
                    value={option}
                  >
                    {String(option).includes('https://') ? (
                      <img
                        src={option}
                        className='w-40'
                      />
                    ) : (
                      option
                    )}
                  </Radio>
                ))}
              </div>
              <div>
                {data[currentQuestion].questionPic && (
                  <img
                    className='w-[75%] h-auto'
                    src={data[currentQuestion].questionPic}
                  />
                )}
              </div>
            </Radio.Group>
          </Card>

          {currentQuestion < data.length - 1 ? (
            <Button
              type='primary'
              onClick={handleNextQuestion}
              className='mt-8 bg-[var(--hr-clr)]'
            >
              Next
            </Button>
          ) : (
            <Button
              type='primary'
              onClick={handleSubmit}
              className='mt-8 bg-[var(--hr-clr)]'
            >
              Submit
            </Button>
          )}
        </div>
      )}
      {status === 'finish' && (
        <div>
          <Card
            title={
              <span className='text-2xl text-[var(--hr-clr)]'>Result</span>
            }
          >
            <div className='flex flex-col gap-2'>
              <span className='text-lg'>
                <span className='font-bold'>Correct: </span>
                <span className='text-red-600'>
                  {score} / {data.length}
                </span>
              </span>

              <span className='text-lg'>
                <span className='font-bold'>Conclude: </span>
                {score < Math.floor((data.length * 7) / 10) ? (
                  <span>You didn't pass the test!</span>
                ) : (
                  <span>Pass!</span>
                )}
              </span>
            </div>
          </Card>
          <Button
            type='primary'
            className='mt-8 bg-[var(--hr-clr)]'
            onClick={() => navigate('/')}
          >
            Home
          </Button>
        </div>
      )}
    </div>
  );
};

export default TestEx;
