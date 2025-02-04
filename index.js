function updateTime() {
    const now = new Date();
    const utcPlusOne = new Date(now.getTime() + 3600000); // Add 1 hour (3600000ms)

    // Format the time properly
    const hours = String(utcPlusOne.getUTCHours()).padStart(2, "0");
    const minutes = String(utcPlusOne.getUTCMinutes()).padStart(2, "0");
    const seconds = String(utcPlusOne.getUTCSeconds()).padStart(2, "0");

    document.getElementById("utc-time").innerText = `UTC+1 Time: ${hours}:${minutes}:${seconds}`;
}

// Update every second
setInterval(updateTime, 1000);

// Call immediately to avoid 1s delay
updateTime();
