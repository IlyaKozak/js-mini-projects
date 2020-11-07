const keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    textarea: null,
    keys: [],
    keysById: {}
  },
  properties: {
    value: '',
    selection: false,
    selectionStart: 0,
    selectionEnd: 0,
    selectionIdx: 0,
    capsLock: false,
    shift: false,
    ctrl: false,
    alt: false,
    language: 'en',
    sound: false,
    microphone: false
  },

  init() {
    // Create main elements
    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');

    // Setup main elements
    this.elements.main.classList.add('keyboard', 'keyboard--hidden');
    this.elements.keysContainer.classList.add('keyboard__keys');
    this.elements.keysContainer.appendChild(this._createKeys());

    this.elements.keys = this.elements.keysContainer.querySelectorAll(
      '.keyboard__key'
    );

    // Add to DOM
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);

    // Open keyboard on focus textarea
    this.elements.textarea = document.querySelector('.use-keyboard-input');
    this.elements.textarea.addEventListener('focus', () =>
      this.elements.main.classList.remove('keyboard--hidden')
    );

    this.elements.main.addEventListener('click', oninput);
    this.elements.keysById['microphone'].addEventListener(
      'click',
      microphoneHandler
    );
  },

  _createKeys() {
    const fragment = document.createDocumentFragment();

    keyLayout.forEach(keyName => {
      const keyElement = document.createElement('button');

      // Add attributes/classes
      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('keyboard__key');
      keyElement.style.gridArea = gridAreaProperties[keyName.en].desktop;
      keyElement.dataset.key = keyName.en;
      keyElement.id = keyName.en;
      this.elements.keysById[keyName.en] = keyElement;

      addKeyElementContent(keyName.en, keyElement);

      fragment.appendChild(keyElement);
    });

    return fragment;
  },

  toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;
    for (const key of this.elements.keys) {
      if (key.textContent === 'ctrl' || key.textContent === 'alt') continue;
      if (key.childElementCount === 0) {
        key.textContent = this.properties.capsLock
          ? key.textContent.toUpperCase()
          : key.textContent.toLowerCase();
      }
    }
  },

  toggleSound() {
    this.properties.sound = !this.properties.sound;
  },

  toggleShift() {
    this.properties.shift = !this.properties.shift;
    for (let i = 0; i < this.elements.keys.length; i++) {
      const key = this.elements.keys[i];
      if (key.textContent === 'ctrl' || key.textContent === 'alt') continue;
      if (key.childElementCount === 0) {
        let value;
        if (this.properties.language === 'en') {
          value = this.properties.shift
            ? keyLayout[i].shiftEn
            : keyLayout[i].en;
        } else {
          value = this.properties.shift
            ? keyLayout[i].shiftRu
            : keyLayout[i].ru;
        }

        key.textContent = this.properties.capsLock
          ? value.toUpperCase()
          : value.toLowerCase();
      }
    }
  }
};

// Creates HTML for an icon
function createIconHTML(icon_name) {
  if (icon_name === 'forward')
    return `<i class="material-icons keyboard__key--rotate">${icon_name}</i>`;
  return `<i class="material-icons">${icon_name}</i>`;
}

function addKeyElementContent(keyName, keyElement) {
  switch (keyName) {
    case 'backspace':
      keyElement.innerHTML = createIconHTML('backspace');
      break;

    case 'caps':
      keyElement.classList.add('keyboard__key--activatable');
      keyElement.innerHTML = createIconHTML('keyboard_capslock');
      break;

    case 'enter':
      keyElement.innerHTML = createIconHTML('keyboard_return');
      break;

    case 'space':
      keyElement.innerHTML = createIconHTML('space_bar');
      break;

    case 'sound':
      keyElement.classList.add('keyboard__key--activatable');
      keyElement.innerHTML = createIconHTML('volume_up');
      break;

    case 'done':
      keyElement.classList.add('keyboard__key--dark');
      keyElement.innerHTML = createIconHTML('check_circle');
      break;

    case 'shiftLeft':
    case 'shiftRight':
      keyElement.innerHTML = createIconHTML('forward');
      break;

    case 'ctrlLeft':
    case 'ctrlRight':
      keyElement.innerHTML = 'ctrl';
      break;

    case 'altLeft':
    case 'altRight':
      keyElement.innerHTML = 'alt';
      break;

    case 'left':
      keyElement.innerHTML = createIconHTML('keyboard_arrow_left');
      break;

    case 'up':
      keyElement.innerHTML = createIconHTML('keyboard_arrow_up');
      break;

    case 'right':
      keyElement.innerHTML = createIconHTML('keyboard_arrow_right');
      break;

    case 'down':
      keyElement.innerHTML = createIconHTML('keyboard_arrow_down');
      break;

    case 'lang':
      keyElement.innerHTML = createIconHTML('language');
      keyboard.elements.lang = document.createElement('span');
      keyboard.elements.lang.innerHTML = keyboard.properties.language;
      keyboard.elements.lang.id = 'lang';
      keyElement.appendChild(keyboard.elements.lang);
      break;

    case 'microphone':
      keyElement.innerHTML = createIconHTML('keyboard_voice');
      keyElement.classList.add('keyboard__key--activatable');
      break;

    default:
      keyElement.textContent = keyName;
      break;
  }
}

function oninput(e) {
  let key =
    e.target.tagName === 'I' || e.target.tagName === 'SPAN'
      ? e.target.parentNode.dataset.key
      : e.target.dataset.key;
  // Delete Selection
  if (
    keyboard.elements.textarea.selectionStart !==
    keyboard.elements.textarea.selectionEnd
  ) {
    if (!specialKeysForSelection.includes(key)) deleteSelection();
    if (key === 'backspace') return;
    if (key === 'left') {
      keyboard.elements.textarea.selectionEnd =
        keyboard.elements.textarea.selectionStart;
      updateValue();
    }
    if (key === 'right') {
      keyboard.elements.textarea.selectionStart =
        keyboard.elements.textarea.selectionEnd;
      updateValue();
    }
  }

  if (!key) return;
  switch (key) {
    case 'backspace':
      updateText('backspace', -1);
      break;

    case 'caps':
      keyboard.toggleCapsLock();
      keyboard.elements.keysById['caps'].classList.toggle(
        'keyboard__key--active'
      );
      break;

    case 'enter':
      updateText('\n', 1);
      break;

    case 'space':
      updateText(' ', 1);
      break;

    case 'sound':
      keyboard.toggleSound();
      keyboard.elements.keysById['sound'].classList.toggle(
        'keyboard__key--active'
      );
      break;

    case 'done':
      keyboard.elements.main.classList.add('keyboard--hidden');
      break;

    case 'shiftLeft':
    case 'shiftRight':
      keyboard.properties.capsLock = !keyboard.properties.capsLock;
      keyboard.toggleShift();
      keyboard.elements.keysById['shiftLeft'].classList.toggle(
        'keyboard__key--dark'
      );
      keyboard.elements.keysById['shiftRight'].classList.toggle(
        'keyboard__key--dark'
      );
      if (keyboard.properties.shift && keyboard.properties.ctrl)
        changeLanguage(keyboard.properties.language === 'en' ? 'ru' : 'en');
      break;

    case 'ctrlLeft':
    case 'ctrlRight':
      keyboard.properties.ctrl = !keyboard.properties.ctrl;
      keyboard.elements.keysById['ctrlLeft'].classList.toggle(
        'keyboard__key--dark'
      );
      keyboard.elements.keysById['ctrlRight'].classList.toggle(
        'keyboard__key--dark'
      );
      if (keyboard.properties.shift && keyboard.properties.ctrl)
        changeLanguage(keyboard.properties.language === 'en' ? 'ru' : 'en');
      break;

    case 'altLeft':
    case 'altRight':
      keyboard.properties.alt = !keyboard.properties.alt;
      keyboard.elements.keysById['altLeft'].classList.toggle(
        'keyboard__key--dark'
      );
      keyboard.elements.keysById['altRight'].classList.toggle(
        'keyboard__key--dark'
      );
      break;

    case 'left':
      if (keyboard.properties.selectionStart - 1 >= 0) {
        updateText(null, -1);
      }
      break;

    case 'up':
      if (
        !/\n/.test(
          keyboard.elements.textarea.value.slice(
            0,
            keyboard.elements.textarea.selectionStart
          )
        )
      ) {
        updateText(null, -keyboard.elements.textarea.selectionStart);
      } else {
        const positionUp = keyboard.elements.textarea.value
          .slice(0, keyboard.elements.textarea.selectionStart)
          .match(/(\n).*(?!\1)$/g) || [[1]];
        updateText(null, -positionUp[0].length);
      }
      break;

    case 'right':
      if (
        keyboard.properties.selectionStart + 1 <=
        keyboard.properties.value.length
      ) {
        updateText(null, 1);
      }
      break;

    case 'down':
      if (
        !/\n/.test(
          keyboard.elements.textarea.value.slice(
            keyboard.elements.textarea.selectionEnd
          )
        )
      ) {
        updateText(null, keyboard.elements.textarea.value.length);
      } else {
        const positionDown = keyboard.elements.textarea.value
          .slice(keyboard.elements.textarea.selectionStart)
          .match(/^.*(\n).*(?!\1)/) || [[1]];
        updateText(null, positionDown[0].length + 1);
      }
      break;

    case 'lang':
      if (keyboard.properties.language === 'en') {
        recognition.lang = 'ru-BY';
        changeLanguage('ru');
      } else {
        recognition.lang = 'en-US';
        changeLanguage('en');
      }
      break;

    case 'microphone':
      keyboard.elements.keysById['microphone'].classList.toggle(
        'keyboard__key--active'
      );
      break;

    default:
      if (keyboard.properties.language === 'ru') {
        key = keyboard.properties.shift ? EnToShiftRu[key] : EnToRu[key];
      } else {
        key = keyboard.properties.shift ? EnShift[key] : key;
      }
      updateText(key, 1);
      break;
  }

  if (keyboard.properties.sound) {
    if (key === 'caps') clickCaps.cloneNode().play();
    else if (key === 'backspace') clickBackspace.cloneNode().play();
    else if (key === 'enter') clickEnter.cloneNode().play();
    else if (key === 'shiftLeft' || key === 'shiftRight')
      clickShift.cloneNode().play();
    else if (keyboard.properties.language === 'en') clickEn.cloneNode().play();
    else if (keyboard.properties.language === 'ru') clickRu.cloneNode().play();
  }
}

function onkeypress(e) {
  if (document.activeElement !== keyboard.elements.textarea) return;

  const key = keyboardCodesToIds[e.code];
  if (!key) return;
  // Phycical Keyboard Sounds
  // if (
  //   keyboard.properties.sound &&
  //   (e.keyCode !== 16 || (e.keyCode === 16 && !keyboard.properties.shift)) &&
  //   (e.keyCode !== 17 || (e.keyCode === 17 && !keyboard.properties.ctrl)) &&
  //   (e.keyCode !== 18 || (e.keyCode === 18 && !keyboard.properties.alt))
  // )
  //   click.cloneNode().play();
  if (!specialKeys.includes(key)) {
    deleteSelection();
    if (e.code === 'Delete') e.preventDefault();
  }

  switch (key) {
    case 'caps':
      keyboard.toggleCapsLock();
      keyboard.elements.keysById['caps'].classList.toggle(
        'keyboard__key--active'
      );
      break;

    case 'shiftLeft':
    case 'shiftRight':
      if (!(e.shiftKey && keyboard.properties.shift)) {
        keyboard.properties.capsLock = !keyboard.properties.capsLock;
        keyboard.toggleShift();
        keyboard.elements.keysById['shiftLeft'].classList.toggle(
          'keyboard__key--dark'
        );
        keyboard.elements.keysById['shiftRight'].classList.toggle(
          'keyboard__key--dark'
        );
        if (keyboard.properties.shift && keyboard.properties.ctrl)
          changeLanguage(keyboard.properties.language === 'en' ? 'ru' : 'en');
      }
      break;

    case 'ctrlLeft':
    case 'ctrlRight':
      if (!(e.ctrlKey && keyboard.properties.ctrl)) {
        keyboard.properties.ctrl = true;
        keyboard.elements.keysById['ctrlLeft'].classList.add(
          'keyboard__key--dark'
        );
        keyboard.elements.keysById['ctrlRight'].classList.add(
          'keyboard__key--dark'
        );
        if (keyboard.properties.shift && keyboard.properties.ctrl)
          changeLanguage(keyboard.properties.language === 'en' ? 'ru' : 'en');
      }
      break;

    case 'altLeft':
    case 'altRight':
      if (!(e.altKey && keyboard.properties.alt)) {
        keyboard.properties.alt = true;
        keyboard.elements.keysById['altLeft'].classList.add(
          'keyboard__key--dark'
        );
        keyboard.elements.keysById['altRight'].classList.add(
          'keyboard__key--dark'
        );
      }
      break;

    default:
      if (keyboardCodesWithoughtSpecialCodes[e.code]) {
        e.preventDefault();
        if (keyboard.properties.language === 'en') {
          let value;
          if (keyboard.properties.caps) {
            value = keyboard.properties.shift ? key : EnShift[key];
          } else {
            value = keyboard.properties.shift ? EnShift[key] : key;
          }
          updateText(value, 1);
        } else if (keyboard.properties.language === 'ru') {
          let value;
          if (keyboard.properties.caps) {
            value = keyboard.properties.shift ? EnToRu[key] : EnToShiftRu[key];
          } else {
            value = keyboard.properties.shift ? EnToShiftRu[key] : EnToRu[key];
          }
          updateText(value, 1);
        }
      }
      if (keyboard.elements.keysById[key]) {
        keyboard.elements.keysById[key].classList.add('keyboard__key--active');
        setTimeout(
          () =>
            keyboard.elements.keysById[key].classList.remove(
              'keyboard__key--active'
            ),
          100
        );
      }
      break;
  }
}

function onkeyrelease(e) {
  if (e.keyCode === 16) {
    keyboard.properties.capsLock = !keyboard.properties.capsLock;
    keyboard.toggleShift();
    keyboard.elements.keysById['shiftLeft'].classList.remove(
      'keyboard__key--dark'
    );
    keyboard.elements.keysById['shiftRight'].classList.remove(
      'keyboard__key--dark'
    );
  } else if (e.keyCode === 17) {
    keyboard.properties.ctrl = false;
    keyboard.elements.keysById['ctrlLeft'].classList.remove(
      'keyboard__key--dark'
    );
    keyboard.elements.keysById['ctrlRight'].classList.remove(
      'keyboard__key--dark'
    );
  } else if (e.keyCode === 18) {
    e.preventDefault();
    keyboard.properties.alt = false;
    keyboard.elements.keysById['altLeft'].classList.remove(
      'keyboard__key--dark'
    );
    keyboard.elements.keysById['altRight'].classList.remove(
      'keyboard__key--dark'
    );
  } else {
    updateValue();
  }
}

function changeLanguage(lang) {
  keyboard.properties.language = lang;
  keyboard.elements.lang.innerHTML = lang;
  if (keyboard.properties.shift) {
    lang = lang === 'en' ? 'shiftEn' : 'shiftRu';
  }
  keyboard.elements.keys.forEach((button, idx) => {
    if (!specialKeys.includes(button.dataset.key)) {
      button.innerHTML = keyboard.properties.capsLock
        ? keyLayout[idx][lang].toUpperCase()
        : keyLayout[idx][lang].toLowerCase();
    }
  });
}

function updateValue(e) {
  // Update properties
  keyboard.properties.value = keyboard.elements.textarea.value;
  keyboard.properties.selectionStart =
    keyboard.elements.textarea.selectionStart;
  keyboard.properties.selectionIdx = keyboard.properties.selectionStart;
  keyboard.properties.selectionEnd = keyboard.elements.textarea.selectionEnd;

  // Focus on textarea
  if (!e) return;
  const key =
    e.target.tagName === 'I' || e.target.tagName === 'SPAN'
      ? e.target.parentNode.dataset.key
      : e.target.dataset.key;
  if (key !== 'done') keyboard.elements.textarea.focus();
}

function updateText(value, selectionAdd) {
  if (value === 'backspace') {
    keyboard.properties.value =
      keyboard.properties.value.slice(
        0,
        keyboard.properties.selectionStart - 1
      ) + keyboard.properties.value.slice(keyboard.properties.selectionStart);
    keyboard.elements.textarea.value = keyboard.properties.value;
  } else if (value) {
    keyboard.properties.value =
      keyboard.properties.value.slice(0, keyboard.properties.selectionStart) +
      (keyboard.properties.capsLock
        ? value.toUpperCase()
        : value.toLowerCase()) +
      keyboard.properties.value.slice(keyboard.properties.selectionStart);
    keyboard.elements.textarea.value = keyboard.properties.value;
  }
  keyboard.elements.textarea.focus();
  keyboard.properties.selectionStart += selectionAdd;
  keyboard.elements.textarea.selectionStart =
    keyboard.properties.selectionStart;
  keyboard.properties.selectionEnd = keyboard.properties.selectionStart;
  keyboard.elements.textarea.selectionEnd = keyboard.properties.selectionEnd;
}

function deleteSelection() {
  const start = keyboard.elements.textarea.selectionStart;
  keyboard.elements.textarea.value =
    keyboard.elements.textarea.value.slice(
      0,
      keyboard.elements.textarea.selectionStart
    ) +
    keyboard.elements.textarea.value.slice(
      keyboard.elements.textarea.selectionEnd
    );
  keyboard.elements.textarea.selectionStart = start;
  keyboard.elements.textarea.selectionEnd = start;
  updateValue();
}

function microphoneHandler() {
  keyboard.properties.microphone = !keyboard.properties.microphone;
  if (keyboard.properties.microphone) {
    recognition.lang =
      keyboard.properties.language === 'en' ? 'en-US' : 'ru-BY';
    recognition.start();
  } else {
    recognition.stop();
  }
}

window.addEventListener('DOMContentLoaded', () => keyboard.init());
document.addEventListener('keydown', onkeypress);
document.addEventListener('keyup', onkeyrelease);
document.addEventListener('click', updateValue);
