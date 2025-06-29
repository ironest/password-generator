interface StrengthIndicatorProps {
  value: number;
}

const MAX_VALUE = 4;

export const StrengthIndicator = ({ value }: StrengthIndicatorProps) => {
  return (
    <div className="flex gap-2">
      {new Array(MAX_VALUE).fill(0).map((_, index) => (
        <div
          key={index}
          className={
            "border-2 border-primary h-[28px] w-[10px]" +
            `${index < value ? " bg-primary" : ""}`
          }
        ></div>
      ))}
    </div>
  );
};
