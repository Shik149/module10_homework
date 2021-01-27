let value = prompt('введи число');

if (isNaN(+value)) {
    alert('Упс, кажется, вы ошиблись');
} else {
    if (+value & 1) {
        alert('Нечетное');
    } else {
        alert('Четное');
    }
}