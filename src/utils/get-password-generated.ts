import type { Config } from "../types/types";

export const getPasswordGenerated = (config: Config): string => {
  const dictionary = config.inclusions
    .filter(({ enabled }) => enabled)
    .map(({ value }) => value)
    .join("");

  let password = "";

  for (let i = 0; i < config.length; i++) {
    const randomChar = dictionary.charAt(
      Math.floor(Math.random() * dictionary.length)
    );

    password = `${password}${randomChar}`;
  }

  return password;
};
