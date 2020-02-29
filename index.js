class Test {
  constructor(elem) {
    this.elem = elem;
  }
}

window.onload = function() {
  const btn = document.getElementById('btn');
  const testListener = function() {
    const newBtn = document.createElement('button');
    newBtn.innerText = 'newButton';
    newBtn.rock = new Test(newBtn);
    const listener = function eventListener(e) {};
    newBtn.addEventListener('click', listener);
    document.body.appendChild(newBtn);
    setTimeout(function() {
      document.body.removeChild(newBtn);
    }, 5000);
  };
  btn.addEventListener('click', testListener);
};
