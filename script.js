//dom elements
const clk = document.getElementById("clock");
const upt = document.getElementById('uptime')
const btns = document.querySelectorAll("#tabs button");
const panels = document.querySelectorAll('.panel');
////////////////////////////

let sec = 0

function tick() {
    let d = new Date()
    // console.log(d.toTimeString())
    clk.innerText = d.toTimeString().split(' ')[0]
}
tick();
setInterval(tick, 1000)

setInterval(() => {
    sec++
    if (sec < 60) upt.innerText = sec + "s"
    else {
        upt.innerText = Math.floor(sec / 60) + "m " + (sec % 60) + "s";
    }
}, 1000)


btns.forEach(b => {
    b.onclick = () => {
        btns.forEach(x => x.classList.remove("active"))
        panels.forEach(p => p.classList.remove('active'))
        b.classList.add("active")
        // console.log(b.dataset.target)
        document.getElementById(b.dataset.target).classList.add("active")
    }
})

const pad = document.getElementById("pad")
const charcnt = document.getElementById('char-count')

if (localStorage.getItem("pad_saved")) {
    pad.value = localStorage.getItem("pad_saved")
    // console.log("restored pad", pad.value.length)
    updt()
}

function updt() {
    let t = pad.value
    charcnt.innerText = t.length
    //leeave for now
}
pad.oninput = () => {
    updt()
    localStorage.setItem('pad_saved', pad.value);
}