// Calculate exact points along path
const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><svg xmlns="http://www.w3.org/2000/svg"><path id="p"/></svg>');
const document = dom.window.document;
const path = document.getElementById('p');

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

path.setAttribute('d', TRACK_PATH);
console.log('Path attribute set successfully');
