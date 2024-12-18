interface ButtonProps {
  label: string;
  className?: string;
  icon?: JSX.Element;
}

export function Button({ label, className, icon }: ButtonProps) {
  return (
    <button
      className={`bg-red-500 text-white font-semibold rounded-md ${className}`}
    >
      {label}

      {icon}
    </button>
  );
}
