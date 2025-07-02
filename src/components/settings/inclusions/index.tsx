import type { Config } from "../../../types/types";

interface settingInclusionsProps {
  config: Config;
  setConfig: React.Dispatch<React.SetStateAction<Config>>;
}

export const SettingsInclusions = ({
  config,
  setConfig,
}: settingInclusionsProps) => {
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setConfig((prevConfig) => ({
      ...prevConfig,
      inclusions: prevConfig.inclusions.map((inclusion) =>
        inclusion.value === value
          ? { ...inclusion, enabled: checked }
          : inclusion
      ),
    }));
  };

  return (
    <div className="flex flex-col gap-4">
      {config.inclusions.map(({ label, value, enabled }) => {
        return (
          <label className="label flex gap-4 text-base-content" key={label}>
            <input
              type="checkbox"
              className="checkbox rounded-none border-2 border-base-content w-5 h-5 checked:shadow-none checked:bg-primary checked:text-base-300 checked:border-0 hover:border-2 hover:border-primary hover:checked:border-0"
              value={value}
              checked={enabled}
              onChange={(e) => handleCheckbox(e)}
            />
            <span>{label}</span>
          </label>
        );
      })}
    </div>
  );
};
