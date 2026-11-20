const test = require('node:test');
const assert = require('node:assert/strict');
const { createDrafts } = require('../src/drafts');

test('drafts expire, and every use pushes the expiry back', () => {
  let clock = 0;
  const drafts = createDrafts({ ttlMs: 100, now: () => clock });
  const id = drafts.create({ segments: [] });
  assert.match(id, /^[A-Za-z0-9_-]{8}$/); // no ':' to break a customId
  clock = 90;
  assert.ok(drafts.update(id, { segments: [{ mode: 'normal', gates: [1] }] }));
  clock = 180; // past the first expiry, inside the second
  assert.deepEqual(drafts.get(id).segments, [{ mode: 'normal', gates: [1] }]);
  clock = 300;
  assert.equal(drafts.get(id), null);
  assert.equal(drafts.update(id, {}), null);
});

test('deleted drafts are gone, and old ones are pruned on create', () => {
  let clock = 0;
  const drafts = createDrafts({ ttlMs: 100, now: () => clock });
  const a = drafts.create({});
  drafts.delete(a);
  assert.equal(drafts.get(a), null);
  drafts.create({});
  clock = 500;
  drafts.create({});
  assert.equal(drafts.size(), 1);
});
