const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Por lo pronto, me puse a medir el tamaño de mi cariño y dio 2,416 kilómetros por la carretera. Es decir, de aquí a donde tú estás. Ahí se acabó. Y es que tú eres el principio y fin de todas las cosas. <3')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})