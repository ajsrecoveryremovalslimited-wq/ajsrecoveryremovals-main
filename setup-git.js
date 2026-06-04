import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const projectPath = 'c:\\Users\\Cody\\Desktop\\ajsrecoveryremovals-main';
const gitUrl = 'https://github.com/ajsrecoveryremovalslimited-wq/ajsrecoveryremovals-main.git';

console.log('Installing isomorphic-git...');
execSync('bun add isomorphic-git', { cwd: projectPath, stdio: 'inherit' });

console.log('Git dependencies installed. You now have two options:');
console.log('\n1. Use this script with GitHub auth token:');
console.log('   Set GITHUB_TOKEN environment variable');
console.log('   Then run: bun push-to-github.js');
console.log('\n2. Install Git manually from: https://git-scm.com/download/win');
console.log('   Then run standard git commands');
console.log('\n3. Open the project in VS Code and use Source Control panel (Ctrl+Shift+G)');
console.log('   VS Code has built-in Git support that may work better');
