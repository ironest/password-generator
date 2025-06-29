interface GenerateCtaProps {
  onClick?: () => void;
}

export const GenerateCta = ({ onClick }: GenerateCtaProps) => {
  return (
    <button
      className="btn gap-2 btn-primary rounded-none w-full text-base-300 uppercase shadow-none hover:bg-transparent hover:text-primary hover:border-2 hover:border-primary"
      onClick={onClick}
    >
      <span>Generate</span>
      <img src="/icon-arrow-right.svg" alt="" />
    </button>
  );
};
