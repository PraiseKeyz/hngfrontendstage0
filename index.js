function updateTime() {
    const now = new Date();
    document.getElementById("utc-time").innerText = `UTC Time ${now.toUTCString()}`;
};

updateTime();