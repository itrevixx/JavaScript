let i = 0;
const sliderWidth = 256;
const slider = document.querySelector('.slider');
const moveSlider = () => {
    i = i > -4 ? i - 1 : 0;
    console.log(i)
    slider.style.marginLeft = sliderWidth * i + 'px';
}
document.querySelector('.btn').addEventListener('click', moveSlider);