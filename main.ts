import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line = "My smartwatch congratulated me on standing up, the closest my Tuesday has ever come to applause.";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
