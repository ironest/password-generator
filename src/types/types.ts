export interface Inclusion {
  id: string;
  label: string;
  value: string;
  enabled: boolean;
}
export interface Config {
  length: number;
  inclusions: Inclusion[];
}

export interface PasswordEvaluation {
  strength: number;
  description: string;
}
