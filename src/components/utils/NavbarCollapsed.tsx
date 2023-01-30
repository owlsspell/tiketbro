import { Popover } from '@headlessui/react';
import * as React from 'react';

import NextImage from './../NextImage';
import arrow from '../../images/arrow.png';

export default function NavbarCollapsed({
  options,
  label,
}: {
  options: string[];
  label: string;
}) {
  return (
    <>
      <Popover>
        {({ open }) => (
          <div className=''>
            <Popover.Button
              className='flex items-center justify-between font-medium outline-none before:absolute before:absolute
                    before:top-0 before:right-0 before:h-0.5 before:w-0 before:bg-blue-400 
                    before:transition-all before:duration-500 hover:text-primary-700
                    hover:before:left-1/4 hover:before:w-4 hover:before:bg-primary-500'
            >
              <span className='mr-2 hover:text-primary-700 '>{label}</span>
              <NextImage
                width={9}
                height={5}
                alt='Image'
                src={arrow.src}
                className={open ? 'rotate-180 transform ' : ''}
              />
            </Popover.Button>
            <Popover.Panel className='relative z-50 flex min-w-max flex-col bg-white pt-2 md:absolute md:pt-0'>
              {options.map((option) => (
                <a href='#' key={option} className='py-1 px-2'>
                  {option}
                </a>
              ))}
            </Popover.Panel>
          </div>
        )}
      </Popover>
    </>
  );
}
