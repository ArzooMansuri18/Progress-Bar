
const progressBar = document.querySelector("#progress-bar");
const percentage = document.querySelector("#percentage");
const startBtn = document.querySelector("#start-btn");
const againBtn = document.querySelector("#again");

againBtn.style.display = "none";
let progress;
let interval;

function startLoading(){
    clearInterval(interval);

    progress = 0;
    progressBar.style.width = "0%";
    percentage.innerText = "0%";
    againBtn.style.display = "none";

    setTimeout(() => {
        interval = setInterval(function () {
        progress++;
        progressBar.style.width = progress + "%";
        percentage.innerText = progress + "%";

        if(progress >= 100){
            clearInterval(interval);
            startBtn.innerText = "Completed!";
            startBtn.disabled = true;
            againBtn.style.display = "inline-block";
        }
    }, 50);
    }, 1000);
    
}

startBtn.addEventListener("click", startLoading);
againBtn.addEventListener("click", startLoading);
