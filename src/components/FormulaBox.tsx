import React from 'react';

const FormulaBox: React.FC = () => {
    return (
        <div className="formula-box">
            <h4>🔑 Aviator calculation formula</h4>
            <div className="formula-steps">
                <code>1. Combined = ServerSeed + ClientSeed1 + ClientSeed2 + ClientSeed3</code>
                <code>2. Hash = SHA512(Combined)</code>
                <code>3. Hex13 = First 13 hex characters</code>
                <code>4. Decimal = parseInt(Hex13, 16)</code>
                <code>5. Normalized = Decimal / 0x10000000000000</code>
                <code>6. RawCrash = (97 / (1 - Normalized)) / 100</code>
                <code>7. FinalCrash = RawCrash.toFixed(2)</code>
            </div>
            <p className="formula-note">
                <strong>The round number is not part of the hash. The result is rounded down to two decimal places.</strong>
            </p>
        </div>
    )
}

export default FormulaBox