

localStorage.setItem("visitCount", visitCount);

document.addEventListener("DOMContentLoaded", function () {

    localStorage.getItem("visitCount");

   
    if (!visitCount) {
        visitCount = 0;
    }

    document.getElementById("contadorVisitas").textContent = visitCount;
      visitCount++;

    
    document.getElementById("btnReestablecer").addEventListener("click", function () {
       
        visitCount = 0;
        localStorage.setItem("visitCount", visitCount);

        document.getElementById("contadorVisitas").textContent = visitCount;
    });
});