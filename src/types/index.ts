export interface FormData {
    serverSeed: string;
    clientSeed1: string;
    clientSeed2: string;
    clientSeed3: string;
}

export interface VerificationResult {
    crashPoint: number;
    combined: string;
    hash: string;
    hex13: string;
    decimal: number;
    normalized: number;
    rawCrash: number;
}

export interface InputFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    placeholder: string;
}

export interface ResultBoxProps {
    result: VerificationResult;
}