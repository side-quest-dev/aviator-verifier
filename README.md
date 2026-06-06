# Aviator Verifier

> _Understanding provably-fair crash games through research and analysis_

[![CI](https://github.com/side-quest-dev/aviator-verifier/actions/workflows/ci.yml/badge.svg)](https://github.com/side-quest-dev/aviator-verifier/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-5b8dee.svg)](./LICENSE)
[![Built by InfoBit Systems](https://img.shields.io/badge/built%20by-InfoBit%20Systems-2dd4bf.svg)](https://infobit.systems)

**Aviator Verifier** is an open-source implementation of the Aviator crash-game
algorithm, created through research and mathematical analysis of provably-fair
gaming systems. Paste a round's seeds and recompute the crash multiplier
yourself — fully client-side, no backend, no tracking.

## ✨ What it does

- **Verify any Aviator round** by recomputing the crash multiplier from the seeds
- **See every step** of the calculation (hash → hex → decimal → normalized → crash)
- **Learn how crash-game algorithms work** and how provably-fair systems are verified

## 🚀 Getting started

**Prerequisites:** Node.js `>=20.19` and npm.

```bash
git clone https://github.com/side-quest-dev/aviator-verifier.git
cd aviator-verifier
npm install      # install dependencies
npm run dev      # start the dev server (Vite)
```

Other scripts:

```bash
npm run build    # type-check (tsc -b) and build to dist/
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

## 🧮 The algorithm

The crash multiplier is derived deterministically from the combined seeds:

```javascript
const combined   = serverSeed + clientSeed1 + clientSeed2 + clientSeed3;
const hash       = SHA512(combined);              // cryptographic hash
const hex13      = hash.substring(0, 13);         // first 13 hex chars (52-bit entropy)
const decimal    = parseInt(hex13, 16);
const normalized = decimal / Math.pow(2, 52);     // → [0, 1)
const rawCrash   = (97 / (1 - normalized)) / 100; // 3% house edge
const crashPoint = Math.floor(rawCrash * 100) / 100; // rounded down to 2 decimals
```

Because the same seeds always produce the same result, anyone can independently
reproduce — and therefore verify — a round.

## 🗂️ Project structure

```
src/
├── components/      # Header, InputField, ResultBox, FormulaBox
├── styles/          # SCSS partials + design tokens (_variables.scss)
├── utils/
│   └── verifier.ts  # core verifyAviatorRound() logic
├── types/           # shared TypeScript interfaces
└── App.tsx          # app shell + state
```

**Tech stack:** React 19 · TypeScript · Vite · SCSS · crypto-js

## ⚖️ About provably fair

"Provably fair" means anyone can verify game results using publicly available
information. This tool makes that verification accessible to everyone.

## ⚠️ Disclaimer

This project is for **educational purposes only**. It has no affiliation with
Spribe or Aviator. Please gamble responsibly.

## 📄 License

Released under the [MIT License](./LICENSE).

---

Built by [**InfoBit Systems**](https://infobit.systems) · published via the
[Side Quest Devs](https://github.com/side-quest-dev) GitHub org 🔬
