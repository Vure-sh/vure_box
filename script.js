//dom elements
const clk = document.getElementById("clock");
const upt = document.getElementById('uptime');
const btns = document.querySelectorAll("#tabs button");
const panels = document.querySelectorAll('.panel');
const jbox = document.getElementById("json-box")
const jstat = document.getElementById('json-status')
const pad = document.getElementById("pad");
const charcnt = document.getElementById('char-count');
const b_in = document.getElementById("b64-in")
const b_out = document.getElementById("b64-out")
const b_stat = document.getElementById('b64-status')
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

if (localStorage.getItem("pad")) {
    pad.value = localStorage.getItem("pad")
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
    localStorage.setItem('pad', pad.value);
}
document.getElementById('btn-fmt').onclick = () => {
    try {
        let raw = JSON.parse(jbox.value)

        //the function argument tells json.stringify to skip the replacer function argument by replacingg it wiht null
        jbox.value = JSON.stringify(raw, null, 2);

        jstat.innerText = "ok"
        jstat.style.color = "#69825b"
    } catch (e) {
        // console.log(e.message)
        jstat.innerText = "bad json"
        jstat.style.color = "#8c4a44"
    }
}

document.getElementById('btn-min').onclick = () => {
    try {
        let raw = JSON.parse(jbox.value)
        jbox.value = JSON.stringify(raw);
        jstat.innerText = "ok"
        jstat.style.color = "#69825b"
    } catch (e) {
        jstat.innerText = "bad json"
        jstat.style.color = "#8c4a44"
    }
}

document.getElementById('btn-enc').onclick = () => {
    //thank you js for having a built-in function for base64
    try {
        b_out.value = btoa(b_in.value)
        b_stat.innerText = "ok"
        b_stat.style.color = "#69825b"
    } catch (e) {
        // console.log(e)
        b_stat.innerText = "encode err"
        b_stat.style.color = "#8c4a44"
    }
}

document.getElementById('btn-dec').onclick = () => {
    try {
        b_out.value = atob(b_in.value.trim())
        b_stat.innerText = "ok"
        b_stat.style.color = "#69825b"
    } catch (e) {
        b_stat.innerText = "invalid b64"
        b_stat.style.color = "#8c4a44"
    }
}