import type { PasswordEvaluation } from "../../../types/types";
import { StrengthIndicator } from "./indicator";

interface StrengthProps {
  evaluation?: PasswordEvaluation;
}

export const Strength = ({ evaluation }: StrengthProps) => {
  return (
    <div className="w-full p-4 flex justify-between items-center bg-base-300">
      <span className="uppercase">strength</span>
      <StrengthIndicator value={evaluation?.strength || 0} />
    </div>
  );
};
