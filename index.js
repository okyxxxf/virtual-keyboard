import generateKeyboard from './modules/generateKeyboard';
import generateHtml from './modules/generateHtml';
import setLanguage from './modules/setLanguage';

window.onload = () => {
  generateHtml();
  generateKeyboard();
  setLanguage();
};
