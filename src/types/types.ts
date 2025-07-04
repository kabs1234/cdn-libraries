export type Library = {
  name: string;
  latest: string;
};

export type Libraries = {
  results: Library[];
  total: number;
  available: number;
};

export interface LibraryInfo {
  name: string;
  latest: string;
  sri: string;
  authors: Author[];
  autoupdate: Autoupdate;
  description: string;
  filename: string;
  homepage: string;
  keywords: string[];
  license: string;
  repository: Repository;
  version: string;
  author: string;
}

export interface Author {
  name: string;
  email: string;
}

export interface Autoupdate {
  source: string;
  target: string;
  fileMap: FileMap[];
}

export interface FileMap {
  basePath: string;
  files: string[];
}

export type Repository = {
  type: string;
  url: string;
};

export type Asset = {
  version: string;
  files: string[];
  rawFiles: string[];
  sri: Sri;
};

export type Sri = {
  [key: string]: string;
};
