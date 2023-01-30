import Button from '@/components/buttons/Button';
import { FooterOption } from '@/components/layout/Footer';

export default function FooterNavList({ title, options }: FooterOption) {
  return (
    <div>
      <h2 className='mb-2 text-[16px] font-semibold '>{title}</h2>
      <ul className='text-gray-500'>
        {options.map((option) => (
          <li
            className='mb-2 flex flex-nowrap items-center text-[16px]'
            key={title}
          >
            <a href='#' className=' hover:underline '>
              {typeof option === 'string' ? option : option.text}
            </a>
            {typeof option === 'string' ? (
              ''
            ) : (
              <Button
                variant='primary'
                className='ml-2 rounded-lg border-none bg-primary-100 px-2 py-1 text-[16px] text-primary-800 md:text-[16px]'
              >
                {option.button}
              </Button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
