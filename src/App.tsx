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
      setPassword(getPasswordGenerated(config));
      setEvaluation(getPasswordEvaluation(config));
    }, 1500);
  };

  return (
    <div className="font-['JetBrains_Mono',_monospace] font-bold text-base/5">
      <main className="min-h-screen flex flex-col justify-center items-center gap-4 p-4">
        <h1 className="text-base/5 text-gray-600">Password Generator</h1>
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
