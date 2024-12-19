interface H5Props {
  label: string;
}

export function H5({ label }: H5Props) {
  return (
    <h5 className="text-white font-semibold text-2xl text-start">{label}</h5>
  );
}
