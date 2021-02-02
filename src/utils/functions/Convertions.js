export function ConvertDateNowInText() {
    let dateNow = new Date();

    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    let weekNow = weekday[dateNow.getDay()];

    let monthEng = new Array(12);
    monthEng[0] = "January";
    monthEng[1] = "February";
    monthEng[2] = "March";
    monthEng[3] = "April";
    monthEng[4] = "May";
    monthEng[5] = "June";
    monthEng[6] = "July";
    monthEng[7] = "August";
    monthEng[8] = "September";
    monthEng[9] = "October";
    monthEng[10] = "November";
    monthEng[11] = "December";
    let monthNow = monthEng[dateNow.getMonth()];

    return `${`Today is ${weekNow},`} ${monthNow} ${dateNow.getDay()}, ${dateNow.getFullYear()}`;
}

export function ConvertDesktopInMobile() {
    let width = window.innerWidth;

    if (width < 501) {
        return "smartphone";
    } else if (width > 500 && width < 801) {
        return "tablet";
    } else {
        return "desktop"
    }
}

export function ConvertDateInText(date) {
    let dateEng = new Date(date);

    let monthEng = new Array(12);
    monthEng[0] = "January";
    monthEng[1] = "February";
    monthEng[2] = "March";
    monthEng[3] = "April";
    monthEng[4] = "May";
    monthEng[5] = "June";
    monthEng[6] = "July";
    monthEng[7] = "August";
    monthEng[8] = "September";
    monthEng[9] = "October";
    monthEng[10] = "November";
    monthEng[11] = "December";
    let month = monthEng[dateEng.getMonth()];

    return `${month} ${dateEng.getDate()}, ${dateEng.getFullYear()}`
}