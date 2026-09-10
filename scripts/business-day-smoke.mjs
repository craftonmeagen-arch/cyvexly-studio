import assert from "node:assert/strict";
import { getNextBusinessDay } from "../src/lib/business-days.ts";

const cases = [
  ["ordinary weekday", "2026-09-10T16:00:00Z", "2026-09-11"],
  ["weekend", "2026-09-11T16:00:00Z", "2026-09-14"],
  ["observed Juneteenth", "2027-06-17T16:00:00Z", "2027-06-21"],
  ["Christmas", "2026-12-25T16:00:00Z", "2026-12-28"],
  ["next-year observed holiday", "2021-12-30T16:00:00Z", "2022-01-03"],
  ["spring DST boundary", "2027-03-13T04:30:00Z", "2027-03-15"],
];

for (const [name, input, expected] of cases) {
  assert.equal(getNextBusinessDay(new Date(input)).isoDate, expected, name);
}

console.log(`business-day smoke: ${cases.length} calendar cases passed`);
