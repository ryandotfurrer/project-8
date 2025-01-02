import { useState, useEffect } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import { signIn, signUp } from '../lib/auth';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { user: authUser } = await signIn(email, password);
      setUser(authUser);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const { user: authUser } = await signUp(email, password);
      setUser(authUser);
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };

  const logout = async () => {
    try {
      // First set user to null to update UI immediately
      setUser(null);
      // Then perform the logout
      await supabase.auth.signOut();
    } catch (error) {
      // Even if logout fails, we keep the user logged out locally
      console.error('Logout error:', error);
    }
  };

  return {
    user,
    loading,
    login,
    logout,
    register,
    isAuthenticated: !!user
  };
}