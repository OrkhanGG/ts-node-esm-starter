import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import archiver from "archiver";

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory to clean and zip
const distDir = path.resolve(__dirname, "dist");

// List of files/folders to remove
const filesToRemove = ["types", "src"];

// Function to clean up unnecessary files/folders
const cleanDist = () => {
    filesToRemove.forEach((item) => {
        const itemPath = path.join(distDir, item);
        if (fs.existsSync(itemPath)) {
            fs.rmSync(itemPath, { recursive: true, force: true });
            console.log(`Removed: ${itemPath}`);
        }
    });
};

// Function to create a zip file of the dist directory
const zipDist = () => {
    const output = fs.createWriteStream(path.join(distDir, "lambda.zip"));
    const archive = archiver("zip", { zlib: { level: 9 } });

    output.on("close", () => {
        console.log(`Created zip file: ${path.join(distDir, "lambda.zip")} (${archive.pointer()} bytes)`);
    });

    archive.on("error", (err) => {
        throw err;
    });

    archive.pipe(output);

    // Add the entire dist directory contents to the zip
    archive.directory(distDir, false);

    archive.finalize();
};

// Run the cleanup and zipping process
cleanDist();
zipDist();
