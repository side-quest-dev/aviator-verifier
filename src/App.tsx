import { useState } from 'react'
import type { FormData, VerificationResult } from './types';
import Header from './components/Header';
import InputField from './components/InputField';
import ResultBox from './components/ResultBox';
import FormulaBox from './components/FormulaBox';
import './styles/main.scss';
import { verifyAviatorRound } from './utils/verifier';

function App() {
  const [formData, setFormData] = useState<FormData>({
    serverSeed: '',
    clientSeed1: '',
    clientSeed2: '',
    clientSeed3: ''
  });

  const [result, setResult] = useState<VerificationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleVerify = (): void => {
    const { serverSeed, clientSeed1, clientSeed2, clientSeed3 } = formData;

    if (!serverSeed.trim() || !clientSeed1.trim() || !clientSeed2.trim() || !clientSeed3.trim()) {
      setError('Please fill in all fields.');
      setResult(null);
      return;
    }

    setError(null);

    const verificationResult = verifyAviatorRound(
      serverSeed,
      clientSeed1,
      clientSeed2,
      clientSeed3
    )

    setResult(verificationResult);
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleVerify();
    }
  }

  return (
    <div className="app">
      <div className="container">
        <Header />

        <div className="content">
          <div className="input-section">
            <InputField 
              label="🔐 Server Seed"
              value={formData.serverSeed}
              onChange={(value) => handleInputChange('serverSeed', value)}
              onKeyDown={handleKeyPress}
              placeholder="Enter Server Seed"
            />

            <InputField
            label='👤 Client Seed 1'
            value={formData.clientSeed1}
            onChange={(value) => handleInputChange('clientSeed1', value)}
            onKeyDown={handleKeyPress}
            placeholder='Enter Client Seed 1'
            />

            <InputField
            label='👤 Client Seed 2'
            value={formData.clientSeed2}
            onChange={(value) => handleInputChange('clientSeed2', value)}
            onKeyDown={handleKeyPress}
            placeholder='Enter Client Seed 2'
            />

            <InputField
            label='👤 Client Seed 3'
            value={formData.clientSeed3}
            onChange={(value) => handleInputChange('clientSeed3', value)}
            onKeyDown={handleKeyPress}
            placeholder='Enter Client Seed 3'
            />

            <button className='btn-verify' onClick={handleVerify}>
              🔍 Verify Round
            </button>

            {error && <p className="form-error" role="alert">{error}</p>}

            {result && <ResultBox result={result} /> }

            <FormulaBox />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
