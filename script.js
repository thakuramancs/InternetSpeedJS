let startTime, endTime;
let btn = document.querySelector("#btn");
let speedInMbps = document.querySelector("#mbs"); 
let speedInKbps = document.querySelector("#kbs"); 
let info=document.querySelector("#info");

let imageAPI = "https://source.unsplash.com/random?topic=nature";
info.innerHTML="Check Speed";
info.style.color = "Blue";

btn.addEventListener("click", async (evt) => {
    startTime = new Date().getTime();
      info.innerHTML="Cheking...";
      info.style.color = "#FFBF00";
    let image = new Image();
    
    image.src = imageAPI;

    image.onload = async () => {
        endTime = new Date().getTime();

        // Fetch image size asynchronously
        let response = await fetch(imageAPI);
        let imageSize = response.headers.get("content-length");

        let timeDuration = (endTime - startTime) / 1000;
        let sizeInBits = imageSize * 8;
        let speedInBits = sizeInBits / timeDuration;
        let speedInKb = speedInBits / 1024;
        let speedInMb = speedInKb / 1024;

        // Assuming these are elements where you want to display the results
        speedInKbps.innerHTML = `${speedInKb} kbps`;
        speedInMbps.innerHTML = `${speedInMb} Mbps`;
        info.style.color = "green";
        info.innerHTML="Test Completed";
    };
});




