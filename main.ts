// The 3AM Fridge Text — u-deysumbrella-the-3am-fridge-text-4c3e721d
// Writes the one line a smart fridge would text its owner at 3am
// to /output/entry.txt (1-140 chars, single line).
import { mkdirSync, writeFileSync } from "node:fs";

// The line: a fridge that watched its owner break their own rule.
// Concrete detail (the cake labelled "DO NOT EAT" at 2am) + twist
// (ate it standing up, in the dark, over the sink) + fridge as witness.
// Fresh angle: no milk, no ice, no door left open.
const TEXT =
  "It's 3am. The cake you labelled 'DO NOT EAT' at 2am is gone. " +
  "You ate it standing up, in the dark, over the sink. I saw everything.";

if (TEXT.length < 1 || TEXT.length > 140) {
  throw new Error(`entry must be 1-140 chars, got ${TEXT.length}`);
}
if (TEXT.trim() !== TEXT || TEXT.includes("\n")) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
console.log(`Wrote ${TEXT.length} chars to ${outDir}/entry.txt`);
