import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FooterNavList from '@/components/FooterNavList';
import SocialIcons from '@/components/SocialIcons';

import appStore from '../../images/Download_on_the_App_Store.png';
import googlePlay from '../../images/google-play-badge.png';
import logo from '../../images/ticketbro-logo.png';
import NextImage from './../NextImage';

export type FooterNav = FooterOption[];
export type FooterOption = {
  title: string;
  options: ({ text: string; button?: string } | string)[];
};

export default function Footer() {
  const footerNav: FooterNav = [
    { title: 'Product', options: ['Selfstarter', 'Enterprise', 'Pricing'] },
    { title: 'Features', options: ['Analytics', 'Workload', 'Bookable 24/7'] },
    {
      title: 'Company',
      options: [
        { text: 'Careers', button: 'Hiring' },
        'About us',
        'Blog',
        'Contact Sales',
      ],
    },
    { title: 'Help', options: ['FAQs', 'Customer support', 'Help center'] },
  ];

  return (
    <footer className='bg-white dark:bg-gray-900'>
      <div className='grid grid-cols-2 gap-8 px-6 pt-0 pb-8 sm:px-10 sm:py-8 md:grid-cols-4 xl:grid-cols-6 xl:gap-4 xl:px-20 2xl:px-32'>
        <div className='col-span-2 mt-2 w-28 sm:col-auto'>
          <NextImage width={107} height={20} src={logo.src} alt='' />
          <SocialIcons />
        </div>
        {footerNav.map((col) => (
          <FooterNavList
            key={col.title}
            title={col.title}
            options={col.options}
          />
        ))}
        <div>
          <h2 className='mb-4 text-[16px] font-semibold'>Get the app</h2>
          <ul className='text-gray-500'>
            <li className='mb-4 w-28'>
              <NextImage width={133} height={40} src={googlePlay.src} alt='' />
            </li>
            <li className='mb-4 w-28'>
              <NextImage width={133} height={40} src={appStore.src} alt='' />
            </li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col-reverse bg-slate-900 px-4 py-6  text-center md:items-center md:justify-between lg:px-32 xl:flex-row'>
        <span className='mt-8 text-center text-xs text-gray-500 dark:text-gray-300 sm:text-center xl:mt-0'>
          © Copyright 2023 ticketbro GmbH
        </span>
        <ul className='mt-4 flex list-none flex-col flex-wrap space-y-4  text-xs text-gray-400 sm:justify-center md:mt-0 xl:flex-row xl:space-y-0 xl:space-x-6'>
          <li>
            <a
              href='#'
              className='border-gray-600 pr-0 text-center hover:underline xl:border-r-2 xl:pr-4'
            >
              Imprint
            </a>
          </li>
          <li>
            <a
              href='#'
              className='border-gray-600  pr-0 text-center hover:underline xl:border-r-2 xl:pr-4'
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href='#'
              className='border-gray-600  pr-0 text-center hover:underline  xl:border-r-2 xl:pr-4'
            >
              Terms & conditions
            </a>
          </li>
          <li className='mx-auto '>
            <a href='#' className='flex hover:underline'>
              <FontAwesomeIcon
                icon={faGlobe}
                className='h-4 scale-100 pr-2 hover:scale-125'
              />
              English
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
