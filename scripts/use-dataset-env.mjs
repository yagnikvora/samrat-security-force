import fs from "node:fs";
import path from "node:path";

const dataset = process.argv[2];

if (!dataset || !["local", "production"].includes(dataset)) {
  console.error("Usage: node scripts/use-dataset-env.mjs <local|production>");
  process.exit(1);
}

const root = process.cwd();
const sourceMap = {
  local: ".env.local.dataset-local",
  production: ".env.local.dataset-production",
};

const source = path.join(root, sourceMap[dataset]);
const target = path.join(root, ".env.local");

if (!fs.existsSync(source)) {
  console.error(`Missing source env preset: ${sourceMap[dataset]}`);
  process.exit(1);
}

fs.copyFileSync(source, target);
console.log(`Switched .env.local to dataset preset: ${dataset}`);
console.log(`Source: ${sourceMap[dataset]}`);
