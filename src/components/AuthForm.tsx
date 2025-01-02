import React, { useState } from 'react';
import { Lock } from 'lucide-react';

interface AuthFormProps {
  onSubmit: (password: string) => void;
  onCancel: () => void;
  error?: string;
}

export default function AuthForm({ onSubmit, onCancel, error }: AuthFormProps) {
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow max-w-md mx-auto">
      <div className="text-center">
        <Lock className="mx-auto h-12 w-12 text-indigo-600" />
        <h2 className="mt-2 text-xl font-semibold">Admin Authentication</h2>
        <p className="text-sm text-gray-600">Please enter the admin password to continue</p>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded text-sm">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
        >
          Login
        </button>
      </div>
    </form>
  );
}