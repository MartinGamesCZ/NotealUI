import cors from "@elysiajs/cors";
import Elysia from "elysia";
import { readdirSync, readFileSync } from "fs";
import path from "path";

const app = new Elysia().use(cors());

const repoFiles = readdirSync(path.join(process.cwd(), "../registry"));

for (const file of repoFiles) {
  app.get("/registry/" + file, ({}) => {
    return JSON.parse(
      readFileSync(path.join(process.cwd(), `../registry/${file}`), "utf-8"),
    );
  });
}

app.listen(9696, () => {
  console.log("Repo ready");
});
