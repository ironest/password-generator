interface SettingsProps {
  children?: React.ReactNode;
}

export const Settings = ({ children }: SettingsProps) => {
  return (
    <div className="w-full flex flex-col gap-8 bg-base-200 p-4 sm:pt-6 sm:pb-16 sm:px-8">
      {children}
    </div>
  );
};
