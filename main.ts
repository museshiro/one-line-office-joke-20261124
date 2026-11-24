import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Nine people, 47 minutes, zero decisions — the meeting's only output was a calendar invite to do it all again next Tuesday.";

if (LINE.length > 200) {
  throw new Error(`line is ${LINE.length} characters, max 200`);
}
if (LINE.includes("\n")) {
  throw new Error("line must not contain a newline");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
