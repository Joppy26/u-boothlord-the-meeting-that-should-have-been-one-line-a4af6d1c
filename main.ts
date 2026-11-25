import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "We all agree, the decision was in last Tuesday's email, so let's do it and give everyone their hour back.\n", "utf8");
