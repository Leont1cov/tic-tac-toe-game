const isVictory = (player, copy) => {
    for (let i = 0; i < 3; i++) {
        // строки
        if(copy[i][0] === player && copy[i][1] === player && copy[i][2] === player) return true;
        // столбцы
        if(copy[0][i] === player && copy[1][i] === player && copy[2][i] === player) return true;
    }
    //  Диагональ
    if(copy[0][0] === player && copy[1][1] === player && copy[2][2] === player) return true;
    if(copy[0][2] === player && copy[1][1] === player && copy[2][0] === player) return true;

    return false;
}

export default isVictory;