import fs from "fs";
import path from "path";
import https from "https";
import { execSync } from "child_process";

const root = process.cwd();
const html = fs.readFileSync(path.join(root, "lp2-source.html"), "utf8");
const assetBase = "https://www.shopifyecomsolution.com/lp2/assets";

const assetPaths = new Set();
for (const match of html.matchAll(/(?:src|href|url\()=["']?assets\/([^"')]+)/g)) {
  assetPaths.add(match[1]);
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(dest);
    fs.mkdirSync(dir, { recursive: true });
    if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
      resolve();
      return;
    }
    const file = fs.createWriteStream(dest);
    https
      .get(url, (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          file.close();
          fs.unlinkSync(dest);
          download(res.headers.location, dest).then(resolve).catch(reject);
          return;
        }
        if (res.statusCode !== 200) {
          file.close();
          fs.unlinkSync(dest);
          reject(new Error(`${url} -> ${res.statusCode}`));
          return;
        }
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          resolve();
        });
      })
      .on("error", reject);
  });
}

let ok = 0;
let fail = 0;
for (const rel of [...assetPaths].sort()) {
  const dest = path.join(root, "public/assets", rel.replace(/\//g, path.sep));
  const url = `${assetBase}/${rel}`;
  try {
    await download(url, dest);
    ok++;
  } catch {
    fail++;
    console.log("MISSING", rel);
  }
}
console.log(`Downloaded ${ok}, missing ${fail}`);

const sections = [
  { name: "Lp2InlineStyles", start: "<style>", end: "</style>" },
  { name: "Lp2Header", start: "<header>", end: "</header>" },
  { name: "Lp2HeroBanner", start: '<div class="mainBanner2">', end: '<section class="trustedSec">' },
  { name: "Lp2TrustedSection", start: '<section class="trustedSec">', end: '<section class="sec-counter"' },
  { name: "Lp2CounterSection", start: '<section class="sec-counter"', end: '<section class="webdesignSec">' },
  { name: "Lp2WebDesignSection", start: '<section class="webdesignSec">', end: '<section class="processSec"' },
  { name: "Lp2ProcessSection", start: '<section class="processSec"', end: '<section class="packagesSec">' },
  { name: "Lp2PackagesSection", start: '<section class="packagesSec">', end: '<section class="guarantee-sec">' },
  { name: "Lp2GuaranteeSection", start: '<section class="guarantee-sec">', end: '<section class="whychooseSec">' },
  { name: "Lp2WhyChooseSection", start: '<section class="whychooseSec">', end: '<section class="conversationSec"' },
  { name: "Lp2ConversationSection", start: '<section class="conversationSec"', end: '<section class="br-sol custom-web-pkg">' },
  { name: "Lp2CustomWebPkgSection", start: '<section class="br-sol custom-web-pkg">', end: '<section class="userBelowSec"' },
  { name: "Lp2UserBelowSection", start: '<section class="userBelowSec"', end: '<section class="bigBenefit"' },
  { name: "Lp2BigBenefitSection", start: '<section class="bigBenefit"', end: '<section class="ctaSec">' },
  { name: "Lp2CtaSection", start: '<section class="ctaSec">', end: '<section class="trustClientSection"' },
  { name: "Lp2TrustClientSection", start: '<section class="trustClientSection"', end: '<section class="faqSEc"' },
  { name: "Lp2FaqSection", start: '<section class="faqSEc"', end: '<section class="categrSec">' },
  { name: "Lp2CategoriesSection", start: '<section class="categrSec">', end: "<footer>" },
  { name: "Lp2Footer", start: "<footer>", end: '<div class="overlay">' },
  { name: "Lp2Popups", start: '<div class="overlay">', end: '<script src="assets/js/jquery.js">' },
];

function extractChunk(start, end) {
  const startIdx = html.indexOf(start);
  if (startIdx < 0) throw new Error(`Start not found: ${start}`);
  const endIdx = end ? html.indexOf(end, startIdx) : html.length;
  if (endIdx < 0) throw new Error(`End not found: ${end}`);
  return html.slice(startIdx, endIdx).trim();
}

function toComponent(name, chunk) {
  if (name === "Lp2InlineStyles") {
    const css = chunk.replace(/^<style>/, "").replace(/<\/style>$/, "");
    fs.mkdirSync(path.join(root, "app/lp2"), { recursive: true });
    fs.writeFileSync(path.join(root, "app/lp2/lp2-inline.css"), css, "utf8");
    console.log("Wrote app/lp2/lp2-inline.css");
    return;
  }

  let processed = chunk
    .replace(/src="assets\//g, 'src="/assets/')
    .replace(/href="assets\//g, 'href="/assets/')
    .replace(/url\(assets\//g, 'url(/assets/')
    .replace(/href="javascript:;"/g, 'href="#"')
    .replace(/href="index\.html"/g, 'href="/"')
    .replace(/href="tel:\+1 \(646\) 396-3260"/g, 'href="tel:+1 (682) 267-0492"')
    .replace(/\+1 \(646\) 396-3260/g, "+1 (682) 267-0492")
    .replace(/mailto:info@Shopify Page\.com/g, "mailto:support@shopifypage.com")
    .replace(/info@Shopify Page\.com/g, "support@shopifypage.com")
    .replace(
      /https:\/\/www\.Shopify Page\.com\/privacy-policy/g,
      "/privacy-policy",
    )
    .replace(
      /https:\/\/www\.Shopify Page\.com\/terms-and-conditions/g,
      "/terms-and-conditions",
    );

  const tmp = path.join(root, `tmp-${name}.html`);
  fs.writeFileSync(tmp, processed, "utf8");
  const jsx = execSync(`npx --yes htmltojsx "${tmp}"`, { encoding: "utf8" });
  fs.unlinkSync(tmp);

  let fixed = jsx
    .replace(/ alt>/g, ' alt="">')
    .replace(/ alt \/>/g, ' alt="" />')
    .replace(/onclick="setButtonURL\(\);"/g, 'onClick={() => window.setButtonURL?.()}');

  if (fixed.includes("onClick=") || fixed.includes('onclick=')) {
    fixed = `"use client";\n\n${fixed}`;
  }

  const indented = fixed
    .split(/\r?\n/)
    .filter((line) => line.trim())
    .map((line) => `    ${line}`)
    .join("\n");

  const out = `export function ${name}() {\n  return (\n${indented}\n  );\n}\n`;
  fs.writeFileSync(path.join(root, "components/lp2", `${name}.tsx`), out, "utf8");
  console.log("Created", name);
}

fs.mkdirSync(path.join(root, "components/lp2"), { recursive: true });

for (const section of sections) {
  const chunk = extractChunk(section.start, section.end);
  toComponent(section.name, chunk);
}
