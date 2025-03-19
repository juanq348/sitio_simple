document.addEventListener("DOMContentLoaded", () => {
    const inputText = document.getElementById("inputText");

    let popupWindow = null;

    inputText.addEventListener("keypress", (event) => {
        if (event.key === "Enter" && inputText.value.trim() !== "") {
            popupWindow = window.open("", "_blank", "width=400,height=300");

            if (popupWindow) {
                popupWindow.document.write(`
                    <html>
                        <head>
                            <title>Texto Ingresado</title>
                            <style>
                                body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
                                #inputPopup { width: 80%; padding: 10px; font-size: 20px; }
                                #changeColor { margin-top: 10px; padding: 5px 10px; font-size: 14px; cursor: pointer; border: none; }
                            </style>
                        </head>
                        <body id="popupBody">
                            <input type="text" id="inputPopup" value="${inputText.value}" readonly>
                            <br>
                            <button id="changeColor">Cambiar Color</button>

                            <script>
                                let colors = [
                                    { bg: "white", text: "black" },
                                    { bg: "black", text: "white" },
                                    { bg: "lightblue", text: "red" }
                                ];
                                let colorIndex = 0;

                                document.getElementById("changeColor").addEventListener("click", () => {
                                    let inputPopup = document.getElementById("inputPopup");
                                    let popupBody = document.getElementById("popupBody");
                                    let currentColors = colors[colorIndex];

                                    // Cambiar colores de fondo y texto
                                    popupBody.style.backgroundColor = currentColors.bg;
                                    popupBody.style.color = currentColors.text;
                                    inputPopup.style.backgroundColor = currentColors.bg;
                                    inputPopup.style.color = currentColors.text;

                                    colorIndex = (colorIndex + 1) % colors.length;
                                });
                            </script>
                        </body>
                    </html>
                `);
            }
        }
    });
});
