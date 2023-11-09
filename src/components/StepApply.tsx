import React, { useState } from 'react';
import { Steps, theme } from 'antd';
import { MdLabelImportant } from 'react-icons/md';

const steps = [
  {
    title: (
      <span className='text-[var(--primary-clr)] text-xl font-bold'>Apply</span>
    ),
    content: (
      <div className='w-full'>
        <div className='w-full flex items-center mb-4'>
          <MdLabelImportant className='text-[var(--highlight-clr)] mr-3' />
          <span className='w-[98%] text-justify'>
            Our recruiters will screen your resume and find the match with the
            job you applied. If your profile is qualified, they’ll schedule a
            call to learn more about your skills and experience. Bring your
            questions—this is your opportunity to learn more about the role and
            our chance to hear more about you.
          </span>
        </div>
        <div className='w-full flex items-center mb-4'>
          <MdLabelImportant className='text-[var(--highlight-clr)] mr-3' />
          <span className='w-[98%] text-justify'>
            If there's no current match available, they’ll make a note to follow
            up with you about future opportunities.
          </span>
        </div>
        <div className='w-full flex items-center'>
          <MdLabelImportant className='text-[var(--highlight-clr)] mr-3' />
          <span className='w-[98%] text-justify'>
            Now you seem to be a potential candidate, let's move to your next
            step: Qualification Test!
          </span>
        </div>
      </div>
    ),
  },
  {
    title: (
      <span className='text-[var(--primary-clr)] text-xl font-bold'>
        Qualification Test
      </span>
    ),
    content: (
      <div className='w-full'>
        <div className='w-full flex items-center mb-4'>
          <MdLabelImportant className='text-[var(--highlight-clr)] mr-3' />
          <span className='w-[98%] text-justify'>
            When applying for any role, you’ll be asked to complete a screening
            test. It is designed to measure your technical or theoretical
            expertise in a particular field and we believe our testing system is
            able to verify different levels of candidates.
          </span>
        </div>
        <div className='w-full flex items-center mb-4'>
          <MdLabelImportant className='text-[var(--highlight-clr)] mr-3' />
          <span className='w-[98%] text-justify'>
            The length of the test depends on the role you applied for. It may
            last for about a couple of hours or a few days. We hope that you can
            spend time doing this test carefully as it is an open topic, helping
            you to show off your strengths and professional skills. In addition,
            the Test is not only your travel ticket to the Interview round but
            also an important part in your level assessment and offer.
          </span>
        </div>
        <div className='w-full flex items-center'>
          <MdLabelImportant className='text-[var(--highlight-clr)] mr-3' />
          <span className='w-[98%] text-justify'>
            After you submit your answer, our examiners will assess whether
            you’d be selected to advance in the process and our recruiters will
            inform you the result within a few days.
          </span>
        </div>
      </div>
    ),
  },
  {
    title: (
      <span className='text-[var(--primary-clr)] text-xl font-bold'>
        Interview
      </span>
    ),
    content: (
      <div className='w-full'>
        <div className='w-full flex items-center mb-4'>
          <MdLabelImportant className='text-[var(--highlight-clr)] mr-3' />
          <span className='w-[98%] text-justify'>
            Technical Expertise: We expect you have a strong role-related
            knowledge foundation, demonstrates a wide range of knowledge/skill
            sets/ tool sets (eg: programming experience in multiple languages,
            making use of multiple frameworks and libraries, or experience).
            With fresher/junior, we expect you are able to learn fast and good
            at seft-studying.
          </span>
        </div>
        <div className='w-full flex items-center mb-4'>
          <MdLabelImportant className='text-[var(--highlight-clr)] mr-3' />
          <span className='w-[98%] text-justify'>
            Problem Solving: We ask open-ended questions to learn how you
            approach and your brainstorm ways to achieve the optimal solution.
          </span>
        </div>
        <div className='w-full flex items-center mb-4'>
          <MdLabelImportant className='text-[var(--highlight-clr)] mr-3' />
          <span className='w-[98%] text-justify'>
            Communication/ Teamwork/ Adaptability: Be prepared to be able to
            explain your ideas clearly, and be able to adapt communication style
            depending on the situation, while still expressing yourself
            professionally.
          </span>
        </div>
        <div className='w-full flex items-center mb-4'>
          <MdLabelImportant className='text-[var(--highlight-clr)] mr-3' />
          <span className='w-[98%] text-justify'>
            Culture fit: Share how you adapt to the changing needs of your
            company and your teammates, how you face with conflict and feedbacks
            and how you can directly participate in the work of the team and
            keep your curiosity in technology.
          </span>
        </div>
        <div className='w-full flex items-center'>
          <MdLabelImportant className='text-[var(--highlight-clr)] mr-3' />
          <span className='w-[98%] text-justify'>
            Throughout the interview process, don't hesitate to ask your
            interviewers for clarification to make sure you fully understand
            their questions. And feel free to interview us, too. Ask
            questions—about the work, about the team, about the culture—that
            will help you decide whether the job will be right for you.
          </span>
        </div>
      </div>
    ),
  },
  {
    title: (
      <span className='text-[var(--primary-clr)] text-xl font-bold'>
        Decide
      </span>
    ),
    content: (
      <div className='w-full'>
        <div className='w-full flex items-center'>
          <MdLabelImportant className='text-[var(--highlight-clr)] mr-3' />
          <span className='w-[98%] text-justify'>
            When it comes to making decisions, we will consider a lot of
            perspectives to see whether you are the most suitable person for the
            role. After your interviews are done, our hiring committee will
            collect and review all relevent documents, then send them to Hiring
            Manager for decide hire or not.
          </span>
        </div>
      </div>
    ),
  },
];

const StepApply: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  const contentStyle: React.CSSProperties = {
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 32,
    padding: 16,
  };
  return (
    <>
      <Steps
        current={current}
        onChange={onChange}
        items={steps}
      />
      <div style={contentStyle}>{steps[current].content}</div>
    </>
  );
};

export default StepApply;
