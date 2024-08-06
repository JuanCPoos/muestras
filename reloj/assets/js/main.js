document.addEventListener("DOMContentLoaded", function() {
    function updateClock() {
        const now = new Date();
        
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        
        document.getElementById('hora-left').textContent = Math.floor(hours / 10);
        document.getElementById('hora-right').textContent = hours % 10;

        document.getElementById('minutos-left').textContent = Math.floor(minutes / 10);
        document.getElementById('minutos-right').textContent = minutes % 10;

        document.getElementById('segundos-left').textContent = Math.floor(seconds / 10);
        document.getElementById('segundos-right').textContent = seconds % 10;
    }

    setInterval(updateClock, 1000);
    updateClock(); // Initial call to set the clock immediately
});