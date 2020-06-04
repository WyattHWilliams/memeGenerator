const form = document.querySelector('#memeForm');
const topText = document.querySelector('input[name="topText"]');
const botText = document.querySelector('input[name="botText"]');
const image = document.querySelector('input[name="image"]');
const subBtn = document.querySelector('input[type="submit"]');
const memeList = document.querySelector('#memeList');

function makeMeme(img, upText, dnText) {
    const container = document.createElement('div');
    const mimage = document.createElement('div');
    const text1 = document.createElement('div');
    const text2 = document.createElement('div');
    const btn = document.createElement('button');
    
    container.classList.add('memeContainer');
    text1.innerText = upText;
    text1.classList.add('topText');
    text2.innerText = dnText;
    text2.classList.add('botText');
    mimage.classList.add('image');
    mimage.style.backgroundImage = `url('${img}')`;
    btn.innerText = 'REMOVE';
    btn.classList.add('remove');
    container.appendChild(mimage);
    container.appendChild(text1);
    container.appendChild(text2);
    container.appendChild(btn);

    return container
}

memeList.addEventListener('click', function(e) {
    if(e.target.className === 'remove') {
        e.target.parentElement.remove();
    }
})

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(`Info Submited: ${topText.value}, ${botText.value}, ${image.value}`);
    const item = makeMeme(image.value, topText.value, botText.value);
    memeList.appendChild(item);
    topText.value = ''
    botText.value = ''
    image.value = ''
})