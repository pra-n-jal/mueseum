// Tiny fast PRNG (mulberry32). Need deterministic randoms so visiting the same chunk yields the exact same layout.
export class PRNG {
      constructor(seed = 123456789) {
            this.s = seed >>> 0;
      }

        next() {
                let t = (this.s += 0x6d2b79f5);
                    t = Math.imul(t ^ (t >>> 15), t | 1);
                        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
                            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        }

          range(min, max) {
                return min + this.next() * (max - min);
                
      }
}