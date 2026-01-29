#!/usr/bin/env node

/**
 * Vercel Readiness & Prep Script
 * use: node prepare_vercel.js [path_name]
 */

const fs = require('fs');
const path = require('path');

const pathName = process.argv[2];

if (!pathName) {
    console.error('❌ Error: Please provide a path name (e.g., youtube-transcriber)');
    process.exit(1);
}

const cleanPath = pathName.startsWith('/') ? pathName : `/${pathName}`;
const projectRoot = process.cwd();

console.log(`🚀 Preparing project for Vercel subdirectory deployment at: imagine-if.ai${cleanPath}`);

// 1. Check for next.config.ts or next.config.js
const nextConfigPath = fs.existsSync(path.join(projectRoot, 'next.config.ts'))
    ? 'next.config.ts'
    : 'next.config.js';

if (fs.existsSync(path.join(projectRoot, nextConfigPath))) {
    console.log(`✅ Found ${nextConfigPath}`);
    let content = fs.readFileSync(path.join(projectRoot, nextConfigPath), 'utf8');

    if (content.includes('basePath')) {
        console.log('⚠️ Warning: basePath already exists in config. Please verify manually.');
    } else {
        // Inject basePath
        console.log(`✍️  Injecting basePath: '${cleanPath}' into ${nextConfigPath}...`);
        content = content.replace(
            /const nextConfig: NextConfig = \{/,
            `const nextConfig: NextConfig = {\n  basePath: '${cleanPath}',`
        ).replace(
            /module.exports = \{/,
            `module.exports = {\n  basePath: '${cleanPath}',`
        );
        fs.writeFileSync(path.join(projectRoot, nextConfigPath), content);
    }
} else {
    console.error(`❌ Error: No next.config file found at ${projectRoot}`);
}

// 2. Output the snippet for the root vercel.json
console.log('\n--- 📋 ROOT PROJECT CONFIGURATION ---');
console.log('Add the following to your MAIN imagine-if.ai/landing/vercel.json:');
console.log(JSON.stringify({
    source: `${cleanPath}/:path*`,
    destination: `https://[YOUR-NEW-PROJECT].vercel.app${cleanPath}/:path*`
}, null, 2));

console.log('\n✅ Readiness check complete. Remember to verify images and links use the relative path or the new basePath.');
