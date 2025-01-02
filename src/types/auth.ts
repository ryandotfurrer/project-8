export interface AuthState {
  isAuthenticated: boolean;
  password: string;
}

export const ADMIN_PASSWORD = 'admin123'; // In production, this should be in an environment variable