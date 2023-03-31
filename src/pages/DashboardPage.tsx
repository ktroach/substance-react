import React from 'react';
import { FC } from 'react';
import { HiExternalLink } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../helpers';
import classNames from 'classnames';

type ComponentItem = {
  title: string;
  href: string;
  className: string;
  images: { light: string; dark: string };
};

const DashboardPage: FC = () => {
  const components: ComponentItem[] = [
    {
      title: 'Alerts',
      href: '/alerts',
      className: 'w-56',
      images: { light: 'https://preline.co/assets/svg/visuals/examples-overlays-modals.svg', dark: 'https://preline.co/assets/svg/visuals/examples-overlays-modals.svg' },
    },
    {
      title: 'Accordion',
      href: '/accordion',
      className: 'w-56',
      images: { light: 'https://preline.co/assets/svg/visuals/examples-overlays-modals.svg', dark: 'https://preline.co/assets/svg/visuals/examples-overlays-modals.svg' },
    },
    {
      title: 'Badges',
      href: '/badges',
      className: 'w-28',
      images: { light: 'https://preline.co/assets/svg/visuals/examples-overlays-modals.svg', dark: 'https://preline.co/assets/svg/visuals/examples-overlays-modals.svg' },
    },
    {
      title: 'Buttons',
      href: '/buttons',
      className: 'w-24',
      images: { light: 'https://preline.co/assets/svg/visuals/examples-overlays-modals.svg', dark: 'https://preline.co/assets/svg/visuals/examples-overlays-modals.svg' },
    },
    {
      title: 'Button group',
      href: '/button-group',
      className: 'w-56',
      images: { light: 'https://preline.co/assets/svg/visuals/examples-overlays-modals.svg', dark: 'https://preline.co/assets/svg/visuals/examples-overlays-modals.svg' },
    },
    {
      title: 'Card',
      href: '/card',
      className: 'w-36',
      images: { light: 'https://preline.co/assets/svg/visuals/examples-overlays-modals.svg', dark: 'https://preline.co/assets/svg/visuals/examples-overlays-modals.svg' },
    },
    {
      title: 'Spinners',
      href: '/spinners',
      className: 'w-36',
      images: { light: 'https://preline.co/assets/svg/visuals/examples-overlays-modals.svg', dark: 'https://preline.co/assets/svg/visuals/examples-overlays-modals.svg' },
    },
    {
      title: 'Tooltips',
      href: '/tooltips',
      className: 'w-24',
      images: { light: 'https://preline.co/assets/svg/visuals/examples-overlays-modals.svg', dark: 'https://preline.co/assets/svg/visuals/examples-overlays-modals.svg' },
    },
    {
      title: 'Dropdown',
      href: '/dropdown',
      className: 'w-24',
      images: { light: 'https://preline.co/assets/svg/visuals/examples-overlays-modals.svg', dark: 'https://preline.co/assets/svg/visuals/examples-overlays-modals.svg' },
    },
    {
      title: 'Modal',
      href: '/modal',
      className: 'w-24',
      images: { light: 'https://preline.co/assets/svg/visuals/examples-overlays-modals.svg', dark: 'https://preline.co/assets/svg/visuals/examples-overlays-modals.svg' },
    },        
  ];

  return (
    <div className="mx-auto max-w-screen-xl p-4 lg:p-12 lg:text-center">
      <h1 className="mb-4 text-2xl font-bold text-gray-700 dark:text-white lg:text-center lg:text-4xl lg:font-extrabold lg:leading-snug 2xl:px-48">
        Substance React Components
      </h1>
      <p className="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:mb-16 lg:text-center lg:text-xl xl:px-64">
        Reusable Components built for React applications. Built on top of Tailwind CSS.  Substance React provides the building blocks for both Developers and UX Designers, alike, to build highly-componentized and modular interfaces, based on the Design System of your choice.
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {components.map(({ title, href, className, images }, index) => (
          <Link
            key={index}
            className="h-64 rounded-xl border border-gray-100 bg-white shadow transition hover:border-white hover:shadow-lg dark:border-gray-700 dark:bg-gray-900 dark:shadow-gray-800 dark:hover:border-gray-600"
            to={href}
          >
            <div className="flex items-center justify-between rounded-t-lg border-b border-gray-200 bg-gray-50 py-2.5 px-5 dark:border-gray-700 dark:bg-gray-700">
              <span className="text-lg font-medium text-gray-500 dark:text-gray-400">{title}</span>
              <HiExternalLink className="h-5 w-5 text-gray-900 dark:text-white" />
            </div>
            <div className="flex h-52 items-center justify-center">
              <img className={classNames(className, 'dark:hidden')} src={(images.light)} alt="Image" />
              <img className={classNames(className, 'hidden dark:block')} src={(images.dark)} alt="Image" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
