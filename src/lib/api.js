const API_BASE_URL = `${(import.meta.env.VITE_API_URL || 'http://localhost:5000').replace(/\/$/, '')}/api`;

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok || payload.success === false) {
    throw new Error(payload.message || 'Request failed');
  }

  return payload.data;
}

export const api = {
  getPublicProfile: () => request('/public/profile'),
  updatePublicProfile: (id, profile) => request(`/public/profile/${id}`, { method: 'PATCH', body: JSON.stringify(profile) }),
  getHeroCommunity: () => request('/public/hero-community'),
};
