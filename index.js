class Test {
  constructor(elem) {
    this.elem = elem;
  }
}

window.onload = function() {
  const btn = document.getElementById('btn');
  btn.addEventListener('click', function() {
    const div = document.createElement('div');
    div.innerHTML = 'test div';
    div['rock'] = new Test(div);
    const newBtn = document.createElement('button');
    newBtn.innerText = 'newButton';
    const listener = function eventListener(e) {
      const p = e.target.parentNode;
      // 1. remove button from div will avoid memory leak
      // p.removeChild(e.target);

      // 2. remove listener from button will not avoid memory leak
      // e.target.removeEventListener('click', listener);
      document.body.removeChild(p);
    };
    newBtn.addEventListener('click', listener);
    div.appendChild(newBtn);
    document.body.appendChild(div);
  });
};
