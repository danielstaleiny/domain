export function curry(f, a = []) {
  return (...p) => (o => o.length >= f.length ? f(...o) : curry(f, o))([ ...a, ...p ])
}
