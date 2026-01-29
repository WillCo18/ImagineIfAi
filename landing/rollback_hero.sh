#!/bin/bash
# Rollback Hero Section to previous centered layout

echo "Rolling back Hero Section..."

# Restore files
cp components/HeroSection.backup.tsx components/HeroSection.tsx
cp components/HeroSection.backup.module.css components/HeroSection.module.css

echo "✅ Rollback complete. The centered layout has been restored."
