// Half-built posts and plan edits, held while someone clicks through the
// plan picker. In memory on purpose: a draft lives for minutes, and the worst
// a restart does is ask them to run the command again.
//
// Each draft belongs to the person and server that opened it; interactions.js
// checks both before using one.
const crypto = require('node:crypto');

const TTL_MS = 15 * 60_000; // refreshed on every click
const MAX_DRAFTS = 5000; // a ceiling, so a flood of abandoned pickers can't grow without bound

function createDrafts({ ttlMs = TTL_MS, now = () => Date.now() } = {}) {
  const drafts = new Map();

  function prune() {
    const t = now();
    for (const [id, d] of drafts) if (d.expires <= t) drafts.delete(id);
  }

  function get(id) {
    const d = drafts.get(id);
    if (!d) return null;
    if (d.expires <= now()) {
      drafts.delete(id);
      return null;
    }
    return d;
  }

  return {
    // Short ids, because they ride in customIds next to a mode key.
    create(data) {
      prune();
      if (drafts.size >= MAX_DRAFTS) drafts.delete(drafts.keys().next().value);
      const id = crypto.randomBytes(6).toString('base64url');
      drafts.set(id, { ...data, expires: now() + ttlMs });
      return id;
    },
    get,
    update(id, patch) {
      const d = get(id);
      if (!d) return null;
      Object.assign(d, patch, { expires: now() + ttlMs });
      return d;
    },
    delete(id) {
      drafts.delete(id);
    },
    size: () => drafts.size,
  };
}

module.exports = { createDrafts, TTL_MS };
