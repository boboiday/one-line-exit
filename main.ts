import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I hereby resign from the overnight security desk — the ghosts in aisle four have unionized, and frankly, their benefits are better.";

if (line.length < 1 || line.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
