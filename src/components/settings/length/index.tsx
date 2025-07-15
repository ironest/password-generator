import type { Config } from "../../../types/types";

interface SettingsLengthProps {
  config: Config;
  setConfig: React.Dispatch<React.SetStateAction<Config>>;
}
export const SettingsLength = ({ config, setConfig }: SettingsLengthProps) => {
  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLength = parseInt(e.target.value, 10);
    setConfig((prevConfig) => ({
      ...prevConfig,
      length: newLength,
    }));
  };

  return (
    <div className="flex justify-between items-center flex-wrap gap-2 sm:gap-4">
      <span className="sm:text-lg/6">Character Length</span>
      <span className="text-primary text-2xl/8 sm:text-[32px]/[42px]">
        {config.length}
      </span>
      <input
        type="range"
        min="0"
        max="32"
        value={config.length}
        onChange={(e) => handleLengthChange(e)}
        className="range text-primary [--size-selector:4px] [--range-bg:var(--color-base-300)] [--range-thumb:var(--color-base-300)] [--range-fill:1] active:[--range-thumb:var(--color-base-300)] w-full"
      />
    </div>
  );
};
