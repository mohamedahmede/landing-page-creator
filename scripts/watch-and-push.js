#!/usr/bin/env node

/**
 * Watch script that builds and pushes to yalc automatically
 * Runs rollup in watch mode and pushes to yalc when build completes
 */

import { spawn } from 'child_process';
import { watchFile } from 'fs';
import { existsSync } from 'fs';

const BUILD_DIR = './dist';
const BUILD_INDICATOR = './dist/index.esm.js'; // Watch this file as indicator

let pushTimeout = null;

// Watch for changes in dist folder (cross-platform)
function watchDist() {
  console.log('👀 Watching dist folder for changes...');
  
  if (!existsSync(BUILD_DIR)) {
    console.log('⚠️  dist folder does not exist yet. Waiting for first build...');
    setTimeout(watchDist, 1000);
    return;
  }

  watchFile(BUILD_INDICATOR, { interval: 1000 }, (curr, prev) => {
    // File was created or modified
    if (curr.mtime > prev.mtime || (prev.mtimeMs === 0 && curr.mtimeMs > 0)) {
      // Debounce: wait a bit before pushing
      if (pushTimeout) {
        clearTimeout(pushTimeout);
      }
      
      pushTimeout = setTimeout(() => {
        pushToYalc();
      }, 1000); // Wait 1 second after last change
    }
  });
}

function pushToYalc() {
  console.log('📦 Pushing changes to yalc...');
  const pushProcess = spawn('yalc', ['push'], {
    stdio: 'inherit',
    shell: true,
  });
  
  pushProcess.on('close', (code) => {
    if (code === 0) {
      console.log('✅ Successfully pushed to yalc!\n');
    } else {
      console.error('❌ Failed to push to yalc\n');
    }
  });
}

// Start rollup watch
console.log('🔨 Starting rollup watch mode...');
console.log('💡 Changes will automatically be pushed to yalc after each build\n');

const rollupProcess = spawn('rollup', ['-c', '-w'], {
  stdio: 'inherit',
  shell: true,
});

rollupProcess.on('close', (code) => {
  console.log(`\nRollup watch exited with code ${code}`);
  process.exit(code || 0);
});

// Start watching dist folder after a short delay (wait for first build)
setTimeout(() => {
  watchDist();
}, 3000);

