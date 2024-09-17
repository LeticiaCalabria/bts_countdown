const countdownElements = {
    jhope: {
        day: document.getElementById("day-jhope"),
        hour: document.getElementById("hour-jhope"),
        min: document.getElementById("min-jhope"),
        sec: document.getElementById("sec-jhope"),
        date: new Date("Oct 17, 2024 00:00:00").getTime()
    },
    rm: {
        day: document.getElementById("day-rm"),
        hour: document.getElementById("hour-rm"),
        min: document.getElementById("min-rm"),
        sec: document.getElementById("sec-rm"),
        date: new Date("Jun 10, 2025 00:00:00").getTime()
    },
    v: {
        day: document.getElementById("day-v"),
        hour: document.getElementById("hour-v"),
        min: document.getElementById("min-v"),
        sec: document.getElementById("sec-v"),
        date: new Date("Jun 10, 2025 00:00:00").getTime()
    },
    jm: {
        day: document.getElementById("day-jm"),
        hour: document.getElementById("hour-jm"),
        min: document.getElementById("min-jm"),
        sec: document.getElementById("sec-jm"),
        date: new Date("Jun 11, 2025 00:00:00").getTime()
    },
    jk: {
        day: document.getElementById("day-jk"),
        hour: document.getElementById("hour-jk"),
        min: document.getElementById("min-jk"),
        sec: document.getElementById("sec-jk"),
        date: new Date("Jun 11, 2025 00:00:00").getTime()
    },
    yoongi: {
        day: document.getElementById("day-yoongi"),
        hour: document.getElementById("hour-yoongi"),
        min: document.getElementById("min-yoongi"),
        sec: document.getElementById("sec-yoongi"),
        date: new Date("Jun 21, 2025 00:00:00").getTime()
    }
};

updateCountdown();

function updateCountdown() {
    const now = new Date().getTime();
    Object.keys(countdownElements).forEach(member => {
        const { day: dayElem, hour: hourElem, min: minElem, sec: secElem, date } = countdownElements[member];
        const gap = date - now;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const days = Math.floor(gap / day);
        const hours = Math.floor((gap % day) / hour);
        const minutes = Math.floor((gap % hour) / minute);
        const seconds = Math.floor((gap % minute) / second);

        dayElem.innerText = `${days} days`;
        hourElem.innerText = `${hours} hours`;
        minElem.innerText = `${minutes} minutes`;
        secElem.innerText = `${seconds} seconds`;
    });

    setTimeout(updateCountdown, 1000);
}

