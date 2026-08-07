import { api, mockResponse } from '@/services/api';
import { ENV } from '@/constants/env';

/** The shareholder the demo is signed in as. */
const DEMO_USER = {
  id: 'SH-4471',
  name: 'Daniela Cruz',
  initials: 'DC',
  email: 'daniela.cruz@example.mx',
  verified: true,
  roles: ['shareholder'],
};

export const authEndpoints = {
  login: (credentials) =>
    ENV.USE_MOCK_API
      ? mockResponse({ user: DEMO_USER, token: 'demo-token' })
      : api.post('auth/login', credentials),

  logout: () => (ENV.USE_MOCK_API ? mockResponse({ ok: true }) : api.post('auth/logout')),

  /** Restores the session on page load from an existing cookie or token. */
  me: () => (ENV.USE_MOCK_API ? mockResponse(DEMO_USER) : api.get('auth/me')),
};

export default authEndpoints;
