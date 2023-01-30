import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import ButtonLink from './../links/ButtonLink';
import NavbarCollapsed from './../utils/NavbarCollapsed';
import menu from '../../images/burger.png';
import logo from '../../images/ticketbro-logo.png';
import NextImage from './../NextImage';

const links = [
  { href: '/', label: 'Home' },
  {
    href: '/',
    label: 'Features',
    options: ['Analytics', 'Workload', 'Bookable 24/7'],
  },
  { href: '/', label: 'Case studies', options: ['Case 1', 'Case 2'] },
  { href: '/', label: 'Pricing' },
  { href: '/', label: 'Blog' },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className='sticky top-0 z-50 bg-white md:mb-16 md:pb-10 '>
      <div className='layout flex h-14 items-center justify-between md:items-baseline'>
        <UnstyledLink href='/' className='w-1/5 font-bold hover:text-gray-600'>
          <NextImage src={logo.src} alt='image' width={135} height={24} />
        </UnstyledLink>
        <nav className='w-full max-w-672'>
          <ul
            className={
              'absolute top-10 right-0 w-max flex-col justify-around bg-white px-8 py-4 text-[16px] md:relative md:top-0 md:flex md:w-full md:flex-row md:py-0 lg:px-20 xl:px-12' +
              (open ? '' : ' hidden')
            }
          >
            {links.map(({ href, label, options }) => (
              <li
                key={`${href}${label}`}
                className='relative mt-3 pt-0 md:mt-0 md:pt-10'
              >
                {options ? (
                  <NavbarCollapsed options={options} label={label} />
                ) : (
                  <UnstyledLink
                    href={href}
                    className='font-medium before:absolute before:absolute
                    before:top-0 before:right-0 before:h-0.5 before:w-0 before:bg-blue-400 
                    before:transition-all before:duration-500 hover:text-primary-700
                    hover:before:left-1/4 hover:before:w-4 hover:before:bg-primary-500'
                  >
                    {label}
                  </UnstyledLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <ButtonLink
          variant='primary'
          href='/'
          className='hidden w-40 rounded-xl bg-primary-700 text-center md:block xl:w-max xl:py-3 xl:px-7'
        >
          Get started
        </ButtonLink>
        <div onClick={() => setOpen(!open)}>
          <NextImage
            width={16}
            height={8}
            src={menu.src}
            alt=''
            className='block md:hidden'
          />
        </div>
      </div>
    </header>
  );
}
