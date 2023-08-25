
window.addEventListener('load', function () {

  const rotation = document.querySelector('.carrossel');
  const pagDivs = document.querySelectorAll('.page');

  rotation.classList.toggle('rotacao');

  for (let i = 0; i < pagDivs.length; i++) {
    let x = pagDivs[i];
    x.addEventListener('click', function Click() {
      rotation.classList.remove('rotacao');
      x.classList.toggle('zoom');
      x.addEventListener('animationstart', () => {
        pagDivs.forEach(elem => {
          elem.setAttribute('id', 'ivisivel');
        });
        x.removeAttribute('id', 'ivisivel');
        setTimeout(() => {
          x.classList.add('page', 'pause');
          Adicionar();
          x.removeEventListener('click', Click);
          Button();
        }, 4000);
      });
    });
  };

  function Button() {
    let DivPags = document.querySelectorAll('.page');
    DivPags.forEach(ev => {
      let button = document.createElement('p');
      let buttontwo = document.createElement('p');
      let divbt = document.createElement('span');
      let divbt2 = document.createElement('span')
      button.setAttribute('id', 'buttonDinamicamente');
      buttontwo.setAttribute('id', 'buttonDinamicamente2');
      divbt.setAttribute('id', 'divbt')
      divbt2.setAttribute('id', 'divbt2')
      button.innerHTML = 'Fechar';
      buttontwo.innerHTML = 'Saiba Mais';
      ev.appendChild(divbt);
      ev.appendChild(divbt2);
      divbt.appendChild(button);
      divbt2.appendChild(buttontwo);
      button.addEventListener('click', Excluir)
      buttontwo.addEventListener('click', Redirection);
    });
  };

  function Adicionar() {
    let clasNone = document.querySelectorAll('.page');
    clasNone.forEach(el => {
      let ivisivel2 = el.getAttribute('id');
      if (ivisivel2 === 'ivisivel') {
        el.removeAttribute('id', 'ivisivel');
        el.setAttribute('id', 'none');
      };
    });
  };

  function Excluir() {
    let diId = document.querySelectorAll('.page');
    diId.forEach(d => {
      d.classList.remove('zoom');
      d.classList.remove('pause');
      d.removeAttribute('id', 'none');
      document.location.reload(true);
    });
  };

  function Redirection() {
    let spans = document.querySelectorAll('.page');
    spans.forEach(s => {
      let pai = s.getAttribute('class');
      if (pai === 'page zoom pause') {
        let filho = s.children[1].id;
        switch (filho) {
          case 'js':
            window.open('https://developer.mozilla.org/pt-BR/docs/Web/JavaScript');
            break;
          case 'python':
            window.open('https://docs.python.org/pt-br/3/tutorial/');
            break;
          case 'java':
            window.open('https://docs.oracle.com/javase/7/docs/api/java/lang/System.html');
            break;
          case 'c++':
            window.open('https://devdocs.io/cpp/');
            break;
          case 'php':
            window.open('https://www.php.net/manual/pt_BR/');
            break;
        };
      };
    });
  };
});
