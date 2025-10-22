const clock = document.getElementById('clock') // isse hum pure document mein clock ko target kar payenge
// ab hume ek interval set karna padega ki hum woh press kare
// toh kab kab time dikhaye

setInterval(function () {
    let date = new Date();

    clock.innerHTML = date.toLocaleTimeString();
}, 1000); //1000 likha hai agar har 1 second ke baad ka time chaiye toh