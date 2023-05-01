export default class Button {
  constructor(
    height,
    width,
    caseDownRu,
    caseUpRu,
    capsRu,
    shiftCapsRu,
    caseDownEng,
    caseUpEng,
    capsEng,
    shiftCapsEng,
  ) {
    this.height = height;
    this.width = width;
    this.caseDownRu = caseDownRu;
    this.caseUpRu = caseUpRu;
    this.capsRu = capsRu;
    this.shiftCapsRu = shiftCapsRu;
    this.caseDownEng = caseDownEng;
    this.caseUpEng = caseUpEng;
    this.capsEng = capsEng;
    this.shiftCapsEng = shiftCapsEng;
  }

  createButton() {
    const button = document.createElement('div');
    button.style.height = this.height;
    button.style.width = this.width;
    button.className = 'button';

    const ru = document.createElement('span');
    const eng = document.createElement('span');

    const caseDownRu = document.createElement('span');
    caseDownRu.className = 'caseDownRu';
    caseDownRu.innerText = this.caseDownRu;
    caseDownRu.classList.add('hidden');

    const caseUpRu = document.createElement('span');
    caseUpRu.className = 'caseUpRu';
    caseUpRu.innerText = this.caseUpRu;
    caseUpRu.classList.add('hidden');

    const capsRu = document.createElement('span');
    capsRu.className = 'capsRu';
    capsRu.innerText = this.capsRu;
    capsRu.classList.add('hidden');

    const shiftCapsRu = document.createElement('span');
    shiftCapsRu.className = 'shiftCapsRu';
    shiftCapsRu.innerText = this.shiftCapsRu;
    shiftCapsRu.classList.add('hidden');

    const caseDownEng = document.createElement('span');
    caseDownEng.className = 'caseDownEng';
    caseDownEng.innerText = this.caseDownEng;
    caseDownEng.classList.add('hidden');

    const caseUpEng = document.createElement('span');
    caseUpEng.className = 'caseUpEng';
    caseUpEng.innerText = this.caseUpEng;
    caseUpEng.classList.add('hidden');

    const capsEng = document.createElement('span');
    capsEng.className = 'capsEng';
    capsEng.innerText = this.capsEng;
    capsEng.classList.add('hidden');

    const shiftCapsEng = document.createElement('span');
    shiftCapsEng.className = 'shiftCapsEng';
    shiftCapsEng.innerText = this.shiftCapsEng;
    shiftCapsEng.classList.add('hidden');

    ru.append(caseDownRu);
    ru.append(caseUpRu);
    ru.append(capsRu);
    ru.append(shiftCapsRu);

    eng.append(caseDownEng);
    eng.append(caseUpEng);
    eng.append(capsEng);
    eng.append(shiftCapsEng);

    button.append(ru);
    button.append(eng);

    return button;
  }
}
