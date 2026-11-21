// Fails the build when a translation file drifts from the English source:
// a missing or extra key, a list of a different length, or a {{placeholder}}
// that does not match. Run automatically before every build.
import en from '../src/locales/en.js'

const LANGS = ['zh', 'ja', 'ko', 'es', 'fr']
// Word order differs between languages here, so the placeholder may sit in
// either of the pair.
const FREE_PLACEHOLDERS = new Set(['.area.title', '.area.accent', '.about.title', '.about.accent'])

const placeholders = (v) => (String(v).match(/{{\w+}}/g) || []).sort().join(',')

function compare(a, b, path, problems) {
  if (a === null || a === undefined) return
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) return problems.push(`list length differs at ${path}`)
    a.forEach((item, i) => compare(item, b[i], `${path}[${i}]`, problems))
  } else if (typeof a === 'object') {
    if (!b || typeof b !== 'object') return problems.push(`missing section ${path}`)
    for (const key of Object.keys(a)) {
      if (a[key] === null || a[key] === undefined) continue
      if (!(key in b)) problems.push(`missing key ${path}.${key}`)
      else compare(a[key], b[key], `${path}.${key}`, problems)
    }
    for (const key of Object.keys(b)) if (!(key in a)) problems.push(`extra key ${path}.${key}`)
  } else {
    if (typeof b !== 'string') return problems.push(`not a string at ${path}`)
    if (a !== '' && b.trim() === '') problems.push(`empty translation at ${path}`)
    if (!FREE_PLACEHOLDERS.has(path) && placeholders(a) !== placeholders(b)) {
      problems.push(`placeholders differ at ${path}`)
    }
  }
}

let failed = false
for (const lng of LANGS) {
  const mod = await import(`../src/locales/${lng}.js`)
  const problems = []
  compare(en, mod.default, '', problems)
  if (problems.length) {
    failed = true
    console.error(`locales: ${lng} has ${problems.length} problem(s)`)
    problems.slice(0, 20).forEach((p) => console.error(`  - ${p}`))
  }
}
if (failed) process.exit(1)
console.log(`locales: OK (${LANGS.length} translations match en.js)`)
