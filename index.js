import generateKeyboard from './modules/generateKeyboard';
import generateHtml from './modules/generateHtml';

window.onload = () => {
  generateHtml();
  generateKeyboard();
};
