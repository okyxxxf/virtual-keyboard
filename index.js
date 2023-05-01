import generateKeyboard from './modules/generateKeyboard';
import generateHtml from './modules/generateHtml';
import setLanguage from './modules/setLanguage';
import setEventHandler from './modules/setEventHandler';

window.onload = () => {
  generateHtml();
  generateKeyboard();
  setLanguage();
  setEventHandler();
};
