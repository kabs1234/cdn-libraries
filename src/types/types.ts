export type Library = {
  name: string;
  latest: string;
};

export type Libraries = {
  results: Library[];
  total: number;
  available: number;
};
