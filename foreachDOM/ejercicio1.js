const showAnswer = () => {
    document.querySelectorAll('.red').forEach((obj, i) => {
        obj.style.backgroundColor = 'red';
    });
}
document.querySelector('button').addEventListener('click', showAnswer);