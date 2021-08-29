const timer = () => {
    const target = new Date('October 31, 2021 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = target - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const daysLeft = Math.floor(difference / day);
    const hoursLeft = Math.floor((difference % day) / hour);
    const minutesLeft = Math.floor((difference % hour) / minute);
    const secondsLeft = Math.floor((difference % minute) / second);

    document.querySelector('.day').innerText = daysLeft;
    document.querySelector('.hour').innerText = hoursLeft;
    document.querySelector('.minute').innerText = minutesLeft;
    document.querySelector('.second').innerText = secondsLeft;
}
let countdown = setInterval(timer, 1000);
export default countdown;