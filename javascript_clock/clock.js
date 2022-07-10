let userName = prompt("Adınız:")
myName.innerHTML += userName;

function showTime() {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let days = today.getDay()
    let day =["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById('myClock').innerHTML = hours + ":" + minutes + ":" + seconds + " " + day[days];
    setTimeout(showTime, 1000);
}
  
function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
}