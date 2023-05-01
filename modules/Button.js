export default class Button {
  constructor(height, width, value, color, secondValue = null) {
    this.height = height;
    this.width = width;
    this.value = value;
    this.color = color;
    this.secondValue = secondValue;
  }

  createButton() {
    const button = document.createElement('div');
    button.style.height = this.height;
    button.style.width = this.width;
    button.style.backgroundColor = this.color;
    button.className = "button";
    button.innerText = this.value;
    
    return button;
  }
}
