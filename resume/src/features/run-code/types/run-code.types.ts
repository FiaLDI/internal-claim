export type TestCase = {
  input:string
  expected:string
}

export interface ResultType {
    input: string;
    expected: string;
    output: string;
    pass: boolean;
}