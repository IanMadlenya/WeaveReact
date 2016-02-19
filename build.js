import 'colors';
import path from 'path';
import exec from '../tools/exec';
import fsp from 'fs-promise';
import {docsSrcRoot, docsAssetsRoot} from '../tools/constants';
import {buildFolder} from '../tools/buildBabel';
import copy from '../tools/fs-utils';
console.log(copy);

const repoRoot = path.resolve(__dirname, '../');
const docsBuilt = path.join(repoRoot, 'demo');
const readmeSrc = path.join(__dirname, 'README.md');
const readmeDest = path.join(docsBuilt, 'README.md');

export default function BuildDocs({dev}) {
   console.log('Building: '.cyan + 'docs'.green );

    return exec.execute(`rimraf ${docsAssetsRoot}`)
        .then(() => fsp.mkdirs(docsAssetsRoot))
        .then(() => Promise.all([
          exec.execute(`webpack --config webpack.config.docs.js --bail`)
        ]))
        .then(() => console.log('Built: '.cyan + 'npm module'.green));
}
