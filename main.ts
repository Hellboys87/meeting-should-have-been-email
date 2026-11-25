import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LINE =
  "Twelve people spent an hour listening to their manager read aloud, word for word, the email he had sent that morning — then he forwarded it as the notes.";

if (ENTRY_LINE.length < 1 || ENTRY_LINE.length > 200) {
  throw new Error(`Entry line must be 1-200 characters, got ${ENTRY_LINE.length}`);
}

if (ENTRY_LINE.includes("\n") || ENTRY_LINE.includes("\r")) {
  throw new Error("Entry line must not contain a newline");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_LINE + "\n", "utf-8");
