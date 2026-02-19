# Aviator Verifier

> *Understanding provably fair crash games through research and analysis*

**Aviator Verifier** is an open-source implementation of the Aviator crash game algorithm, created through extensive research and mathematical analysis of provably fair gaming systems.

## ✨ What This Project Does

This tool helps you understand and verify the mathematics behind Aviator's "provably fair" system:
- **Verify any Aviator round** with mathematical precision
- **Learn how crash game algorithms work** 
- **Understand provably fair systems** in online gaming
- **Build your own implementations** with confidence

## The Algorithm

Through research and analysis, we've documented Aviator's approach:
- **SHA-512 hashing** for cryptographic randomness
- **52-bit entropy** (13 hexadecimal characters)
- **Mathematical crash formula** with specific constants
- **Deterministic rounding** for consistent results

## Use Cases

- ✅ **Educational** - Learn about provably fair gaming
- ✅ **Verification** - Check any round's fairness
- ✅ **Research** - Study crash game distributions
- ✅ **Development** - Build similar systems


## 📐 The Mathematics

The algorithm follows these steps:
```javascript
const combined = serverSeed + clientSeed1 + clientSeed2 + clientSeed3;
const hash = SHA512(combined);
const hex13 = hash.substring(0, 13);
const decimal = parseInt(hex13, 16);
const normalized = decimal / Math.pow(2, 52);
const rawCrash = (97 / (1 - normalized)) / 100;
const crashPoint = Math.floor(rawCrash * 100) / 100;
```

Clean, transparent, verifiable.

## ⚖️ About Provably Fair

"Provably fair" means anyone can verify game results using publicly available information. This tool makes that verification accessible to everyone.

## ⚠️ Disclaimer

This project is for **educational purposes only**. We have no affiliation with Spribe or Aviator. Always gamble responsibly.

---

*Part of [Side Quest Devs](https://github.com/side-quest-dev) - Educational gaming research* 🔬