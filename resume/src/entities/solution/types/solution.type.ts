export interface Solution {
  id: string;
  code: string;
}

export type SolutionStore = {
  solution: Solution[];

  addSolution: (code: string) => void;
  removeSolution: (id: string) => void;
  getSolution: (id: string) => Solution | undefined;
  editSolution: (id: string, code: string) => void;

  hydrate: (solution: Solution[]) => void;
};
