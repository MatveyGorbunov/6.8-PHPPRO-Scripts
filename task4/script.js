const linkChange = document.querySelector('a');

linkChange.addEventListener('click', () => {
    linkChange.textContent = prompt('Измените текст ссылки на пользовательский');
});


linkChange.addEventListener('click', (event) => {
    event.preventDefault();
});
