const consoleLog = document.querySelector('#consoleLog');
const alertId = document.querySelector('#alertId');
const promptId = document.querySelector('#promptId');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль')
});

alertId.addEventListener('click', () => {
    alert('Показывает диалоговое окно с сообщением и кнопкой ОК')
    });

promptId.addEventListener('click', () => {
        alert('Показывает диалоговое окно с запросом на ввод текста')
        });