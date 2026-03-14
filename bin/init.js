#!/usr/bin/env node

import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const kitRoot = path.resolve(__dirname, "..")

const filesToCopy = [
    ".kilo",
    ".kilocode",
    "scripts",
    "AGENTS.md",
    "GEMINI.md",
    "kilo.json"
]

const protectedDirs = [".kilo", ".kilocode"]

function copy(src, dest) {
    if (!fs.existsSync(src)) return

    const stat = fs.statSync(src)

    if (stat.isDirectory()) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true })
        }

        for (const file of fs.readdirSync(src)) {
            copy(path.join(src, file), path.join(dest, file))
        }
    } else {
        fs.copyFileSync(src, dest)
    }
}

function directoryExists(dir) {
    return fs.existsSync(dir) && fs.statSync(dir).isDirectory()
}

const args = process.argv.slice(2)
const forceFlag = args.includes("--force")

const projectDir = process.cwd()

console.log("Installing Kilo Code Kit...\n")

let hasExistingFolders = false

for (const dir of protectedDirs) {
    const destPath = path.join(projectDir, dir)
    if (directoryExists(destPath)) {
        hasExistingFolders = true
        console.log(`⚠ ${dir} already exists in the target project`)
    }
}

if (hasExistingFolders && !forceFlag) {
    console.log("\n⚠ Kilo Code configuration already exists")
    console.log("Use --force to overwrite existing files\n")
    process.exit(0)
}

const copyMessages = {
    ".kilo": "Copying agents...",
    ".kilocode": "Copying skills...",
    "scripts": "Copying scripts...",
    "AGENTS.md": "Copying AGENTS.md...",
    "GEMINI.md": "Copying GEMINI.md...",
    "kilo.json": "Copying kilo.json..."
}

for (const file of filesToCopy) {
    const src = path.join(kitRoot, file)
    const dest = path.join(projectDir, file)

    if (copyMessages[file]) {
        console.log(copyMessages[file])
    }

    copy(src, dest)
}

console.log("\nInstallation complete.")
