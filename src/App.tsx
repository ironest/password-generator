import "./App.css";
import { Settings } from "./components/settings";
import { OutputPassword } from "./components/output";
import { GenerateCta } from "./components/settings/generate-cta";
import { useState } from "react";
import type { Config, PasswordEvaluation } from "./types/types";
import { getPasswordInclusions } from "./utils/get-password-inclusion";
import { getPasswordGenerated } from "./utils/get-password-generated";
import { Strength } from "./components/settings/strength";
import { SettingsLength } from "./components/settings/length";
import { SettingsInclusions } from "./components/settings/inclusions";
import { getPasswordEvaluation } from "./utils/get-password-evaluation";

function App() {
  const [config, setConfig] = useState<Config>({
    length: 0,
    inclusions: getPasswordInclusions(),
  });

  const [password, setPassword] = useState<string>("");

  const [evaluation, setEvaluation] = useState<
    PasswordEvaluation | undefined
  >();

  const [loading, setLoading] = useState<boolean>(false);

  const handleGeneratePassword = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const newPassword = getPasswordGenerated(config);
      if (newPassword.length === 0) {
        setPassword("<Empty password>");
      } else {
        setPassword(newPassword);
      }

      setEvaluation(getPasswordEvaluation(config));
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <main className="w-full sm:w-135 flex flex-col items-center gap-4 sm:gap-6 md:mb-8 p-4">
        <h1 className="text-base/5 text-gray-600 sm:text-2xl/8 sm:mb-2">
          Password Generators
        </h1>
        <OutputPassword loading={loading} password={password} />
        <Settings>
          <SettingsLength config={config} setConfig={setConfig} />
          <SettingsInclusions config={config} setConfig={setConfig} />
          <Strength evaluation={evaluation} />
          <GenerateCta loading={loading} onClick={handleGeneratePassword} />
        </Settings>
      </main>
    </div>
  );
}

export default App;
