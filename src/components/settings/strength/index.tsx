import type { PasswordEvaluation } from "../../../types/types";
import { StrengthIndicator } from "./indicator";

interface StrengthProps {
  evaluation?: PasswordEvaluation;
}

export const Strength = ({ evaluation }: StrengthProps) => {
  return (
    <div className="w-full p-4 flex justify-between items-center bg-base-300 sm:px-8 sm:py-6">
      <span className="uppercase text-gray-600">strength</span>
      <StrengthIndicator value={evaluation?.strength || 0} />
    </div>
  );
};
