import { Article } from '@/pages/api/getArticles';

import NextImage from './NextImage';

export default function Card({ article }: { article: Article }) {
  return (
    <div className='rounded md:max-w-xs'>
      <NextImage
        className='flex w-full justify-center'
        imgClassName='w-full'
        src={article.image}
        alt=''
        width='320'
        height='320'
      />
      <span className='my-5 mr-2 inline-block rounded-lg bg-gray-100 px-3 py-1 text-xs'>
        {article.tags.toUpperCase()}
      </span>
      <div className='mb-2 text-xl font-medium tracking-tight'>
        {article.title}
      </div>
      <div className='flex flex-wrap'>
        <span className='mb-2 mr-4 text-xs tracking-tight text-gray-500'>
          {article.author}
        </span>
        <span className='mb-2 mr-4 text-xs tracking-tight text-gray-500'>
          {article.date}
        </span>
      </div>
    </div>
  );
}
