export function getPathname() {
  return window.location.pathname || '/'
}

export function navigate(path) {
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (normalized === getPathname()) return
  window.history.pushState({}, '', normalized)
  window.dispatchEvent(new PopStateEvent('popstate'))
}
