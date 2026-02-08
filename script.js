const btn = document.querySelector('.btn');
btn.addEventListener('click', result);

const answers = document.querySelectorAll('.answer')
const par = document.querySelector('#show');

function result(e) {
    e.preventDefault();

    let points = 0;

    answers.forEach(answer => {
        if (answer.checked) points++;
    });

    par.textContent = 'Ваши бали:' + points;
}

