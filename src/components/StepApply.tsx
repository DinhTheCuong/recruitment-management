import React, { useState } from 'react';
import { Steps } from 'antd';

const StepApply: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  return (
    <Steps
      current={current}
      onChange={onChange}
      items={[
        {
          title: (
            <span className='text-[var(--primary-clr)] text-xl font-bold'>
              Apply
            </span>
          ),
        },
        {
          title: (
            <span className='text-[var(--primary-clr)] text-xl font-bold'>
              Qualification Test
            </span>
          ),
        },
        {
          title: (
            <span className='text-[var(--primary-clr)] text-xl font-bold'>
              Interview
            </span>
          ),
        },
        {
          title: (
            <span className='text-[var(--primary-clr)] text-xl font-bold'>
              Decide
            </span>
          ),
        },
      ]}
    />
  );
};

export default StepApply;
