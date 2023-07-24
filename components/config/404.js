import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';

const links = [
  {
    title: 'Book Online',
    description:
      'Get an instant quote and book online using our fully automatic booking system',
    imgSrc: '/assets/images/book_online.png',
    width: '50',
    height: '50',
    alt: 'Online Booking System',
    link: '/book-a-taxi',
  },
  {
    title: 'Flexible Business Accounts',
    description: 'Taxi service available around the clock across Lancashire.',
    imgSrc: '/assets/images/online_business_account.png',
    width: '30',
    height: '30',
    alt: 'Flexible Business Accounts',
    link: '/accounts',
  },
  {
    title: 'Become A Driver',
    description:
      'Join Elton Bullit Taxi Service as a driver, offering flexible schedules and attractive earning opportunities.',
    imgSrc: '/assets/images/become-a-Driver.png',
    width: '30',
    height: '30',
    alt: 'Become A Driver',
    link: '/become-a-driver',
  },
];

const NotFound = () => {
  return (
    <div className="bg-white">
      <main className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex-shrink-0 pt-16"></div>
        <div className="max-w-xl py-16 mx-auto sm:py-24">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-600">404</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              This page does not exist.
            </h1>
            <p className="mt-2 text-lg text-gray-500">
              The page you are looking for could not be found.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="text-base font-semibold text-gray-500">
              Popular pages
            </h2>
            <ul
              role="list"
              className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
            >
              {links.map((link, linkIdx) => (
                <li
                  key={linkIdx}
                  className="relative flex items-start py-6 space-x-4"
                >
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-50">
                      <Image
                        className="w-6 h-6 text-indigo-700"
                        aria-hidden="true"
                        src={link.imgSrc}
                        height={link.height}
                        width={link.width}
                        alt={link.alt}
                      />
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium text-gray-900">
                      <span className="rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2">
                        <a href={link.link} className="focus:outline-none">
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          {link.title}
                        </a>
                      </span>
                    </h3>
                    <p className="text-base text-gray-500">
                      {link.description}
                    </p>
                  </div>
                  <div className="self-center flex-shrink-0">
                    <ChevronRightIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </li>
              ))}
            </ul>

            <div className="text-base font-medium text-indigo-600 hover:text-indigo-500">
              <Link href="/"> Or go back home</Link>
              <span aria-hidden="true"> &rarr;</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default NotFound;
