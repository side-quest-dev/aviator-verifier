import React from "react";
import type { ResultBoxProps } from "../types";

const ResultBox: React.FC<ResultBoxProps> = ({result}) => {
    return (
        <div className="result-box">
            <h3>Round verification</h3>

            <div className="crash-result">
                {result.crashPoint.toFixed(2)}x
            </div>

            <div className="details">
                <div className="details-title">Calculation details</div>

                <div className="details-content">
                    <div>
                        <strong>1. combined</strong> {result.combined.substring(0, 60)}
                        {result.combined.length > 60 ? '...' : ''}
                    </div>
                    <div><strong>2. SHA512:</strong> {result.hash}</div>
                    <div><strong>3. First 13 hex:</strong> {result.hex13}</div>
                    <div><strong>4. Decimal:</strong> {result.decimal}</div>
                    <div><strong>5. Normalized:</strong> {result.normalized.toFixed(10)}</div>
                    <div><strong>6. Raw crash:</strong> {result.rawCrash.toFixed(6)}</div>
                    <div><strong>7. Final Crash:</strong> {' '}
                        <span className="final-crash-value">
                            {result.crashPoint.toFixed(2)}x
                        </span>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ResultBox;