interface OutputProps {
  loading: boolean;
  password: string;
}

export const OutputPassword = ({ loading, password }: OutputProps) => {
  return (
    <p className="flex justify-between items-center w-full bg-base-200 p-4 text-xl h-16 ">
      {loading ? (
        <span className="loading loading-dots loading-xl text-gray-700" />
      ) : password ? (
        <span className="text-gray-200">{password}</span>
      ) : (
        <span className="text-gray-700">{"P4$5W0rD!"}</span>
      )}
      <img src="/icon-copy.svg" alt="" />
    </p>
  );
};
