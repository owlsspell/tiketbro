import * as React from 'react';

import CardArticles from '@/components/CardsArticles';
import Container from '@/components/layout/Container';
import GrayContainer from '@/components/layout/GrayContainer';
import Layout from '@/components/layout/Layout';
import MoreAbout from '@/components/MoreAbout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import Avatar1 from '../images/Avatar1.jpg';
import image1 from '../images/image1.jpg';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/6810import NextImage from './../components/NextImage';
3844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <Container className=''>
            <div>
              <NextImage
                width={672}
                height={408}
                src={image1.src}
                alt=''
                className='w-full sm:rounded-[32px]'
              />
            </div>
          </Container>
          <Container className='px-6'>
            <h1 className='my-10'>
              How to create and use an online booking system?
            </h1>
            <div className='flex items-center sm:flex'>
              <div className='flex-shrink-0 sm:mb-0 '>
                <NextImage
                  width={64}
                  height={64}
                  src={Avatar1.src}
                  alt=''
                  className='mr-4 w-10 rounded object-cover object-center sm:w-16 md:mr-0'
                />
              </div>
              <div className='flex space-y-4 '>
                <div>
                  <div className='text-lg leading-none'>Mia Boskovic</div>
                  <span className='text-xs text-gray-400'>Marketing</span>
                </div>
                <div className='space-y-1'>
                  <span className='flex items-center space-x-2'></span>
                </div>
              </div>
            </div>
          </Container>
          <GrayContainer className='mx-6'>
            Imagine you are the owner of a business that has to be accessed
            through tickets. It's an autumn day, people are waiting in a queue
            under the rain. Your clients are getting cold and wet, probably not
            the best way to start the weekend, don´t you think?. How would you
            manage a weekend day when hundreds of people are lined up in front
            of your business?
          </GrayContainer>
          <Container className='px-6'>
            <>
              <p>
                The person at the entrance collecting the tickets is not going
                fast enough to get the large queue of people into the venue in
                less than 20 minutes of waiting. In this moment is when you
                think about the idea of having an online booking system. With an
                online booking system you will be able to know in advance how
                many people you are going to get each day, there will be no need
                for them to stand in a long line or wait because they will have
                done the work of paying and getting their ticket easily through
                their mobile.No queuing, no waiting line. The customer enters
                directly and easily with the ticket they have on their
                smartphone and has a great day at your venue. You may think
                thats not possible but, in the time it has taken you to read
                this article, approximately x minutes x people could have
                comfortably accessed your venue. While you do other things. Its
                a step into a new era of making money easily simply by having an
                online booking system. Let us help you manage your business and
                you, do the rest, that is whatever you want to do.
              </p>
              <h4 className='py-4 leading-6'>
                What do we consider to be the main advantages of having an
                online booking system?
              </h4>
              <p>
                Apart from the fact that you will still be able to sell tickets
                online at any time of the day. Your business will be closed and
                in the meantime, you will be able to see in real time how your
                customers buy tickets from their smartphone. You will have all
                the information about your venue and the information you need to
                manage it in your ticketbro app on your smartphone. You will be
                able to check how many people will visit your venue every day,
                how many tickets you have sold, how much money you have earned
                from sales. From anywhere in the world. You can create new types
                of tickets, as well as special days, manage the offers you want
                to put on specific days. Its time to forget about analogic and
                switch to digital. You will save time and money!
              </p>
            </>
          </Container>
          <div className='mt-20 mb-14 flex flex-col items-center'>
            <h2 className='mb-4'>Related articles</h2>
            <p className='px-4 text-center md:px-0'>
              You might be interested in these articles. Don’t miss them!
            </p>
          </div>
          <CardArticles />
          <MoreAbout />
        </section>
      </main>
    </Layout>
  );
}
