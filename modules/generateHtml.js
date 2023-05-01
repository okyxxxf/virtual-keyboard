export default function generateHtml() {
  const body = document.querySelector('body');

  const main = document.createElement('main');
  main.className = 'main-page';

  const sectionTextarea = document.createElement('section');
  sectionTextarea.className = 'textarea';

  const header = document.createElement('h1');
  header.className = 'header';
  header.innerText = 'Виртуальная клавиатура windows';

  const textarea = document.createElement('textarea');
  textarea.rows = 16;
  textarea.cols = 80;

  const sectionKeyboard = document.createElement('section');
  sectionKeyboard.className = 'keyboard';

  main.append(sectionTextarea);

  sectionTextarea.append(header);
  sectionTextarea.append(textarea);

  main.append(sectionKeyboard);
  body.append(main);
}
