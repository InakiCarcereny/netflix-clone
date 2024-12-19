import { H5, QuestionsList } from '@/components';

export function Frequently() {
  return (
    <section className="flex flex-col mx-auto max-w-[1524px] w-full min-h-[300px] gap-4 mt-14">
      <H5 label="Frequently Asked Questions" />

      <QuestionsList />
    </section>
  );
}
