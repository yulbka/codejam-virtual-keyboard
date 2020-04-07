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
  { value: '=', switchValue: '+', classes: ['key_switched'] }, { value: 'Backspace', classes: ['key_wide'] },
  { value: 'Tab', classes: ['key_medium'] }, { value: 'q' }, { value: 'w' }, { value: 'e' }, { value: 'r' }, { value: 't' },
  { value: 'y' }, { value: 'u' }, { value: 'i' }, { value: 'o' }, { value: 'p' }, { value: '[' }, { value: ']' },
  { value: '\\', switchValue: '|', classes: ['key_switched'] }, { value: 'Del', classes: ['key_medium'] },
  { value: 'CapsLock', classes: ['key_wide', 'key_caps'] }, { value: 'a' }, { value: 's' }, { value: 'd' }, { value: 'f' },
  { value: 'g' }, { value: 'h' }, { value: 'j' }, { value: 'k' }, { value: 'l' }, { value: ';' }, { value: '\\' },
  { value: 'Enter', classes: ['key_wide'] }, { value: 'Shift', classes: ['key_wide'] }, { value: 'z' }, { value: 'x' }, { value: 'c' },
  { value: 'v' }, { value: 'b' }, { value: 'n' }, { value: 'm' }, { value: ',' }, { value: '.' }, { value: '/' }, { value: '↑' },
  { value: 'Shift', classes: ['key_wide'] }, { value: 'Ctrl', classes: ['key_medium'] }, { value: 'Win' }, { value: 'Alt' },
  { value: ' ', classes: ['key_space'] }, { value: 'Alt' }, { value: '←' }, { value: '↓' }, { value: '→' }, { value: 'Ctrl', classes: ['key_medium'] }];

const keysRu = [{ value: 'ё', switchValue: '!', classes: ['key_switched'] }, { value: '1', switchValue: '"', classes: ['key_switched'] },
  { value: '2', switchValue: '№', classes: ['key_switched'] }, { value: '3', switchValue: ';', classes: ['key_switched'] },
  { value: '4', switchValue: '%', classes: ['key_switched'] }, { value: '5', switchValue: ':', classes: ['key_switched'] },
  { value: '6', switchValue: '?', classes: ['key_switched'] }, { value: '7', switchValue: '*', classes: ['key_switched'] },
  { value: '8', switchValue: '(', classes: ['key_switched'] }, { value: '9', switchValue: ')', classes: ['key_switched'] },
  { value: '0', switchValue: '_', classes: ['key_switched'] }, { value: '-', switchValue: '+', classes: ['key_switched'] },
  { value: '=', switchValue: '', classes: ['key_switched'] }, { value: 'Backspace', classes: ['key_wide'] }, { value: 'Tab', classes: ['key_medium'] },
  { value: 'й' }, { value: 'ц' }, { value: 'у' }, { value: 'к' }, { value: 'е' }, { value: 'н' }, { value: 'г' }, { value: 'ш' }, { value: 'щ' },
  { value: 'з' }, { value: 'х' }, { value: 'ъ' }, { value: '\\', switchValue: '|', classes: ['key_switched'] }, { value: 'Del', classes: ['key_medium'] },
  { value: 'CapsLock', classes: ['key_wide', 'key_caps'] }, { value: 'ф' }, { value: 'ы' }, { value: 'в' }, { value: 'а' }, { value: 'п' },
  { value: 'р' }, { value: 'о' }, { value: 'л' }, { value: 'д' }, { value: 'ж' }, { value: 'э' }, { value: 'Enter', classes: ['key_wide'] },
  { value: 'Shift', classes: ['key_wide'] }, { value: 'я' }, { value: 'ч' }, { value: 'с' }, { value: 'м' }, { value: 'и' }, { value: 'т' },
  { value: 'ь' }, { value: 'б' }, { value: 'ю' }, { value: '/' }, { value: '↑' }, { value: 'Shift', classes: ['key_wide'] },
  { value: 'Ctrl', classes: ['key_medium'] }, { value: 'Win' }, { value: 'Alt' }, { value: ' ', classes: ['key_space'] },
  { value: 'Alt' }, { value: '←' }, { value: '↓' }, { value: '→' }, { value: 'Ctrl', classes: ['key_medium'] }];

const keyCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus',
  'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight',
  'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft',
  'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

const arrows = ['ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const buttons = {
  TAB: 'Tab',
  DELETE: 'Delete',
  ENTER: 'Enter',
  CAPSLOCK: 'CapsLock',
  BACKSPACE: 'Backspace',
  SHIFT: 'Shift',
  SHIFTLEFT: 'ShiftLeft',
  SHIFTRIGHT: 'ShiftRight',
  CONTROLLEFT: 'ControlLeft',
  ALTLEFT: 'AltLeft',
};

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

function isEnglish() {
  return lang === 'eng';
}

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
  isEnglish() ? createKeys(keysEng) : createKeys(keysRu);
  capsToggle();
  if (capsOn) { document.querySelector(`.key[data-value=${buttons.CAPSLOCK}]`).classList.add('key_caps_active'); }
}

createKeyboard();

function printText(text) {
  const textarea = document.querySelector('.textarea');
  textarea.focus();
  textarea.setRangeText(text, textarea.selectionStart, textarea.selectionEnd, 'end');
}

function printKeySymbol(key) {
  const shiftLeft = document.querySelector(`.key[data-value=${buttons.SHIFTLEFT}]`);
  const shiftRight = document.querySelector(`.key[data-value=${buttons.SHIFTRIGHT}]`);
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
  isEnglish() ? lang = 'ru' : lang = 'eng';
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

// change letter case opposite to CapsLock while Shift pressed

function useShift(event) {
  if (event.repeat) { return; }
  capsOn = !capsOn;
  capsToggle();
}

function removeShift() {
  capsOn = !capsOn;
  capsToggle();
  document.querySelector(`.key[data-value=${buttons.SHIFTLEFT}]`).classList.remove('key_active');
  document.querySelector(`.key[data-value=${buttons.SHIFTRIGHT}]`).classList.remove('key_active');
}

function useCapsLock() {
  capsOn = !capsOn;
  sessionStorage.setItem('capsOn', capsOn);
  capsToggle();
  document.querySelector(`.key[data-value=${buttons.CAPSLOCK}]`).classList.toggle('key_caps_active');
}

// key events
// add highlight, print symbols, use special keys on key press

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (event.code === buttons.TAB) { printText('\t'); }
  if (event.code === buttons.ENTER) { printText('\n'); }
  if (event.code === buttons.DELETE) { deleteText(1); }
  if (event.code === buttons.BACKSPACE) { deleteText(-1); }
  if (event.key === buttons.SHIFT) useShift(event);
  if (arrows.includes(event.code)) { changeCursorPosition(event.code); }
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => {
    if (key.dataset.value === event.code) {
      key.classList.add('key_active');
      printKeySymbol(key);
    }
  });
}, false);


// remove highlight after key up, change language on left alt + left ctrl

document.addEventListener('keyup', (event) => {
  const ctrlLeft = document.querySelector(`.key[data-value=${buttons.CONTROLLEFT}]`);
  const altLeft = document.querySelector(`.key[data-value=${buttons.ALTLEFT}]`);
  if (ctrlLeft.classList.contains('key_active') && altLeft.classList.contains('key_active')) {
    changeLanguage();
  }
  if (event.code === buttons.CAPSLOCK) { useCapsLock(); }
  if (event.key === buttons.SHIFT) { removeShift(); }
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => {
    if (key.dataset.value === buttons.SHIFTLEFT || key.dataset.value === buttons.SHIFTRIGHT) return;
    key.classList.remove('key_active');
  });
});

// use keyboard on mouse-click
// add highlight on mouse down

const keyboard = document.body.querySelector('.keyboard');

keyboard.addEventListener('mousedown', (event) => {
  if (event.target.innerHTML === buttons.SHIFT) { useShift(event); }
  const keys = document.querySelectorAll('.key');
  keys.forEach(() => {
    event.target.closest('.key').classList.add('key_active');
  });
});

// remove highlight after mouse up

keyboard.addEventListener('mouseup', (event) => {
  if (event.target.dataset.value === buttons.CAPSLOCK) { useCapsLock(); }
  if (event.target.innerHTML === buttons.SHIFT) {
    removeShift();
    event.target.classList.remove('key_active');
  }
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => {
    if (key.innerHTML === buttons.SHIFT) return;
    key.classList.remove('key_active');
  });
});

// print symbols and use special keys on mouse click

keyboard.addEventListener('click', (event) => {
  if (!event.target.closest('.key')) return;
  printKeySymbol(event.target);
  const target = event.target.dataset.value;
  if (target === buttons.ENTER) { printText('\n'); }
  if (target === buttons.TAB) { printText('\t'); }
  if (target === buttons.DELETE) { deleteText(1); }
  if (target === buttons.BACKSPACE) { deleteText(-1); }
  if (arrows.includes(target)) { changeCursorPosition(target); }
});
