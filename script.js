document.addEventListener("DOMContentLoaded", function() {
    // Function to generate a random future date (up to 5 years from now)
    function getRandomFutureDate() {
        const today = new Date();
        const randomFutureDate = new Date(today.getTime() + Math.random() * 157680000000); // 5 years in milliseconds
        return randomFutureDate.toLocaleDateString("en-GB");
    }

    // Display the random future date
    const randomDateElement = document.getElementById("random-date");
    randomDateElement.textContent = getRandomFutureDate();
});
