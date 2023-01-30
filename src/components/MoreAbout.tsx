import * as React from 'react';

import Button from '@/components/buttons/Button';

export default function MoreAbout() {
  return (
    <div className='my-20 flex w-full flex-col	items-center bg-gradient-to-bl from-slate-800 via-slate-900 to-slate-800 backdrop-blur-3xl'>
      <div className='mt-20 w-full px-4 text-center font-bold text-white md:w-3/5'>
        <div className='mb-4 text-2xl md:text-4xl'>
          Do you want to know more about ticketbro?
        </div>
        <p className='font-normal'>
          Let’s get started. It only takes a few minutes.
        </p>
        <Button
          variant='outline'
          isDarkBg={true}
          className='mt-16 mb-14 rounded-xl bg-white px-8 py-4 font-medium text-dark hover:border-white hover:text-white'
        >
          Let’s get started
        </Button>
      </div>
    </div>
  );
}
