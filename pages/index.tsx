
import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value: string) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      try {
        const evalResult = eval(input);
        setResult(evalResult.toString());
      } catch {
        setResult('Eroare');
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
    ['C'],
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80">
        <div className="bg-gray-100 p-4 rounded text-right text-2xl font-mono mb-4 h-16">
          {result || input || '0'}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {buttons.flat().map((btn, idx) => (
            <button
              key={idx}
              className={`text-lg py-2 rounded ${
                btn === 'C'
                  ? 'col-span-4 bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-indigo-500 hover:bg-indigo-600 text-white'
              }`}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
