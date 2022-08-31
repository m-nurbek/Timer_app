window.onload = function() {
    let seconds = 00
    let tens = 00
    let appendTens = document.getElementById("tens")
    let appendSeconds = document.getElementById("sec")
    let buttonStart = document.getElementById("start")
    let buttonStop = document.getElementById("stop")
    let buttonReset = document.getElementById("reset")
    let Interval

    buttonStart.onclick = function() {
        clearInterval(Interval)
        Interval = setInterval(startTimer, 10)
    }

    function startTimer() {
        tens++
        if (tens > 59) {
            tens = 00
            seconds++
            if (seconds > 59) {
                seconds = 00
            }
        }
        let tensval
        let secval
        if (tens < 10) {
            tensval = "0" + tens
        } else {
            tensval = tens
        }
        if (seconds < 10) {
            secval = "0" + seconds
        } else {
            secval = seconds
        }
        appendTens.innerHTML = tensval
        appendSeconds.innerHTML = secval
    }

    buttonStop.onclick = function() {
        clearInterval(Interval)
    }
    buttonReset.onclick = function() {
        clearInterval(Interval)
        tens = 00
        seconds = 00
        appendTens.innerHTML = "00"
        appendSeconds.innerHTML = "00"
    }
}
