// Audio controller: loads and loops music from assets/music.wav, with subtle paper friction on movement
export class WallAudio {
      constructor(audioSrc = 'assets/music.wav') {
            this.audioSrc = audioSrc;
                this.musicElement = null;
                    this.ctx = null;
                        this.isInitialized = false;
                            this.isMuted = false;

                                // Web Audio node chain
                                    this.musicGain = null;
                                        this.frictionGain = null;
                                            this.frictionFilter = null;
                                                this.masterGain = null;
      }
      
      }
}