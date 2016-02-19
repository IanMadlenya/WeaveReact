import 'colors';
import bower from './amd/build';
import lib from './lib/build';
import dist from './dist/build';
import copy from './fs-utils';
import {distRoot, bowerRoot} from './constants';
import exec from './exec';

function docs({verbose}) {
    console.log('Building: '.cyan + 'docs'.green);
    const verboseOption = verbose ? '--verbose' : '';
    return exec.execute(`npm run docs-build -- ${verboseOption}`)
        .then(() => console.log('Built: '.cyan + 'docs'.green));
}

export default function Build(options) {
    return Promise.all([
    lib(),
    bower(),
    dist(),
    docs(options)
  ]).then(() => copy(distRoot, bowerRoot));
}
