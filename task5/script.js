const textAreaRT = document.querySelector('.textAreaRT');
const defaultB = document.querySelector('#defaultB');
const outpuText = document.querySelector('#duplicateField');

textAreaRT.addEventListener('keyup', function() {
    outpuText.textContent = textAreaRT.value;
});

defaultB.addEventListener('click', function() {
    console.log(textAreaRT.value);
    textAreaRT.value = "";

    document.querySelector('#duplicateField').textContent = "";
})


