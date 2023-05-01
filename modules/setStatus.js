export default function setStatus(style) {
  const keyboard = document.querySelector('.keyboard');
  const strokes = keyboard.querySelectorAll('div');

  for (let i = 0; i < strokes.length; i += 1) {
    const button = strokes[i].querySelectorAll('div');
    for (let j = 0; j < button.length; j += 1) {
      const languages = button[j].querySelectorAll('span');
      for (let h = 0; h < languages.length; h += 1) {
        const spans = languages[h].querySelectorAll('span');
        for (let g = 0; g < spans.length; g += 1) {
          if (spans[g].classList.contains(style)) {
            spans[g].classList.remove('hidden');
          } else {
            spans[g].classList.add('hidden');
          }
        }
      }
    }
  }
}
