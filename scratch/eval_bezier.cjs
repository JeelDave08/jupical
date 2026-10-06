// Cubic bezier evaluator
function parseSvgPath(d) {
  const commands = [];
  const regex = /([MC])\s*([^MC]+)/g;
  let match;
  while ((match = regex.exec(d)) !== null) {
    const type = match[1];
    const nums = match[2].trim().split(/[\s,]+/).map(Number);
    commands.push({ type, nums });
  }
  return commands;
}

function cubicBezierPoint(p0, p1, p2, p3, t) {
  const mt = 1 - t;
  const mt2 = mt * mt;
  const mt3 = mt2 * mt;
  const t2 = t * t;
  const t3 = t2 * t;
  return {
    x: mt3 * p0.x + 3 * mt2 * t * p1.x + 3 * mt * t2 * p2.x + t3 * p3.x,
    y: mt3 * p0.y + 3 * mt2 * t * p1.y + 3 * mt * t2 * p2.y + t3 * p3.y,
  };
}

const TRACK_PATH =
  'M 175 870 ' +
  'C 240 820, 310 780, 380 745 ' +
  'C 435 718, 475 670, 490 620 ' +
  'C 503 578, 503 548, 492 518 ' +
  'C 475 488, 448 464, 428 444 ' +
  'C 400 418, 390 402, 402 382 ' +
  'C 418 358, 452 348, 492 354 ' +
  'C 532 360, 562 380, 577 410 ' +
  'C 593 442, 592 472, 582 502 ' +
  'C 567 534, 546 560, 536 595 ' +
  'C 521 636, 522 682, 542 722 ' +
  'C 562 756, 612 776, 662 760 ' +
  'C 712 744, 752 710, 776 670 ' +
  'C 802 630, 812 582, 800 532 ' +
  'C 786 480, 762 444, 750 414 ' +
  'C 740 384, 746 350, 772 324 ' +
  'C 802 294, 846 283, 877 268 ' +
  'C 920 248, 972 228, 1044 212';

const cmds = parseSvgPath(TRACK_PATH);
let current = { x: 0, y: 0 };
const segments = [];
let totalApproxLength = 0;

for (const cmd of cmds) {
  if (cmd.type === 'M') {
    current = { x: cmd.nums[0], y: cmd.nums[1] };
  } else if (cmd.type === 'C') {
    const p0 = current;
    const p1 = { x: cmd.nums[0], y: cmd.nums[1] };
    const p2 = { x: cmd.nums[2], y: cmd.nums[3] };
    const p3 = { x: cmd.nums[4], y: cmd.nums[5] };
    
    // approximate length with 20 steps
    let prev = p0;
    let segLen = 0;
    const steps = 20;
    for (let i = 1; i <= steps; i++) {
      const pt = cubicBezierPoint(p0, p1, p2, p3, i / steps);
      segLen += Math.hypot(pt.x - prev.x, pt.y - prev.y);
      prev = pt;
    }
    segments.push({ p0, p1, p2, p3, length: segLen, startDist: totalApproxLength });
    totalApproxLength += segLen;
    current = p3;
  }
}

function getPointAtDist(dist) {
  const d = Math.max(0, Math.min(totalApproxLength, dist));
  let seg = segments[segments.length - 1];
  for (const s of segments) {
    if (d <= s.startDist + s.length) {
      seg = s;
      break;
    }
  }
  const t = Math.max(0, Math.min(1, (d - seg.startDist) / seg.length));
  return cubicBezierPoint(seg.p0, seg.p1, seg.p2, seg.p3, t);
}

console.log('Total path length:', Math.round(totalApproxLength));

// Let's test target cards:
const targets = [
  { year: '2016 Founded (target: ~483, 649 / track: ~454, 576)', frac: 0.10 },
  { year: '2018 Pvt Ltd (target: ~329, 313 / track: ~330, 372)', frac: 0.25 },
  { year: '2020 Expansion (target: ~692, 550 / track: ~682, 722)', frac: 0.45 },
  { year: '2024 Scaling (target: ~644, 210 / track: ~660, 280)', frac: 0.65 },
  { year: '2026 Growth (target: ~879, 117 / track: ~882, 176)', frac: 0.82 },
  { year: '2030 Vision (target: ~920, 96 / track: ~950, 180)', frac: 0.94 },
];

targets.forEach(t => {
  const pt = getPointAtDist(t.frac * totalApproxLength);
  console.log(`${t.year} -> frac ${t.frac}: x=${Math.round(pt.x)}, y=${Math.round(pt.y)}`);
});
