import Button from './Button';
import {
  caseDownEng, caseDownRu, caseUpEng, caseUpRu, capsEng, capsRu, shiftCapsEng, shiftCapsRu,
} from './keys';

export default function generateKeyboard() {
  const selectors = ['.firstStroke', '.secondStroke', '.thirdStroke', '.fourthStroke', '.fifthStroke'];
  const board = document.querySelector('.keyboard');

  const firstStroke = document.createElement('div');
  firstStroke.className = 'firstStroke';

  const secondStroke = document.createElement('div');
  secondStroke.className = 'secondStroke';

  const thirdStroke = document.createElement('div');
  thirdStroke.className = 'thirdStroke';

  const fourthStroke = document.createElement('div');
  fourthStroke.className = 'fourthStroke';

  const fifthStroke = document.createElement('div');
  fifthStroke.className = 'fifthStroke';

  board.append(firstStroke);
  board.append(secondStroke);
  board.append(thirdStroke);
  board.append(fourthStroke);
  board.append(fifthStroke);

  for (let i = 0; i < caseDownEng.length; i += 1) {
    for (let j = 0; j < caseDownEng[i].length; j += 1) {
      const button = new Button('50px', '50px', caseDownRu[i][j], caseUpRu[i][j], capsRu[i][j], shiftCapsRu[i][j], caseDownEng[i][j], caseUpEng[i][j], capsEng[i][j], shiftCapsEng[i][j]);
      const newButton = button.createButton();

      board.querySelector(selectors[i]).append(newButton);
    }
  }
}
