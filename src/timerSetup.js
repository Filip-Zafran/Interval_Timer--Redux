
const min = 10;
let time = min * 60;

  const countDown = document.getElementById('countdown');


setInterval(updateCount, 1000);

function updateCount() {
    const min = Math.floor(time / 60);
    let sec = time % 60;

    sec = sec < 10 ? '0' + sec : sec;
        
    countDown.innerHTML = `${min} : ${sec}`;
    time--;

}




