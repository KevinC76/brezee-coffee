/* eslint-disable prettier/prettier */
import { Input } from '@heroui/input';
import React from 'react';

import { MailIcon, SearchIcon, SendIcon } from '../icons';

export default function Footer() {
  return (
    <div className="px-6 sm:px-16 xl:px-64 py-8 flex justify-between items-center bg-dark_background_color flex-col sm:flex-row gap-4">
      {/* left content */}
      <div className="flex flex-col gap-4">
        <h1 className="text-white font-bold text-2xl">
          Sign up for our latest promos
        </h1>
        <div className="flex gap-2">
          <Input
            classNames={{
              base: 'max-w-full sm:max-w-[20rem] h-10',
              mainWrapper: 'h-full',
              input: 'text-small',
              inputWrapper:
                'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
            }}
            placeholder="Type your email address"
            size="sm"
            startContent={<MailIcon size={18} />}
            type="search"
          />
          <div className="bg-brezee_primary rounded-md flex items-center justify-center w-10 h-10 cursor-pointer text-white/50">
            <SendIcon size={18} />
          </div>
        </div>
      </div>
      {/* right content */}
      <div>
        <p className="text-default-500 text-small text-center sm:text-left">
          © 2025 Brezee Coffee
        </p>
        <p className="text-default-500 text-small text-center sm:text-left">
          Terms of Service
        </p>
        <p className="text-default-500 text-small text-center sm:text-left">
          Privacy Policy
        </p>
      </div>
    </div>
  );
}
