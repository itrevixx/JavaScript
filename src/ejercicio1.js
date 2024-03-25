const image = document.querySelector('img');

let foto1 = false;

const changeImage = () => {


    foto1 = !foto1; //true
    if (foto1)
        image.setAttribute('src', './img/PinguLinux_Ying_Yang.png');
    else
        image.setAttribute('src', './img/PinguLinux_Yoda.jpg');

}

image.addEventListener('click', changeImage);