// create html base for keyboard

function createElement(element, elemClass) {
  const elem = document.createElement(element);
  elem.classList.add(elemClass);
  return elem;
}

const container = createElement('div', 'container');
document.body.append(container);

const mainElements = [{ tag: 'textarea', class: 'textarea' },
  { tag: 'div', class: 'keyboard' },
  { tag: 'p', class: 'note', text: 'To change language press left Ctrl + left Alt\nCreated on Windows OS' }];

mainElements.forEach((element) => {
  const temp = createElement(element.tag, element.class);
  if (element.text) { temp.innerHTML = element.text; }
  container.append(temp);
});

// create html for buttons

const keysEng = [{ value: '`', switchValue: '~', classes: ['key_switched'] }, { value: '1', switchValue: '!', classes: ['key_switched'] },
  { value: '2', switchValue: '@', classes: ['key_switched'] }, { value: '3', switchValue: '#', classes: ['key_switched'] },
  { value: '4', switchValue: '$', classes: ['key_switched'] }, { value: '5', switchValue: '%', classes: ['key_switched'] },
  { value: '6', switchValue: '^', classes: ['key_switched'] }, { value: '7', switchValue: '&', classes: ['key_switched'] },
  { value: '8', switchValue: '*', classes: ['key_switched'] }, { value: '9', switchValue: '(', classes: ['key_switched'] },
  { value: '0', switchValue: ')', classes: ['key_switched'] }, { value: '-', switchValue: '_', classes: ['key_switched'] },
  { value: '=', switchValue: '+', classes: ['key_switched'] }, { value: 'Backspace', classes: ['key_wide'] }, { value: 'Tab' },
  { value: 'q' }, { value: 'w' }, { value: 'e' }, { value: 'r' }, { value: 't' }, { value: 'y' }, { value: 'u' }, { value: 'i' },
  { value: 'o' }, { value: 'p' }, { value: '[' }, { value: ']' }, { value: '\\', switchValue: '|', classes: ['key_switched'] },
  { value: 'Del' }, { value: 'CapsLock', classes: ['key_wide', 'key_caps'] }, { value: 'a' }, { value: 's' }, { value: 'd' },
  { value: 'f' }, { value: 'g' }, { value: 'h' }, { value: 'j' }, { value: 'k' }, { value: 'l' }, { value: ';' }, { value: '\\' },
  { value: 'Enter', classes: ['key_wide'] }, { value: 'Shift', classes: ['key_wide'] }, { value: 'z' }, { value: 'x' }, { value: 'c' },
  { value: 'v' }, { value: 'b' }, { value: 'n' }, { value: 'm' }, { value: ',' }, { value: '.' }, { value: '/' }, { value: '↑' },
  { value: 'Shift', classes: ['key_wide'] }, { value: 'Ctrl' }, { value: 'Win' }, { value: 'Alt' },
  { value: ' ', classes: ['key_space'] }, { value: 'Alt' }, { value: '←' }, { value: '↓' }, { value: '→' }, { value: 'Ctrl' }];

const keysRu = [{ value: 'ё', switchValue: '!', classes: ['key_switched'] }, { value: '1', switchValue: '"', classes: ['key_switched'] },
  { value: '2', switchValue: '№', classes: ['key_switched'] }, { value: '3', switchValue: ';', classes: ['key_switched'] },
  { value: '4', switchValue: '%', classes: ['key_switched'] }, { value: '5', switchValue: ':', classes: ['key_switched'] },
  { value: '6', switchValue: '?', classes: ['key_switched'] }, { value: '7', switchValue: '*', classes: ['key_switched'] },
  { value: '8', switchValue: '(', classes: ['key_switched'] }, { value: '9', switchValue: ')', classes: ['key_switched'] },
  { value: '0', switchValue: '_', classes: ['key_switched'] }, { value: '-', switchValue: '+', classes: ['key_switched'] },
  { value: '=', switchValue: '', classes: ['key_switched'] }, { value: 'Backspace', classes: ['key_wide'] }, { value: 'Tab' }, { value: 'й' },
  { value: 'ц' }, { value: 'у' }, { value: 'к' }, { value: 'е' }, { value: 'н' }, { value: 'г' }, { value: 'ш' }, { value: 'щ' },
  { value: 'з' }, { value: 'х' }, { value: 'ъ' }, { value: '\\', switchValue: '|', classes: ['key_switched'] }, { value: 'Del' },
  { value: 'CapsLock', classes: ['key_wide', 'key_caps'] }, { value: 'ф' }, { value: 'ы' }, { value: 'в' }, { value: 'а' }, { value: 'п' },
  { value: 'р' }, { value: 'о' }, { value: 'л' }, { value: 'д' }, { value: 'ж' }, { value: 'э' }, { value: 'Enter', classes: ['key_wide'] },
  { value: 'Shift', classes: ['key_wide'] }, { value: 'я' }, { value: 'ч' }, { value: 'с' }, { value: 'м' }, { value: 'и' }, { value: 'т' },
  { value: 'ь' }, { value: 'б' }, { value: 'ю' }, { value: '/' }, { value: '↑' }, { value: 'Shift', classes: ['key_wide'] }, { value: 'Ctrl' },
  { value: 'Win' }, { value: 'Alt' }, { value: ' ', classes: ['key_space'] }, { value: 'Alt' }, { value: '←' }, { value: '↓' }, { value: '→' }, { value: 'Ctrl' }];

const keyCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus',
  'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight',
  'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft',
  'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

const arrows = ['ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

function createKeys(arr) {
  const keyboard = document.body.querySelector('.keyboard');
  arr.forEach((item, index) => {
    const key = createElement('button', 'key');
    key.innerHTML = item.value;
    if (item.switchValue) { key.dataset.content = item.switchValue; }
    if (item.classes) { key.classList.add(...item.classes); }
    key.dataset.value = keyCodes[index];
    keyboard.append(key);
  });
}

let lang;
lang = sessionStorage.getItem('language') || 'eng';

let capsOn;
capsOn = sessionStorage.getItem('capsOn') || false;

function capsToggle() {
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => {
    if (key.innerHTML.length === 1) {
      capsOn ? key.innerHTML = key.innerHTML.toUpperCase()
        : key.innerHTML = key.innerHTML.toLowerCase();
    }
  });
}

// generate english keyboard with lower case by default if open site at first
// or take language and caps value from sessionStorage if page was refreshed

function createKeyboard() {
  lang === 'eng' ? createKeys(keysEng) : createKeys(keysRu);
  capsToggle();
  if (capsOn) { document.querySelector('.key[data-value=CapsLock]').classList.add('key_caps_active'); }
}

createKeyboard();

function printText(text) {
  const textarea = document.querySelector('.textarea');
  textarea.focus();
  textarea.setRangeText(text, textarea.selectionStart, textarea.selectionEnd, 'end');
}

function printKeySymbol(key) {
  const shiftLeft = document.querySelector('.key[data-value=ShiftLeft]');
  const shiftRight = document.querySelector('.key[data-value=ShiftRight]');
  if (arrows.includes(key.dataset.value)) return;
  if (key.innerHTML.length < 2) {
    if (shiftLeft.classList.contains('key_active') || shiftRight.classList.contains('key_active')) {
      key.dataset.content ? printText(key.dataset.content) : printText(key.innerHTML);
    } else {
      printText(key.innerHTML);
    }
  }
}

function changeLanguage() {
  const keyboard = document.body.querySelector('.keyboard');
  lang === 'eng' ? lang = 'ru' : lang = 'eng';
  sessionStorage.setItem('language', lang);
  keyboard.innerHTML = '';
  createKeyboard();
}

function changeCursorPosition(arrow) {
  const textarea = document.querySelector('.textarea');
  switch (arrow) {
    case 'ArrowUp':
      textarea.selectionStart = 0;
      textarea.selectionEnd = textarea.selectionStart;
      break;
    case 'ArrowDown':
      textarea.selectionStart = textarea.value.length;
      textarea.selectionEnd = textarea.selectionStart;
      break;
    case 'ArrowLeft':
      textarea.selectionStart -= 1;
      if (textarea.selectionStart < 0) { textarea.selectionStart = 0; }
      textarea.selectionEnd = textarea.selectionStart;
      break;
    case 'ArrowRight':
      textarea.selectionStart += 1;
      if (textarea.selectionStart > textarea.value.length) {
        textarea.selectionStart = textarea.value.length;
      }
      textarea.selectionEnd = textarea.selectionStart;
      break;
    default:
      break;
  }
  textarea.focus();
}

function deleteText(n) {
  const textarea = document.querySelector('.textarea');
  const str = textarea.value;
  let startPosition = textarea.selectionStart;
  let endPosition = textarea.selectionEnd;
  if (startPosition === endPosition) {
    if (n < 0) {
      startPosition += n;
      if (startPosition < 0) { startPosition = 0; }
    }
    if (n > 0) {
      endPosition += n;
      if (endPosition > str.length) { endPosition = str.length; }
    }
  }
  textarea.focus();
  textarea.value = str.slice(0, startPosition) + str.slice(endPosition, str.length);
  textarea.selectionStart = startPosition;
  textarea.selectionEnd = startPosition;
}

// key events
// add highlight and print symbols on key press

document.addEventListener('keydown', (event) => {
  if (event.metaKey) {
    document.querySelector('.key[data-value=MetaLeft]').classList.add('key_active');
  }
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => {
    if (key.dataset.value === event.code) {
      key.classList.add('key_active');
      event.preventDefault();
      printKeySymbol(key);
    }
  });
});

// process special keys (Tab, arrows, change language)

document.addEventListener('keydown', (event) => {
  const ctrlLeft = document.querySelector('.key[data-value=ControlLeft]');
  const altLeft = document.querySelector('.key[data-value=AltLeft]');
  if (event.code === 'Tab') {
    event.preventDefault();
    printText('\t');
  }
  if (event.code === 'Enter') { printText('\n'); }
  if (event.code === 'Delete') { deleteText(1); }
  if (event.code === 'Backspace') { deleteText(-1); }
  if (arrows.includes(event.code)) { changeCursorPosition(event.code); }
  if (ctrlLeft.classList.contains('key_active') && altLeft.classList.contains('key_active')) {
    setTimeout(changeLanguage, 300);
  }
});

// change letter case on CapsLock

document.addEventListener('keyup', (event) => {
  if (event.code === 'CapsLock') {
    capsOn = !capsOn;
    sessionStorage.setItem('capsOn', capsOn);
    capsToggle();
    document.querySelector('.key[data-value=CapsLock]').classList.toggle('key_caps_active');
  }
});

// change letter case opposite to CapsLock while Shift pressed

document.addEventListener('keydown', (event) => {
  if (event.key === 'Shift') {
    if (event.repeat) { return; }
    capsOn = !capsOn;
    capsToggle();
  }
}, false);

// remove Shift impact after Shift up

document.addEventListener('keyup', (event) => {
  if (event.key === 'Shift') {
    capsOn = !capsOn;
    capsToggle();
    document.querySelector('.key[data-value=ShiftLeft]').classList.remove('key_active');
    document.querySelector('.key[data-value=ShiftRight]').classList.remove('key_active');
  }
});

// remove highlight after key up

document.addEventListener('keyup', () => {
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => {
    if (key.dataset.value === 'ShiftLeft' || key.dataset.value === 'ShiftRight') return;
    key.classList.remove('key_active');
  });
});

// use keyboard on mouse-click

const keyboard = document.body.querySelector('.keyboard');

// add highlight on mouse down

keyboard.addEventListener('mousedown', (event) => {
  const keys = document.querySelectorAll('.key');
  keys.forEach(() => {
    event.target.closest('.key').classList.add('key_active');
  });
});

// remove highlight after mouse up

keyboard.addEventListener('mouseup', () => {
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => {
    if (key.innerHTML === 'Shift') return;
    key.classList.remove('key_active');
  });
});

// print symbols on mouse click

keyboard.addEventListener('click', (event) => {
  const target = event.target.closest('.key');
  if (!target) return;
  printKeySymbol(event.target);
});

// use special keys on mouse click

keyboard.addEventListener('click', (event) => {
  const target = event.target.dataset.value;
  if (target === 'Enter') { printText('\n'); }
  if (target === 'Tab') { printText('\t'); }
  if (target === 'Delete') { deleteText(1); }
  if (target === 'Backspace') { deleteText(-1); }
  if (arrows.includes(target)) { changeCursorPosition(target); }
});

// toggle CapsLock on mouse click

keyboard.addEventListener('mouseup', (event) => {
  if (event.target.dataset.value === 'CapsLock') {
    capsOn = !capsOn;
    sessionStorage.setItem('capsOn', capsOn);
    capsToggle();
    document.querySelector('.key[data-value=CapsLock]').classList.toggle('key_caps_active');
  }
});

// change letter case opposite to CapsLock while Shift onclick

keyboard.addEventListener('mousedown', (event) => {
  if (event.target.innerHTML === 'Shift') {
    capsOn = !capsOn;
    capsToggle();
  }
});

// remove Shift impact after Shift mouseup

keyboard.addEventListener('mouseup', (event) => {
  if (event.target.innerHTML === 'Shift') {
    capsOn = !capsOn;
    capsToggle();
    event.target.classList.remove('key_active');
  }
});
