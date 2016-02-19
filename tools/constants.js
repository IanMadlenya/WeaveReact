import path from 'path';

const repoRoot = path.resolve(__dirname, '../');

const srcRoot = path.join(repoRoot, 'src/');
const distRoot = path.join(repoRoot, 'dist/');
const libRoot = path.join(repoRoot, 'lib/');
const bowerRoot = path.join(repoRoot, 'amd/');
const docsSrcRoot = path.join(repoRoot, 'demo/src/');
const docsAssetsRoot = path.join(repoRoot, 'demo/assets/');

export {
  repoRoot,
  srcRoot,
  distRoot,
  libRoot,
  bowerRoot,
  docsSrcRoot,
  docsAssetsRoot
};
