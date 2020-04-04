// create html base for keyboard
function createElem(element, ...classes) {
  const elem = document.createElement(element);
  elem.classList.add(...classes);
  return elem;
}

const container = createElem('div', 'container');
document.body.append(container);

const textarea = createElem('textarea', 'textarea');
container.append(textarea);

const keyboard = createElem('div', 'keyboard');
container.append(keyboard);

const note = createElem('p', 'note');
note.innerHTML = 'To change language press left Ctrl + Alt\nCreated on Windows OS';
container.append(note);

// create html for buttons

const firstRowEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
const firstRowRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
const keysSecondValueEng = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
const keysSecondValueRu = ['!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', ''];
const secondRowEng = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'];
const secondRowRu = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'];
const thirdRowEng = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\''];
const thirdRowRu = ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'];
const fourthRowRu = ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/'];
const fourthRowEng = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];
const keyCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

function createSimpleKey(value) {
  const key = createElem('button', 'key');
  key.innerHTML = value;
  keyboard.append(key);
}

function createLongKey(value) {
  const key = createElem('button', 'key', 'key_wide');
  key.innerHTML = value;
  keyboard.append(key);
}

function createKeySwitched(value, content) {
  const key = createElem('button', 'key', 'key_switched');
  key.innerHTML = value;
  key.dataset.content = content;
  keyboard.append(key);
}

function createFirstRow(lang) {
  for (let i = 0; i < firstRowEng.length; i += 1) {
    if (lang === 'eng') {
      createKeySwitched(firstRowEng[i], keysSecondValueEng[i]);
    } else if (lang === 'ru') {
      createKeySwitched(firstRowRu[i], keysSecondValueRu[i]);
    }
  }
  createLongKey('Backspace');
}

function createSecondRow(lang) {
  for (let i = 0; i < secondRowEng.length; i += 1) {
    if (lang === 'eng') {
      createSimpleKey(secondRowEng[i]);
    } else if (lang === 'ru') {
      createSimpleKey(secondRowRu[i]);
    }
  }
  createKeySwitched('\\', '|');
  createSimpleKey('Del', 'Delete');
}

function createThirdRow(lang) {
  createLongKey('CapsLock');
  for (let i = 0; i < thirdRowEng.length; i += 1) {
    if (lang === 'eng') {
      createSimpleKey(thirdRowEng[i]);
    } else if (lang === 'ru') {
      createSimpleKey(thirdRowRu[i]);
    }
  }
  createLongKey('Enter');
}

function createFourthRow(lang) {
  createLongKey('Shift', 'ShiftLeft');
  for (let i = 0; i < fourthRowEng.length; i += 1) {
    if (lang === 'eng') {
      createSimpleKey(fourthRowEng[i]);
    } else if (lang === 'ru') {
      createSimpleKey(fourthRowRu[i]);
    }
  }
  createSimpleKey('↑');
  createLongKey('Shift');
}

function createFifthRow() {
  createSimpleKey('Ctrl');
  createSimpleKey('Win');
  createSimpleKey('Alt');
  const space = createElem('button', 'key', 'key_space');
  space.innerHTML = ' ';
  keyboard.append(space);
  createSimpleKey('Alt');
  createSimpleKey('←');
  createSimpleKey('↓');
  createSimpleKey('→');
  createSimpleKey('Ctrl');
}

function createKeyboard(lang) {
  createFirstRow(lang);
  createSecondRow(lang);
  createThirdRow(lang);
  createFourthRow(lang);
  createFifthRow();
}

// generate english keyboard by default if open site at first
// or take language value from sessionStorage if language was switched

let lang;
lang = sessionStorage.getItem('language') || 'eng';
createKeyboard(lang);

let keys = document.querySelectorAll('.key');

function addDataValue() {
  for (let i = 0; i < keys.length; i += 1) {
    keys[i].dataset.value = keyCodes[i];
  }
}
addDataValue();

let ctrlLeft = document.querySelector('.key[data-value=ControlLeft]');
let altLeft = document.querySelector('.key[data-value=AltLeft]');
let shiftLeft = document.querySelector('.key[data-value=ShiftLeft]');
let shiftRight = document.querySelector('.key[data-value=ShiftRight]');

let caps = false;

function capsOn() {
  keys.forEach((key) => {
    if (key.innerHTML.length === 1) {
      key.innerHTML = key.innerHTML.toUpperCase();
    }
  });
}

function capsOff() {
  keys.forEach((key) => {
    if (key.innerHTML.length === 1) {
      key.innerHTML = key.innerHTML.toLowerCase();
    }
  });
}

function capsToggle() {
  if (!caps) { capsOn(); }
  if (caps) { capsOff(); }
  caps = !caps;
  sessionStorage.setItem('capsLk', caps);
}

function useTab() {
  textarea.setRangeText('\t', textarea.selectionStart, textarea.selectionEnd, 'end');
}

function changeLanguage() {
  if (lang === 'eng') {
    lang = 'ru';
  } else {
    lang = 'eng';
  }
  sessionStorage.setItem('language', lang);
  // generate new keyboard with switched language
  keyboard.innerHTML = '';
  createKeyboard(lang);
  // reassign querySelectors for new keyboard
  // (after change language eventListeners doesn't work without this)
  keys = document.querySelectorAll('.key');
  addDataValue();
  caps = false;
  ctrlLeft = document.querySelector('.key[data-value=ControlLeft]');
  altLeft = document.querySelector('.key[data-value=AltLeft]');
  shiftLeft = document.querySelector('.key[data-value=ShiftLeft]');
  shiftRight = document.querySelector('.key[data-value=ShiftRight]');
}

// add event on key press (print values, switch letters case, change language)
document.addEventListener('keydown', (event) => {
  if (event.code === 'Tab') {
    event.preventDefault();
    useTab();
  }
  if (event.code === 'CapsLock') {
    capsToggle();
    document.querySelector('.key[data-value=CapsLock]').classList.toggle('key_active');
  }
  if (event.key === 'Shift') { capsToggle(); }
  keys = document.querySelectorAll('.key');
  keys.forEach((key) => {
    // add highlight on active meta key
    if (event.metaKey) {
      document.querySelector('.key[data-value=MetaLeft]').classList.add('key_active');
    }
    if (key.dataset.value === 'CapsLock') return;
    if (key.dataset.value === event.code) {
      // add highlight on active keys
      key.classList.add('key_active');
      // make focus on textarea and print symbols when key down
      if (key.innerHTML.length < 2) {
        textarea.focus();
        // print second value on switched keys when Shift active
        if (shiftLeft.classList.contains('key_active') || shiftRight.classList.contains('key_active')) {
          if (key.dataset.content) {
            event.preventDefault();
            textarea.setRangeText(key.dataset.content, textarea.selectionStart, textarea.selectionEnd, 'end');
          } else {
            event.preventDefault();
            textarea.setRangeText(key.innerHTML, textarea.selectionStart, textarea.selectionEnd, 'end');
          }
        // print main value that displayed on simple and switched keys
        } else {
          event.preventDefault();
          textarea.setRangeText(key.innerHTML, textarea.selectionStart, textarea.selectionEnd, 'end');
        }
      }
      if (ctrlLeft.classList.contains('key_active') && altLeft.classList.contains('key_active')) {
        changeLanguage();
      }
    }
  });
});

// remove highlight after key up

document.addEventListener('keyup', (event) => {
  if (event.key === 'Shift') {
    capsToggle();
    document.querySelector('.key[data-value=ShiftLeft]').classList.remove('key_active');
    document.querySelector('.key[data-value=ShiftRight]').classList.remove('key_active');
  }
  keys.forEach((key) => {
    if (key.dataset.value === 'CapsLock') return;
    if (key.dataset.value === 'ShiftLeft' || key.dataset.value === 'ShiftRight') return;
    key.classList.remove('key_active');
  });
});

// use keyboard on mouse-click

keyboard.addEventListener('click', (event) => {
  const target = event.target.closest('.key');
  if (!target) return;
  if (target.innerHTML === 'CapsLock') {
    capsToggle();
    target.classList.toggle('key_active');
  }
  if (target.innerHTML === 'Tab') { useTab(); }
  if (target.innerHTML.length < 2) {
    event.preventDefault();
    textarea.setRangeText(target.innerHTML, textarea.selectionStart, textarea.selectionEnd, 'end');
  }
});

keyboard.addEventListener('mousedown', (event) => {
  keys.forEach(() => {
    if (event.target.dataset.value === 'CapsLock') return;
    event.target.closest('.key').classList.add('key_active');
  });
});

keyboard.addEventListener('mouseup', (event) => {
  keys.forEach(() => {
    if (event.target.dataset.value === 'CapsLock') return;
    event.target.closest('.key').classList.remove('key_active');
  });
});
