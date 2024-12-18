import { Netflix, ArrowRight } from '@/icons';
import { BUTTONS } from '@/lib';
import { Button } from '@/components';

export function Hero() {
  return (
    <section className='w-full h-[900px] bg-cover bg-center bg-no-repeat bg-[url("/hero.jpg")] relative'>
      <div className="flex flex-col mx-auto max-w-[1524px] w-full h-full gap-28">
        <header className="flex items-center w-full justify-between z-50">
          <h1>
            <Netflix />
          </h1>
          <div className="flex items-center gap-4">
            {/* {BUTTONS.map((button) => (
            <button key={button.label}>{button.label}</button>
          ))} */}
            <button className="rounded-md border border-zinc-300 bg-transparent px-4 py-2 text-sm w-full placeholder:text-zinc-300 text-white font-semibold">
              Translate
            </button>
            <Button label="Sign in" className="w-full px-4 py-2 text-sm" />
          </div>
        </header>

        <div className="flex flex-col items-center justify-center gap-6 max-w-[600px] w-full mx-auto z-50">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-4xl font-bold text-white text-pretty text-center">
              Unlimited movies, TV shows, and more
            </h2>
            <span className="text-white">
              Starts at ARS 4,299. Cancel anytime.
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-white">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="flex items-center gap-4 w-full">
              <input
                type="text"
                className="rounded-md border border-zinc-300 px-3 py-4 w-full placeholder:text-zinc-300 bg-[#1e1e1e]/40"
                placeholder="Email address"
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

      <div className="w-full h-20 border-t-4 border-red-600 rounded-t-full"></div>
    </section>
  );
}
