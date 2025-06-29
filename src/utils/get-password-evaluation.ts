import type { Config, PasswordEvaluation } from "../types/types";

export const getPasswordEvaluation = (config: Config): PasswordEvaluation => {
  // Calculate the total size of the character set based on included types
  const charsetSize = config.inclusions
    .filter((inclusion) => inclusion.enabled)
    .reduce((acc, inclusion) => acc + inclusion.value.length, 0);

  // Calculate the total number of possible combinations
  const totalCombinations = BigInt(charsetSize) ** BigInt(config.length);

  // Define the number of guesses per second (e.g., 1 billion guesses per second)
  const guessesPerSecond = 1_000_000_000n;

  // Estimate the time to crack in seconds
  const timeToCrackSeconds = totalCombinations / guessesPerSecond;

  const description = convertSecondsToReadableTime(timeToCrackSeconds);
  let strength = 0;
  // Determine strength score based on time thresholds
  if (timeToCrackSeconds < 60n) {
    strength = 0; // Less than a minute
  } else if (timeToCrackSeconds < 3600n) {
    strength = 1; // Less than an hour
  } else if (timeToCrackSeconds < 86400n) {
    strength = 2; // Less than a day
  } else if (timeToCrackSeconds < 31536000n) {
    strength = 3; // Less than a year
  } else {
    strength = 4; // A year or more
  }
  return { strength, description };
};

// Helper function to convert seconds into a human-readable time format
export const convertSecondsToReadableTime = (seconds: bigint): string => {
  const units = [
    { label: "year", seconds: 31536000n },
    { label: "day", seconds: 86400n },
    { label: "hour", seconds: 3600n },
    { label: "minute", seconds: 60n },
    { label: "second", seconds: 1n },
  ];

  let remaining = seconds;
  const result = [];

  if (remaining <= 0n) {
    return "0 seconds";
  }

  for (const unit of units) {
    const count = remaining / unit.seconds;
    if (count > 0) {
      result.push(`${count} ${unit.label}${count > 1n ? "s" : ""}`);
      remaining %= unit.seconds;
    }
  }

  return result.join(", ");
};
