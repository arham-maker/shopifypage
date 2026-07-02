import fs from "fs";
import path from "path";

const dir = path.join(process.cwd(), "components/lp2");
for (const file of fs.readdirSync(dir)) {
  if (!file.endsWith(".tsx")) continue;
  const p = path.join(dir, file);
  let s = fs.readFileSync(p, "utf8");
  s = s.replace(
    /export function (\w+)\(\) \{\n  return \(\n    "use client";\n/,
    '"use client";\n\nexport function $1() {\n  return (\n',
  );
  s = s.replace(/ alt width=/g, ' alt="" width=');
  s = s.replace(/ alt>/g, ' alt="">');
  s = s.replace(/ alt \/>/g, ' alt="" />');
  fs.writeFileSync(p, s, "utf8");
  console.log("fixed", file);
}
