import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface InputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  type?: string;
  regex?: RegExp;
  error: string;
  placeholder: Path<T>;
}

export function Input<T extends FieldValues>({
  register,
  type,
  regex,
  error,
  placeholder,
}: InputProps<T>) {
  return (
    <input
      type={type}
      className="rounded-md border border-zinc-300 px-3 py-4 w-full placeholder:text-zinc-300 bg-[#1e1e1e]/40"
      placeholder={placeholder}
      // {...register(placeholder, {
      //   required: `${placeholder} is required`,
      //   ...(regex && {
      //     pattern: {
      //       value: regex,
      //       message: `${placeholder} is not valid`,
      //     },
      //   }),
      // })}
    />
  );
}
