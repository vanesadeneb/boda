const countDownDate = new Date("Mar 11, 2023 15:37:25").getTime();

const updateCount = setInterval(() => {

    const now = new Date().getTime();
  
    const distance = countDownDate - now;
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  
    document.getElementById("cuenta-regresiva").innerHTML = days + ": " + hours + ": "
    + minutes;
  
    if (distance < 0) {
      clearInterval(updateCount);
      document.getElementById("cuenta-regresiva").innerHTML = "Expiró";
    }
  }, 1000);