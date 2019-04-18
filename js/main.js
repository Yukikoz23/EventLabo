'use strict';
{

const link = [
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/click',       // 0
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/dblclick',    // 1
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/contextmenu', // 2
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/mousedown',   // 3
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/mouseup',     // 4
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/mouseover',   // 5
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/mouseenter',  // 6
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/mouseout',    // 7
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/mouseleave',  // 8
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/mousemove',   // 9
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/select',      // 10
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/touchstart',  // 11
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/touchend',    // 12
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/touchmove',   // 13
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/keydown',     // 14
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/keypress',    // 15
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/keyup',       // 16
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/dragstart',   // 17
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/drag',        // 18
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/dragend',     // 19
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/dragenter',   // 20
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/dragover',    // 21
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/dragleave',   // 22
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/drop',        // 23
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/transitionend',  // 24
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/change',      // 25
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/input',       // 26
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/submit',    // 27
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/reset',       // 28
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/cut',         // 29
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/copy',        // 30
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/paste',       // 31
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/focus',       // 32
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/blur',        // 33
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/resize',      // 34
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/scroll',      // 35
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/play',        // 36
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/playing',     // 37
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/pause',       // 38
  'https://developer.mozilla.org/ja/docs/Web/Reference/Events/progress'     // 39
]

const eventItems01 = [
  {number: 0, event: 'click'},
  {number: 1, event: 'dblclick'},
  {number: 2, event: 'contextmenu'},
  {number: 3, event: 'mousedown'},
  {number: 4, event: 'mouseup'}
];

const eventItems02 = [
  {number: 5, event: 'mouseover'},
  {number: 6, event: 'mouseenter'},
  {number: 7, event: 'mouseout'},
  {number: 8, event: 'mouseleave'},
  {number: 9, event: 'mousemove'}
];

const eventItems03 = [
  {number: 10, event: 'select'}
];

const eventItems04 = [
  {number: 11, event: 'touchstart'},
  {number: 12, event: 'touchend'},
  {number: 13, event: 'touchmove'}
];

const eventItems05 = [
  {number: 14, event: 'keydown'},
  {number: 15, event: 'keypress'},
  {number: 16, event: 'keyup'}
];

const eventItems06 = [
  {number: 17, event: 'dragstart'},
  {number: 18, event: 'drag'},
  {number: 19, event: 'dragend'}
];

const eventItems07 = [
  {number: 20, event: 'dragenter'},
  {number: 21, event: 'dragover'},
  {number: 22, event: 'dragleave'},
  {number: 23, event: 'drop'}
];

const eventItems08 = [
  {number: 24, event: 'transitionend'}
];

const eventItems09 = [
  {number: 25, event: 'change'},
  {number: 26, event: 'input'},
  {number: 27, event: 'submit'},
  {number: 28, event: 'reset'}
];

const eventItems10 = [
  {number: 29, event: 'cut'},
  {number: 30, event: 'copy'},
  {number: 31, event: 'paste'}
];

const eventItems11 = [
  {number: 32, event: 'focus'},
  {number: 33, event: 'blur'}
];

const eventItems12 = [
  {number: 34, event: 'resize'},
  {number: 35, event: 'scroll'}
];

const eventItems13 = [
  {number: 36, event: 'play'},
  {number: 37, event: 'playing'},
  {number: 38, event: 'pause'},
  {number: 39, event: 'progress'}
];

const eventBtns = document.querySelectorAll('button');
const eventDivs = document.querySelectorAll('div');
const eventInputs = document.querySelectorAll('input');
const eventImgs = document.querySelectorAll('img');
const eventForms = document.querySelectorAll('form');
const eventTextareas = document.querySelectorAll('textarea');
const eventVideo = document.querySelector('video');
const eventLis = document.querySelectorAll('.event > ul > li');
const examples = document.querySelectorAll('.example');
const menuBtn = document.querySelector('menu');
const closeBtn = document.querySelector('nav img');
const nav = document.querySelector('nav');
const navAtags = document.querySelectorAll('nav a');
const bg = document.querySelector('body > div');

function runEvent(eventItems, element) {
  eventItems.forEach(item => {

    function inactive() {
      eventLis[item.number].classList.remove('active');
    }

    element.addEventListener(item.event, e => {
      if (item.event === 'mousemove') {
        examples[0].textContent = `X: ${e.clientX}　Y: ${e.clientY}`;
      } else if (item.event === 'keydown') {
        examples[1].textContent = element.value;
      } else if (item.event === 'keypress') {
        examples[2].textContent = element.value;
      } else if (item.event === 'keyup') {
        examples[3].textContent = element.value;
      } else if (item.event === 'drag') {
        element.classList.add('hidden');
      } else if (item.event === 'dragend') {
        element.classList.remove('hidden');
      } else if (item.event === 'dragover' || item.event === 'submit') {
        e.preventDefault();
      } else if (item.event === 'drop') {
        element.appendChild(eventImgs[1]);
      }
      // 共通の処理
      eventLis[item.number].classList.add('active');
      setTimeout(inactive, 600);
    });
  });
}

function openMenu() {
  nav.classList.add('open');
  menuBtn.classList.add('hidden');
  bg.classList.remove('hidden');
}

function closeMenu() {
  nav.classList.remove('open');
  menuBtn.classList.remove('hidden');
  bg.classList.add('hidden');
}

function linkToMdn() {
  for (let i = 0; i < eventLis.length; i++) {
    eventLis[i].addEventListener('click', () => {
      window.open(link[i]);
    });
  }
}

function switchDisplay() {
  const ua = navigator.userAgent;
  const pcs = document.querySelectorAll('.pc');
  const sps = document.querySelectorAll('.sp');
  const names = document.querySelectorAll('.name');
  const comments = document.querySelectorAll('.comment');
  const examples = document.querySelectorAll('.example');
  if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Andoroid') > 0) {
    pcs.forEach(pc => {
      pc.classList.add('hidden');
    });
    sps.forEach(sp => {
      sp.classList.remove('hidden');
    });
    names.forEach(name => {
      name.classList.add('name-sp');
    });
    comments.forEach(comment => {
      comment.classList.add('comment-sp');
    });
    examples.forEach(example => {
      example.classList.add('example-sp');
    });
  }
}

function showInfo() {
  const info = document.getElementById('info');

  function hiddenInfo() {
    info.classList.remove('show');
  }

  window.addEventListener('load', () => {
    info.classList.add('show');
    setTimeout(hiddenInfo, 3000);
  });
}

runEvent(eventItems01, eventBtns[0]);
runEvent(eventItems02, eventDivs[2]);
runEvent(eventItems03, eventInputs[0]);
runEvent(eventItems04, eventDivs[3]);
runEvent(eventItems05, eventInputs[1]);
runEvent(eventItems06, eventImgs[1]);
runEvent(eventItems07, eventDivs[4]);
runEvent(eventItems07, eventDivs[5]);
runEvent(eventItems08, eventImgs[2]);
runEvent(eventItems09, eventForms[0]);
runEvent(eventItems10, eventInputs[6]);
runEvent(eventItems11, eventInputs[7]);
runEvent(eventItems12, window);
runEvent(eventItems13, eventVideo);

menuBtn.addEventListener('click', () => {
  openMenu();
});

closeBtn.addEventListener('click', () => {
  closeMenu();
});

bg.addEventListener('click', () => {
  closeMenu();
});

navAtags.forEach(a => {
  a.addEventListener('click', () => {
    closeMenu();
  })
})

linkToMdn();
switchDisplay();
showInfo();

}
