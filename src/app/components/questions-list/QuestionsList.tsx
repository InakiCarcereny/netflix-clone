'use client';

import { Cross, Plus } from '@/icons';
import { QUESTIONS } from '@/lib';
import { useState } from 'react';

export function QuestionsList(): JSX.Element {
  const [open, setOpen] = useState<boolean | string>(false);

  const handleOpen = (question: string): void => {
    setOpen((prevState) => (prevState === question ? false : question));
  };

  return (
    <ul className="flex flex-col gap-2">
      {QUESTIONS.map((question) => (
        <>
          <li
            key={question.question}
            onClick={() => handleOpen(question.question)}
            className="bg-[#242323] px-4 py-6 hover:bg-[#292828] duration-150 cursor-pointer"
          >
            <h6 className="flex items-center justify-between w-full text-white font-semibold text-2xl">
              {question.question}

              <button>
                {open === question.question ? (
                  <Cross className="w-12 h-12" />
                ) : (
                  <Plus className="w-12 h-12" />
                )}
              </button>
            </h6>
          </li>

          {open === question.question && (
            <div className="bg-[#242323] px-4 py-6">
              <p className="text-white font-medium text-2xl">
                {question.answer}
              </p>
            </div>
          )}
        </>
      ))}
    </ul>
  );
}
