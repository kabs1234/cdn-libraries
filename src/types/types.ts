export type Library = {
  name: string;
  latest: string;
};

export type Libraries = {
  results: Library[];
  total: number;
  available: number;
};

export type FullLibraryInfo = {
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
  assets: Asset[];
  versions: string[];
};

export type Author = {
  name: string;
};

export type Autoupdate = {
  source: string;
  target: string;
  fileMap: FileMap[];
  ignoreVersions: string[];
};

export type FileMap = {
  basePath: string;
  files: string[];
};

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
