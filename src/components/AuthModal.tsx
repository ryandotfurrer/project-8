import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';

interface AuthModalProps {
  onSubmit: (email: string, password: string) => Promise<boolean>;
  onCancel: () => void;
  mode: 'login' | 'register';
  error?: string;
}

export default function AuthModal({ onSubmit, onCancel, mode, error }: AuthModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(email, password);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-secondary text-secondary-foreground w-full max-w-md space-y-4 rounded-lg p-8 shadow-xl dark:shadow-none"
      >
        <div className="text-center">
          <h2>{mode === 'login' ? 'Sign In' : 'Create Account'}</h2>
        </div>

        {error && <div className="rounded bg-red-50 p-2 text-sm text-red-600">{error}</div>}

        <div>
          <label htmlFor="email" className="text-muted-foreground text-sm">
            Email
          </label>
          <div className="relative">
            <Mail className="text-muted-foreground absolute left-2 top-1/2 size-5 -translate-y-1/2 transform" />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-muted-foreground dark:shadow-non focus:border-ring focus:ring-ring w-full rounded-md border bg-transparent py-2 pl-10 shadow-sm"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="text-muted-foreground text-sm">
            Password
          </label>
          <div className="relative mt-1">
            <Lock className="text-muted-foreground absolute left-2 top-1/2 size-5 -translate-y-1/2 transform" />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-muted-foreground dark:shadow-non focus:border-ring focus:ring-ring w-full rounded-md border bg-transparent py-2 pl-10 shadow-sm"
              required
            />
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onCancel}
            className="text-muted-foreground hover:text-foreground rounded-md px-4 py-2 text-sm font-bold underline transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md border border-transparent px-4 py-2 text-sm font-bold transition-colors"
          >
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </div>
      </form>
    </div>
  );
}
