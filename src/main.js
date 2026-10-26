import { CollageComposer, CHUNK_WIDTH } from './composer.js';
import { WallRenderer } from './renderer.js';
import { WallAudio } from './audio.js';

async function init() {
      const canvas = document.getElementById('wall-canvas');
        const promptEl = document.getElementById('intro-prompt');
          const posDisplay = document.getElementById('pos-display');
            const chunkDisplay = document.getElementById('chunk-display');

              let manifest;
                try {
                        const res = await fetch('assets/manifest.json');
                            manifest = await res.json();
                } catch (e) {
                    
                }
}