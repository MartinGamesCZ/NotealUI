#!/usr/bin/env node
import cp from "child_process";
import { NS } from "./namespaces.js";

const subcommand = process.argv[2];

if (subcommand != "add") {
  cp.spawnSync("bun", ["x", "shadcn", ...process.argv.slice(2)], {
    stdio: "inherit",
    cwd: process.cwd(),
    env: {
      ...process.env,
      FORCE_COLOR: "1",
    },
  });

  process.exit(0);
}

const name = process.argv[3];

const [namespace, component] = name.split("/");

if (!namespace || !component) {
  console.log("Invalid component");

  process.exit(1);
}

const ns = NS[namespace];

if (!ns) {
  console.log("Invalid namespace");

  process.exit(1);
}

console.log("Using registry @ " + ns.name);

cp.spawnSync("bun", ["x", "shadcn", "add", ns.url.replace("%s", component)], {
  stdio: "inherit",
  cwd: process.cwd(),
  env: {
    ...process.env,
    FORCE_COLOR: "1",
  },
});
