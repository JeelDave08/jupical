// Convert keypoints to smooth cubic bezier SVG path
const keypoints = [
  { x: 175, y: 870 }, // 0: start
  { x: 330, y: 765 }, // 1
  { x: 480, y: 640 }, // 2: 2016 Founded
  { x: 440, y: 520 }, // 3
  { x: 330, y: 372 }, // 4: 2018 Pvt. Ltd.
  { x: 410, y: 360 }, // 5
  { x: 492, y: 374 }, // 6
  { x: 545, y: 470 }, // 7
  { x: 575, y: 590 }, // 8
  { x: 685, y: 670 }, // 9: 2020 Global Expansion
  { x: 815, y: 670 }, // 10
  { x: 880, y: 550 }, // 11
  { x: 740, y: 360 }, // 12
  { x: 660, y: 280 }, // 13: 2024 Scaling Worldwide
  { x: 750, y: 260 }, // 14
  { x: 880, y: 176 }, // 15: 2026 Future Growth
  { x: 960, y: 120 }, // 16: 2030 Vision 2030
  { x: 1040, y: 70 },  // 17: Exit
];

// Generate smooth cubic bezier using Catmull-Rom to Cubic Bezier conversion
function catmullRomToCubic(points) {
  let path = `M ${points[0].x} ${points[0].y}`;
  const n = points.length;

  for (let i = 0; i < n - 1; i++) {
    const p0 = i > 0 ? points[i - 1] : points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = i < n - 2 ? points[i + 2] : p2;

    const cp1x = Math.round(p1.x + (p2.x - p0.x) / 6);
    const cp1y = Math.round(p1.y + (p2.y - p0.y) / 6);
    const cp2x = Math.round(p2.x - (p3.x - p1.x) / 6);
    const cp2y = Math.round(p2.y - (p3.y - p1.y) / 6);

    path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  return path;
}

const smoothPath = catmullRomToCubic(keypoints);
console.log('SMOOTH PATH:');
console.log(smoothPath);

// Calculate exact milestone fractions
function cubicBezierPoint(p0, p1, p2, p3, t) {
  const mt = 1 - t;
  return {
    x: mt * mt * mt * p0.x + 3 * mt * mt * t * p1.x + 3 * mt * t * t * p2.x + t * t * t * p3.x,
    y: mt * mt * mt * p0.y + 3 * mt * mt * t * p1.y + 3 * mt * t * t * p2.y + t * t * t * p3.y,
  };
}

// Parse and calculate segment cumulative distances
const regex = /C\s*(-?\d+)\s+(-?\d+),\s*(-?\d+)\s+(-?\d+),\s*(-?\d+)\s+(-?\d+)/g;
let match;
let curr = keypoints[0];
let totalLen = 0;
const segDistances = [0];

while ((match = regex.exec(smoothPath)) !== null) {
  const p0 = curr;
  const p1 = { x: Number(match[1]), y: Number(match[2]) };
  const p2 = { x: Number(match[3]), y: Number(match[4]) };
  const p3 = { x: Number(match[5]), y: Number(match[6]) };
  let segLen = 0;
  let prev = p0;
  for (let s = 1; s <= 20; s++) {
    const pt = cubicBezierPoint(p0, p1, p2, p3, s / 20);
    segLen += Math.hypot(pt.x - prev.x, pt.y - prev.y);
    prev = pt;
  }
  totalLen += segLen;
  segDistances.push(totalLen);
  curr = p3;
}

console.log('\nTotal Length:', Math.round(totalLen));

// Keypoint indices for milestones:
// idx 2: 2016 Founded
// idx 4: 2018 Pvt. Ltd.
// idx 9: 2020 Global Expansion
// idx 13: 2024 Scaling Worldwide
// idx 15: 2026 Future Growth
// idx 16: 2030 Vision 2030
const milestoneIndices = [
  { year: '2016 Founded', idx: 2 },
  { year: '2018 Pvt. Ltd.', idx: 4 },
  { year: '2020 Global Expansion', idx: 9 },
  { year: '2024 Scaling Worldwide', idx: 13 },
  { year: '2026 Future Growth', idx: 15 },
  { year: '2030 Vision 2030', idx: 16 },
];

milestoneIndices.forEach(m => {
  const dist = segDistances[m.idx];
  const frac = (dist / totalLen).toFixed(3);
  console.log(`${m.year}: index ${m.idx}, dist=${Math.round(dist)}, fraction=${frac} (coord: x=${keypoints[m.idx].x}, y=${keypoints[m.idx].y})`);
});
