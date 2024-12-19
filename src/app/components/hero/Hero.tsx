'use client';

import { Netflix, ArrowRight } from '@/icons';
import { Button, Input, P } from '@/components';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export function Hero() {
  const { register } = useForm();

  return (
    <section className='w-full h-[900px] bg-cover bg-center bg-no-repeat bg-[url("/hero.jpg")] relative'>
      <div className="flex flex-col mx-auto max-w-[1524px] w-full h-full gap-28">
        <header className="flex items-center w-full justify-between z-50">
          <h1>
            <Netflix />
          </h1>
          <div className="flex items-center gap-4">
            <button className="rounded-md border border-zinc-300 bg-transparent px-4 py-2 text-sm w-full placeholder:text-zinc-300 text-white font-semibold">
              Translate
            </button>
            <Link href={'/register'} className="w-[150px]">
              <Button label="Sign in" className="w-full px-4 py-2 text-sm" />
            </Link>
          </div>
        </header>

        <div className="flex flex-col items-center justify-center gap-6 max-w-[600px] w-full mx-auto z-50">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-5xl font-bold text-white text-pretty text-center">
              Unlimited movies, TV shows, and more
            </h2>
            <span className="text-white">
              Starts at ARS 4,299. Cancel anytime.
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <P />
            <div className="flex items-center gap-4 w-full">
              <Input
                placeholder="Email address"
                //register={register}
                error="Email address is required"
                regex={/.+@.+\..+/}
                type="email"
              />
              <Button
                label="Login"
                className="px-2 py-2 flex items-center justify-center gap-2 h-[60px] w-[300px] text-xl"
                icon={<ArrowRight className="w-8 h-8" />}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bg-black bg-opacity-90 w-full h-full top-0 left-0 z-0"></div>

      <div className="w-full border border-red-600"></div>
    </section>
  );
}
