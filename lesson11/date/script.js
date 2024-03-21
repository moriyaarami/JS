function showTime() {
    const now = new Date();

    const date = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const result = `${date}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    document.querySelector('.time').innerHTML = result;

}
showTime();

setInterval(showTime, 1000);

