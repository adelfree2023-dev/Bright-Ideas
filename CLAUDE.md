# CLAUDE.md -- Bright Ideas Cross-Agent Interoperability Specification

## Build & Test Commands
- Development server: `npm run dev`
- Production build & static export: `npm run build`
- GitHub Pages deploy: `npm run deploy`
- Linting: `npm run lint`

## Architecture & Code Standards
- Framework: Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- Localization: Bilingual dictionary stored in `src/translations.ts` (Arabic RTL / English LTR)
- Phone & Hotline: Qatar country code `+974 31077466` for direct calling (`tel:+97431077466`) and WhatsApp (`https://wa.me/97431077466`)
- Mandatory Zero Emoji Policy: No emojis across code, UI, comments, or documentation
- Canonical Hub: `<project_root>/AI/` contains authoritative architectural specifications. Never delete `AI/`.
