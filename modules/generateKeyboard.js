import Button from './Button';
import keys from './keys';

export default function generateKeyboard(){
    let selectors = [".firstStroke", ".secondStroke", ".thirdStroke", ".fourthStroke", ".fifthStroke"];
    const board = document.querySelector('.keyboard');

    const firstStroke = document.createElement('div');
    firstStroke.className = "firstStroke";

    const secondStroke = document.createElement('div');
    secondStroke.className = "secondStroke";

    const thirdStroke = document.createElement('div');
    thirdStroke.className = "thirdStroke";

    const fourthStroke = document.createElement('div');
    fourthStroke.className = "fourthStroke";

    const fifthStroke = document.createElement('div');
    fifthStroke.className = "fifthStroke";

    board.append(firstStroke);
    board.append(secondStroke);
    board.append(thirdStroke);
    board.append(fourthStroke);
    board.append(fifthStroke);

    for(let i = 0; i < keys.length; i++){
        for(let j = 0; j < keys[i].length; j++){
            let button = new Button("50px", "50px", keys[i][j], "gray");
            board.querySelector(selectors[i]).append(button.createButton());
        }
    }

}