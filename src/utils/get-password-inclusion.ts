import type { Inclusion } from "../types/types";

export const getPasswordInclusions = (): Inclusion[] => {
  return [
    {
      id: "uppercase",
      label: "Include Uppercase Letters",
      value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      enabled: false,
    },
    {
      id: "lowercase",
      label: "Include Lowercase Letters",
      value: "abcdefghijklmnopqrstuvwxyz",
      enabled: false,
    },
    {
      id: "numbers",
      label: "Include Numbers",
      value: "0123456789",
      enabled: false,
    },
    {
      id: "symbols",
      label: "Include Symbols",
      value: "!@#$%^&*()-_=+[]{}|;:'\",.<>?/~`",
      enabled: false,
    },
  ];
};
