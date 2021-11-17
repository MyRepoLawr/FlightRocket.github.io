
window.onload=function() {
    let input = document.getElementsByTagName("input");
    let pasWord = document.getElementById("password");
    let butOk = document.getElementById("ok");

    function remove() {
        for (let i = 0; i <= input.length; i++) {
            if (pasWord.value === "TrustNo1") {
                input[i].disabled = false;
                pasWord.disabled = true;
                butOk.disabled = true;
                document.querySelector(".launch").disabled = true;
            }
        }
    }

    butOk.addEventListener("click", remove);
}

function Click1(){
    let vseCheck = document.getElementsByName("checkbox");
    let vseRange = document.getElementsByName("range");
    if (Array.prototype.every.call(vseCheck, function (e) {
        return e.checked === true;
    })) {
        if (Array.prototype.every.call(vseRange, function (e) {
            return e.value === "100";
        })) {
            document.querySelector(".launch").disabled = false;
            move();
        } else {
            document.querySelector(".launch").disabled = true;
        }
    } else {
        document.querySelector(".launch").disabled = true;
    }
}
    function move() {
        let launch = document.querySelector(".launch");
        launch.onclick = function () {
            let id = null;
            let elem = document.querySelector(".rocket");
            let pos = 0;
            clearInterval(id);
            id = setInterval(frame, 10);

            function frame() {
                if (pos === 420) {
                    clearInterval(id);
                } else {
                    pos++;
                    elem.style.top = -pos + "px";
                    elem.style.left = pos + "px";
                }
            }
        }
    }

