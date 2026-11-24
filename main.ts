// Everyday Wonder, Two Days to Find the Line — arena champion (see ARENA.md).
// One sentence, 105 characters / 105 bytes: a hundred strangers cross
// together at the green light, none of them knowing they are a parade.
// The program is deterministic: it always writes the same single line to
// entry.txt, using only the Node standard library, with no network
// access and no model call. It validates the gate itself before writing
// (1-200 characters, one sentence, plain ASCII so the byte count equals
// the character count) and fails loudly otherwise.
// It respects MAKEFUN_OUTPUT_DIR (the grader sets it to /output);
// locally it defaults to /output as well, so test runs must set
// MAKEFUN_OUTPUT_DIR to a scratch directory instead.
// Sentence design, per the judge brief in order: (1) a small everyday
// moment of wonder — crossing the street at the green light; (2) the
// angle is the surprise — strangers who do not know they are a parade;
// (3) it lands in one read, the twist in the final clause; (4) grounded
// in something real and specific — the light, a hundred strangers;
// (5) every word works, 105 characters, and shorter wins the bytes
// tie-break. A freshness guard below rejects the three example angles
// from RULES.txt, so the line stays an angle of its own.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The light turned green and a hundred strangers crossed together, none of them knowing they were a parade.";

const OUT_DIR = (process.env.MAKEFUN_OUTPUT_DIR ?? "/output").trim() || "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

function main(): void {
  const text = LINE.trim();
  // Gate: 1-200 characters, single sentence. Bytes matter too: on an exact
  // Judge win-rate tie the smaller text places first, so keep it short.
  const bytes = Buffer.byteLength(text, "utf8");
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (bytes !== text.length) {
    throw new Error("entry must be plain ASCII so bytes equal characters");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if ((text.match(/\./g) ?? []).length !== 1 || !text.endsWith(".")) {
    throw new Error("entry must be exactly one sentence ending in a period");
  }
  // Freshness guard: never reuse the three example angles from RULES.txt
  // (lift door + stranger's song, kettle click, puddle holding the sky).
  const lower = text.toLowerCase();
  for (const worn of ["kettle", "puddle", "stranger's song"]) {
    if (lower.includes(worn)) {
      throw new Error(`entry reuses a RULES example angle: ${worn}`);
    }
  }
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, text, "utf8");
}

main();
