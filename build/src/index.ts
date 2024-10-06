import { readdirSync, readFileSync, rmSync, writeFileSync } from "fs";
import path from "path";

console.log("Clearing registry...");
const registryFiles = readdirSync(path.join(process.cwd(), "../registry"));

for (const file of registryFiles) {
  rmSync(path.join(process.cwd(), `../registry/${file}`));
}

console.log("Building registry...");

const files = readdirSync(path.join(process.cwd(), "../components/def"));

for (const file of files) {
  const mod = await import(
    path.join(process.cwd(), `../components/def/${file}`)
  );

  const config = {
    name: mod.name,
    type: "registry:ui",
    registryDependencies: [],
    dependencies: mod.dependencies,
    devDependencies: mod.devDependencies,
    tailwind: {
      config: {},
    },
    cssVars: {},
    files: [
      {
        path: mod.name + ".tsx",
        type: "registry:ui",
        content: readFileSync(
          path.join(process.cwd(), `../components/${mod.name}.tsx`),
          "utf-8",
        ),
      },
    ],
  };

  writeFileSync(
    path.join(process.cwd(), `../registry/${mod.name}.json`),
    JSON.stringify(config, null, 2),
  );

  console.log(`Built ${mod.name}`);
}
