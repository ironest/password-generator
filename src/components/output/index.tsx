interface OutputProps {
  loading: boolean;
  password: string;
}

export const OutputPassword = ({ loading, password }: OutputProps) => {
  return (
    <p className="flex justify-between items-center w-full bg-base-200 p-4">
      {loading ? (
        <>
          <span className="loading loading-bars text-primary"></span>
        </>
      ) : (
        <span>{password}</span>
      )}
      <img src="/icon-copy.svg" alt="" />
    </p>
  );
};
