// Função para adicionar valores ao display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Função para calcular o resultado
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}

// Função para limpar o display
document.querySelector('.reset').addEventListener('click', function() {
    document.getElementById('display').value = '';
});

// Função para deletar o último caractere
document.querySelector('.del').addEventListener('click', function() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
});
