export function ConvertDateNowInPtBrCustom() {
    let dateNow = new Date();

    let weekday = new Array(7);
    weekday[0] = "Domingo";
    weekday[1] = "Segunda-feira";
    weekday[2] = "Terça-feira";
    weekday[3] = "Quarta-feira";
    weekday[4] = "Quinta-feira";
    weekday[5] = "Sextou!";
    weekday[6] = "Sábado";
    let weekNow = weekday[dateNow.getDay()];

    let monthPtBr = new Array(12);
    monthPtBr[0] = "janeiro";
    monthPtBr[1] = "fevereiro";
    monthPtBr[2] = "março";
    monthPtBr[3] = "abril";
    monthPtBr[4] = "maio";
    monthPtBr[5] = "junho";
    monthPtBr[6] = "julho";
    monthPtBr[7] = "agosto";
    monthPtBr[8] = "setembro";
    monthPtBr[9] = "outubro";
    monthPtBr[10] = "novembro";
    monthPtBr[11] = "dezembro";
    let monthNow = monthPtBr[dateNow.getMonth()];

    return `${weekNow === "Sextou!" ? `Hoje é... ${weekNow}` : `Hoje é, ${weekNow},`}\n ${dateNow.getDay()} de ${monthNow} de ${dateNow.getFullYear()}`;
}