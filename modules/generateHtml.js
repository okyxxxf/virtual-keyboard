export default function generateHtml() {
  const body = document.querySelector('body');

  const main = document.createElement('main');
  main.className = 'main-page';

  const sectionTextarea = document.createElement('section');
  sectionTextarea.className = 'textarea';

  const sectionKeyboard = document.createElement('section');
  sectionKeyboard.className = 'keyboard';

  main.append(sectionTextarea);
  main.append(sectionKeyboard);
  body.append(main);
}
