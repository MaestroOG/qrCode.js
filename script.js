const imgBox = document.getElementById("img-box");
const qrImg = document.getElementById("qr-img");
const qrText = document.getElementById("qrText");

function generateQR() {
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value
}

document.addEventListener("keydown", (e) => {
    let name = e.code;
    if (e.code === "Enter") {
        generateQR();
    }
})