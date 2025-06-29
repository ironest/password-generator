interface OutputProps {
  password: string;
}

export const OutputPassword = ({ password }: OutputProps) => {
  return (
    <p className="flex justify-between items-center w-full bg-base-200 p-4">
      <span>{password}</span>
      <img src="/icon-copy.svg" alt="" />
    </p>
  );
};
