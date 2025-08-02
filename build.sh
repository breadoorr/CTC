#!/bin/bash
set -e

# Print Node.js and npm versions
echo "Node.js version: $(node -v)"
echo "npm version: $(npm -v)"

# Clean build directories
echo "Cleaning build directories..."
rm -rf .svelte-kit
rm -rf build
rm -rf node_modules/.vite

# Install dependencies
echo "Installing dependencies..."
npm ci

# Build the application
echo "Building the application..."
npm run build

echo "Build completed successfully!"