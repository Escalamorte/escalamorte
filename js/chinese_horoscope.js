function Chinese_horoscope() {
    let year = document.getElementById('year').value;
    document.getElementById('Chinese_horoscope').innerHTML = year;
    while (year >= 1912) {
        year -= 12;
    }
    switch (year - 1899) {
        case 1:
            document.getElementById('Chinese_horoscope').innerHTML = "Rat";
            break;
        case 2:
            document.getElementById('Chinese_horoscope').innerHTML = "Ox";
            break;
        case 3:
            document.getElementById('Chinese_horoscope').innerHTML = "Tiger";
            break;
        case 4:
            document.getElementById('Chinese_horoscope').innerHTML = "Rabbit";
            break;
        case 5:
            document.getElementById('Chinese_horoscope').innerHTML = "Dragon";
            break;
        case 6:
            document.getElementById('Chinese_horoscope').innerHTML = "Snake";
            break;
        case 7:
            document.getElementById('Chinese_horoscope').innerHTML = "Horse";
            break;
        case 8:
            document.getElementById('Chinese_horoscope').innerHTML = "Goat";
            break;
        case 9:
            document.getElementById('Chinese_horoscope').innerHTML = "Monkey";
            break;
        case 10:
            document.getElementById('Chinese_horoscope').innerHTML = "Rooster";
            break;
        case 11:
            document.getElementById('Chinese_horoscope').innerHTML = "Dog";
            break;
        case 12:
            document.getElementById('Chinese_horoscope').innerHTML = "Pig";
            break;
        default:
            document.getElementById('Chinese_horoscope').innerHTML = "Hmm... Something went wrong...";
            document.getElementById('Chinese_horoscope').innerHTML = "Check your birth year. It must be greater or equal 1900";
            break;
    }
}
function horoscope() {
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;


}