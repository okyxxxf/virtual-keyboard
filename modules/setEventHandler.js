import setStatus from './setStatus';
import setLanguage from './setLanguage';

export default function setEventHandler() {
  let isCapsLockOn = false;
  let isShiftOn = false;
  const strokes = document.querySelectorAll('div');
  const textarea = document.querySelector('textarea');
  const buttons = document.querySelectorAll('.button');
  const searchKey = (key) => {
    for (let i = 0; i < buttons.length; i += 1) {
      if (buttons[i].innerText === key) {
        return buttons[i];
      }
    }
    return null;
  };
  for (let i = 0; i < strokes.length; i += 1) {
    const keyboardButtons = strokes[i].querySelectorAll('div');
    for (let j = 0; j < keyboardButtons.length; j += 1) {
      let isCapsLockOn1 = isCapsLockOn;
      let isShiftOn1 = isShiftOn;
      keyboardButtons[j].addEventListener('click', () => {
        switch (keyboardButtons[j].innerText) {
          case 'Tab':
            textarea.value += '    ';
            keyboardButtons[j].classList.add('active');
            setTimeout(() => {
              keyboardButtons[j].classList.remove('active');
            }, 200);
            break;
          case 'CapsLock':
            isCapsLockOn1 = !isCapsLockOn1;
            if (isCapsLockOn1) {
              keyboardButtons[j].classList.add('active');
              if (!isShiftOn1) {
                setStatus(`caps${localStorage.getItem('lang')}`);
              } else {
                setStatus(`shiftCaps${localStorage.getItem('lang')}`);
              }
            } else {
              keyboardButtons[j].classList.remove('active');
              if (isShiftOn1) {
                setStatus(`caseUp${localStorage.getItem('lang')}`);
              } else {
                setStatus(`caseDown${localStorage.getItem('lang')}`);
              }
            }
            break;
          case 'Shift':
            isShiftOn1 = !isShiftOn1;
            if (isShiftOn1) {
              keyboardButtons[j].classList.add('active');
              if (!isCapsLockOn1) {
                setStatus(`caseUp${localStorage.getItem('lang')}`);
              } else {
                setStatus(`shiftCaps${localStorage.getItem('lang')}`);
              }
            } else {
              keyboardButtons[j].classList.remove('active');
              if (isCapsLockOn1) {
                setStatus(`caps${localStorage.getItem('lang')}`);
              } else {
                setStatus(`caseDown${localStorage.getItem('lang')}`);
              }
            }
            break;
          case 'Ctr':
            keyboardButtons[j].classList.add('active');
            setTimeout(() => {
              keyboardButtons[j].classList.remove('active');
            }, 200);
            break;
          case 'Win':
            keyboardButtons[j].classList.add('active');
            setTimeout(() => {
              keyboardButtons[j].classList.remove('active');
            }, 200);
            break;
          case 'Alt':
            keyboardButtons[j].classList.add('active');
            setTimeout(() => {
              keyboardButtons[j].classList.remove('active');
            }, 200);
            break;
          case 'Enter':
            textarea.value += '\n';
            keyboardButtons[j].classList.add('active');
            setTimeout(() => {
              keyboardButtons[j].classList.remove('active');
            }, 200);
            break;
          case 'Backspace':
            keyboardButtons[j].classList.add('active');
            setTimeout(() => {
              keyboardButtons[j].classList.remove('active');
            }, 200);
            textarea.value = textarea.value.slice(0, textarea.selectionStart - 1)
            + textarea.value.slice(textarea.selectionStart, textarea.value.length);
            break;
          case 'Del':
            keyboardButtons[j].classList.add('active');
            setTimeout(() => {
              keyboardButtons[j].classList.remove('active');
            }, 200);
            textarea.value = textarea.value.slice(0, textarea.selectionStart)
            + textarea.value.slice(textarea.selectionStart + 1, textarea.value.length);
            break;
          case 'Space':
            keyboardButtons[j].classList.add('active');
            setTimeout(() => {
              keyboardButtons[j].classList.remove('active');
            }, 200);
            textarea.value += ' ';
            break;
          default:
            textarea.value += keyboardButtons[j].innerText;
            keyboardButtons[j].classList.add('active');
            setTimeout(() => {
              keyboardButtons[j].classList.remove('active');
            }, 200);
            break;
        }
      });
    }
  }

  document.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'Tab':
        e.preventDefault();
        textarea.value += '    ';
        break;
      case 'CapsLock':
        isCapsLockOn = !isCapsLockOn;
        if (isCapsLockOn) {
          searchKey(e.key).classList.add('active');
          if (!isShiftOn) {
            setStatus(`caps${localStorage.getItem('lang')}`);
          } else {
            setStatus(`shiftCaps${localStorage.getItem('lang')}`);
          }
        } else {
          searchKey(e.key).classList.remove('active');
          if (isShiftOn) {
            setStatus(`caseUp${localStorage.getItem('lang')}`);
          } else {
            setStatus(`caseDown${localStorage.getItem('lang')}`);
          }
        }
        break;
      case 'Shift':
        isShiftOn = !isShiftOn;
        setTimeout(() => {
          if (isShiftOn) {
            searchKey(e.key).classList.add('active');
            if (!isCapsLockOn) {
              setStatus(`caseUp${localStorage.getItem('lang')}`);
            } else {
              setStatus(`shiftCaps${localStorage.getItem('lang')}`);
            }
          }
        }, 200);
        document.addEventListener('keyup', (event) => {
          setTimeout(() => {
            if (event.key === 'Shift') {
              isShiftOn = false;
              searchKey(event.key).classList.remove('active');
              if (isCapsLockOn) {
                setStatus(`caps${localStorage.getItem('lang')}`);
              } else {
                setStatus(`caseDown${localStorage.getItem('lang')}`);
              }
            }
          }, 200);
        });
        break;
      case ' ':
        textarea.value += e.key;
        searchKey('Space').classList.add('active');
        setTimeout(() => {
          searchKey('Space').classList.remove('active');
        }, 200);
        break;
      case 'Enter':
        textarea.value += '\n';
        searchKey(e.key).classList.add('active');
        setTimeout(() => {
          searchKey(e.key).classList.remove('active');
        }, 200);
        break;
      case 'Backspace':
        searchKey(e.key).classList.add('active');
        setTimeout(() => {
          searchKey(e.key).classList.remove('active');
        }, 200);
        textarea.value = textarea.value.slice(0, textarea.selectionStart - 1)
        + textarea.value.slice(textarea.selectionStart, textarea.value.length);
        break;
      case 'Delete':
        searchKey('Del').classList.add('active');
        setTimeout(() => {
          searchKey('Del').classList.remove('active');
        }, 200);
        break;
      case 'Alt':
        searchKey(e.key).classList.add('active');
        setTimeout(() => {
          searchKey(e.key).classList.remove('active');
        }, 200);
        document.addEventListener('keydown', (event) => {
          if (event.key === 'Control') {
            if (localStorage.getItem('lang') === 'Eng') {
              localStorage.setItem('lang', 'Ru');
            } else {
              localStorage.setItem('lang', 'Eng');
            }
            setLanguage();
          }
        });
        break;
      case 'Control':
        searchKey('Ctr').classList.add('active');
        setTimeout(() => {
          searchKey('Ctr').classList.remove('active');
        }, 200);
        break;
      case 'ArrowDown':
        textarea.value += '↓';
        searchKey('↓').classList.add('active');
        setTimeout(() => {
          searchKey('↓').classList.remove('active');
        }, 200);
        break;
      case 'ArrowUp':
        textarea.value += '↑';
        searchKey('↑').classList.add('active');
        setTimeout(() => {
          searchKey('↑').classList.remove('active');
        }, 200);
        break;
      case 'ArrowLeft':
        textarea.value += '←';
        searchKey('←').classList.add('active');
        setTimeout(() => {
          searchKey('←').classList.remove('active');
        }, 200);
        break;
      case 'ArrowRight':
        textarea.value += '→';
        searchKey('→').classList.add('active');
        setTimeout(() => {
          searchKey('→').classList.remove('active');
        }, 200);
        break;
      default:
        textarea.value += e.key;
        if (searchKey(e.key)) {
          searchKey(e.key).classList.add('active');
          setTimeout(() => {
            searchKey(e.key).classList.remove('active');
          }, 200);
        }
    }
  });
}
