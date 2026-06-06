import CryptoJS from 'crypto-js';
import type { VerificationResult } from '../types';

export function verifyAviatorRound(
    serverSeed: string,
    clientSeed1: string,
    clientSeed2: string,
    clientSeed3: string,
): VerificationResult {

    const combined = `${serverSeed.trim()}${clientSeed1.trim()}${clientSeed2.trim()}${clientSeed3.trim()}`;

    const hash = CryptoJS.SHA512(combined).toString();

    const hex13 = hash.substring(0, 13);

    const decimal = parseInt(hex13, 16);

    const normalized = decimal / 0x10000000000000;

    const rawCrash = (97 / (1 - normalized)) / 100;

    let crashPoint: number;
    
    if (normalized < 0.01) {
        crashPoint = 1.00;
    } else {
        crashPoint = Math.floor(rawCrash * 100) / 100;
    }

    return {
    crashPoint,
    combined,
    hash,
    hex13,
    decimal,
    normalized,
    rawCrash,
  };
}