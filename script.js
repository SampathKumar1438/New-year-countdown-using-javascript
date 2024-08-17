function updateCountdown() {
    const newYearDate = new Date('January 1, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const timeRemaining = newYearDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    if (timeRemaining < 0) {
        clearInterval(interval);
        document.querySelector('.countdown').textContent = 'Happy New Year!';
    }
}

const interval = setInterval(updateCountdown, 1000);
