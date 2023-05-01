import setStatus from './setStatus';

export default function setLanguage() {
  if (localStorage.getItem('lang')) {
    setStatus(`caseDown+${localStorage.getItem('lang')}`);
  } else {
    setStatus('caseDownEng');
  }
}
