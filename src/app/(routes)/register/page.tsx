import { Netflix } from '@/icons';
import { FormRegister } from '@/(routes)/register/components';

export default function Register() {
  return (
    <section className="w-full h-screen bg-cover bg-center bg-no-repeat bg-[url('/hero.jpg')] relative">
      <Netflix className="absolute left-36 z-50" />

      <div className="flex flex-col items-center justify-center absolute inset-0">
        <div className="w-[500px] h-[750px] bg-black bg-opacity-90 flex flex-col p-16 z-50">
          <h2 className="text-white font-semibold text-3xl">Register</h2>

          <FormRegister />
        </div>
      </div>

      <div className="absolute bg-black bg-opacity-80 w-full h-full top-0 left-0 z-0"></div>
    </section>
  );
}
