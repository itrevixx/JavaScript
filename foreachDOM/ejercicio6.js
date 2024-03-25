document.querySelectorAll('[type=radio]').forEach((r) => r.addEventListener('change', (event) => {
    let txt = '';
    document.querySelectorAll('input[type="radio"]:checked').forEach((radioChecked) => {
        txt += '' + radioChecked.closest('p').textContent + '';
    });
    document.querySelector('.result').innerHTML = txt;
}))