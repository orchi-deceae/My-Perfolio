function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_1agty0e","template_tt7nbeg",parms).then(alert("Email Sent!!! -by Elvis"))
}



function fastForwardAnimations() {
    document.querySelectorAll("*").forEach(
        el => {
            let computedstyle = window.getComputedStyle(el);
            let animationDuration = computedstyle.getPropertyValue("animation-duration");
            let animationDelay = computedstyle.getPropertyValue("animation-delay");

            let duration = parseFloat(animationDuration) ||0;
            let delay = parseFloat(animationDelay) ||0;

            if (duration > 0) {
                el.style.animationDelay = `-${duration + delay}s`;
                el.style.animationIterationCount = "1";
            }
        }
    );
}

document.getElementById("skipAnimation").addEventListener("click", fastForwardAnimations);

document.addEventListener(
    "keydown", function(event){
        if (event.key.toLowerCase() === "c") {
            fastForwardAnimations();
        }
    }
);

