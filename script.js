const textSlider = document.querySelector('.textSlider');
const textItems = document.querySelectorAll('.text');
let currentTextIndex = 0;

function slideText(direction) {
    if (direction === 'left') {
        currentTextIndex = (currentTextIndex === 0) ? textItems.length - 1 : currentTextIndex - 1;
    } else {
        currentTextIndex = (currentTextIndex + 1) % textItems.length;
    }
    const translateX = -currentTextIndex * 100; // 100% width shift
    textSlider.style.transform = `translateX(${translateX}%)`;
}

document.querySelector('.Left').addEventListener('click', () => slideText('left'));
document.querySelector('.Right').addEventListener('click', () => slideText('right'));

// Auto-slide text
setInterval(() => slideText('right'), 4000);


