import { ArrowRight } from '@/icons';
import { Button } from '@/components';
import { Input } from '@/components';
import { P } from '@/components';

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 mt-14 mb-6">
      <P />
      <div className="flex items-center gap-2">
        <Input />
        <Button
          label="Login"
          className="px-2 py-2 flex items-center justify-center gap-2 h-[60px] w-[300px] text-xl"
          icon={<ArrowRight className="w-8 h-8" />}
        />
      </div>
    </footer>
  );
}
