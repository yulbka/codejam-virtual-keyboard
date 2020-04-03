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


createKeyboard('eng');
