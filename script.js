
        let isFull = false;
        let currentWidth = 0;
        let intervalId;

        function Incre() {
            let innerDiv = document.getElementById("inner");
            let display = document.getElementById("display");
            let currentWidth = parseFloat(innerDiv.style.width) || 0;
            if (!isFull && currentWidth <= 100) {
                currentWidth += 5;
                if (currentWidth === 0 || currentWidth % 5 === 0) {
                    innerDiv.style.backgroundColor = getRandomColor(); // Change background color
                }
                innerDiv.style.width = currentWidth + "%";
                display.innerText = currentWidth + "%";
                isFull = currentWidth === 100;
            }
        }

        function Decre() {
            let innerDiv = document.getElementById("inner");
            let display = document.getElementById("display");
            let currentWidth = parseFloat(innerDiv.style.width) || 0;
            intervalId = setInterval(function () {
                if (currentWidth >= 0) {
                    currentWidth -= 5;
                    if (currentWidth === 0 || currentWidth % 5 === 0) {
                        innerDiv.style.backgroundColor = getRandomColor(); // Change background color
                    }
                    innerDiv.style.width = currentWidth + "%";
                    display.innerText = currentWidth + "%";
                    if (currentWidth === 0) {
                        clearInterval(intervalId);
                    }
                }
            }, 300);
        }

        function getRandomColor() {
            const letters = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function startIncreasing() {
            intervalId = setInterval(Incre, 300);
        }

        function stopIncreasing() {
            clearInterval(intervalId);
        }