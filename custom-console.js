(function() {
    if (!window.myCustomConsole) {
        const consoleDiv = document.createElement("div");
        consoleDiv.id = "myCustomConsole";
        consoleDiv.style.cssText = "position: fixed; top: 0; left: 0; right: 0; background: #fff; border: 1px solid #ccc; padding: 10px; z-index: 9999;";
        document.body.appendChild(consoleDiv);

        const closeButton = document.createElement("button");
        closeButton.textContent = "Close";
        closeButton.style.cssText = "position: absolute; top: 10px; right: 10px;";
        closeButton.addEventListener("click", () => {
            consoleDiv.style.display = "none";
        });
        consoleDiv.appendChild(closeButton);

        const codeInput = document.createElement("textarea");
        codeInput.rows = 5;
        codeInput.placeholder = "Enter JavaScript code here...";
        codeInput.style.cssText = "width: 100%;";
        consoleDiv.appendChild(codeInput);

        const runCodeButton = document.createElement("button");
        runCodeButton.textContent = "Run Code";
        runCodeButton.style.cssText = "width: 100%;";
        runCodeButton.addEventListener("click", () => {
            const code = codeInput.value;
            try {
                const result = eval(code);
                customLog("Output: " + result);
            } catch (error) {
                customLog("Error: " + error.message);
            }
        });
        consoleDiv.appendChild(runCodeButton);

        const logDiv = document.createElement("div");
        consoleDiv.appendChild(logDiv);

        function customLog(message) {
            const logEntry = document.createElement("p");
            logEntry.textContent = message;
            logDiv.appendChild(logEntry);
        }

        window.myCustomConsole = true;
    } else {
        const consoleDiv = document.getElementById("myCustomConsole");
        consoleDiv.style.display = "block";
    }
})();
