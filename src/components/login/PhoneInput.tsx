// components/PhoneInput.tsx
'use client'
import { useState } from 'react';
import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';

const phoneUtil = PhoneNumberUtil.getInstance();

const countries = [
  { name: 'Malawi', code: 'MW' },
  { name: 'Kenya', code: 'KE' },
  { name: 'South Africa', code: 'ZA' },
  // Add more as needed
];

export default function PhoneInput() {
  const [countryCode, setCountryCode] = useState('MW');
  const [phone, setPhone] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [formatted, setFormatted] = useState('');

  const handleValidate = () => {
    try {
      const parsed = phoneUtil.parse(phone, countryCode);
      const valid = phoneUtil.isValidNumber(parsed);
      const formattedNumber = phoneUtil.format(parsed, PhoneNumberFormat.INTERNATIONAL);
      setIsValid(valid);
      setFormatted(formattedNumber);
    } catch (error) {
      setIsValid(false);
      setFormatted('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <label className="block">
        Country:
        <select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className="block w-full mt-1 border rounded p-2"
        >
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        Phone Number:
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="block w-full mt-1 border rounded p-2"
          placeholder="e.g. 0881234567"
        />
      </label>

      <button
        onClick={handleValidate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Validate
      </button>

      {isValid !== null && (
        <div className={`mt-2 font-semibold ${isValid ? 'text-green-600' : 'text-red-600'}`}>
          {isValid ? `✅ Valid: ${formatted}` : '❌ Invalid number format'}
        </div>
      )}
    </div>
  );
}
