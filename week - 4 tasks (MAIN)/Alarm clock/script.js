const clock = document.getElementById("container");
let date;

let main = document.createElement("p");
clock.appendChild(main);
let value = () => {
  date = new Date();
  main.innerHTML = date.toLocaleString("en-us", { timeStyle: 'medium', h12: true });
};
setInterval(value, 1000);

let alarmButton = document.getElementById("alarm-button");
alarmButton.addEventListener("click", () => {
  let alarmTime = alarm();
  if (alarmTime) {
    let intervalId = setInterval(() => {
      let currentTime = new Date().getTime();
      let timeDifference = alarmTime - currentTime;
      if (timeDifference <= 0) {
        clearInterval(intervalId);
        alert("Alarm time has arrived!");
      } else {
        let minutesLeft = Math.floor(timeDifference / 60000);
        let secondsLeft = Math.floor((timeDifference % 60000) / 1000);
        let timeString = `${minutesLeft.toString().padStart(2, "0")}:${secondsLeft.toString().padStart(2, "0")}`;
        document.getElementById("alarm-time").innerHTML = timeString;
      }
    }, 1000);
  }
});

function alarm() {
  let a = prompt("Enter the alarm time", "    in mins");
  if (a < 60) {
    alert(`Alarm set for ${a} minutes from now`);
    return a * 60000; // convert minutes to milliseconds
  } else {
    let currentTime = date.getTime();
    let alarmDateTime = new Date(currentTime + (a * 60000));
    let alarmHour = alarmDateTime.getHours();
    let alarmMinute = alarmDateTime.getMinutes();
    alert(`Alarm set for ${alarmHour}:${alarmMinute}`);
    return alarmDateTime.getTime(); // return the timestamp
  }
}