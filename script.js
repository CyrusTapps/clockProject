let now

function masterClock(){
    const masterNow = new Date();
    now = masterNow
};



function updateClockGeo1() {
  
    const hours = now.getUTCHours() - 5; //Minus 5 hours from UTC during DST; could include 'if' to compare const endOfDST = new Date(Date.UTC(2024, 10, 3, 6, 0, 0))//
    const minutes = now.getUTCMinutes();
    const seconds = now.getUTCSeconds();

    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;
    const minuteDeg = minutes * 6 + (seconds / 60) * 6;
    const secondDeg = seconds * 6;

    document.querySelector('#hour-hand1').style.transform = `rotate(${hourDeg}deg)`;
    document.querySelector('#minute-hand1').style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector('#second-hand1').style.transform = `rotate(${secondDeg}deg)`;
}


function updateClockGeo2() {
    
    const hours = now.getUTCHours() + 1; //London GMT + 1//
    const minutes = now.getUTCMinutes();
    const seconds = now.getUTCSeconds();

    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;
    const minuteDeg = minutes * 6 + (seconds / 60) * 6;
    const secondDeg = seconds * 6;

    document.querySelector('#hour-hand2').style.transform = `rotate(${hourDeg}deg)`;
    document.querySelector('#minute-hand2').style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector('#second-hand2').style.transform = `rotate(${secondDeg}deg)`;
}


function updateClockGeo3() {
    
    const hours = now.getUTCHours() - 4; // New York GMT - 4 during DST//
    const minutes = now.getUTCMinutes();
    const seconds = now.getUTCSeconds();

    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;
    const minuteDeg = minutes * 6 + (seconds / 60) * 6;
    const secondDeg = seconds * 6;

    document.querySelector('#hour-hand3').style.transform = `rotate(${hourDeg}deg)`;
    document.querySelector('#minute-hand3').style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector('#second-hand3').style.transform = `rotate(${secondDeg}deg)`;
}


function updateClockGeo4() {
    
    const hours = now.getUTCHours() + 4; //New Delhi is GMT + 5:30//
    const minutes = now.getUTCMinutes() + 30;
    const seconds = now.getUTCSeconds();

    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;
    const minuteDeg = minutes * 6 + (seconds / 60) * 6;
    const secondDeg = seconds * 6;

    document.querySelector('#hour-hand4').style.transform = `rotate(${hourDeg}deg)`;
    document.querySelector('#minute-hand4').style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector('#second-hand4').style.transform = `rotate(${secondDeg}deg)`;
}




setInterval(masterClock, 1000);
setInterval(updateClockGeo1, 1000);
setInterval(updateClockGeo2, 1000);
setInterval(updateClockGeo3, 1000);
setInterval(updateClockGeo4, 1000);

masterClock()
updateClockGeo1();
updateClockGeo2();
updateClockGeo3();
updateClockGeo4();