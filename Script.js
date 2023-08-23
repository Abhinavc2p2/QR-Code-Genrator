const wrapper = document.querySelector(".wrapper"),
    qrinput = wrapper.querySelector(".form input"),
    genratebtn = wrapper.querySelector(".form button"),
    downloadBtn = wrapper.querySelector(".download-btn");

qrimg = wrapper.querySelector(".qr-code img");

genratebtn.addEventListener("click", () => {
    let qrValue = qrinput.value;
    if (!qrValue) return;
    genratebtn.innerText = "Genrating the QR...."
        // console.log(qrValue)
    qrimg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`
    qrimg.addEventListener("load", () => {
        genratebtn.innerText = "Genrate QR code"
        wrapper.classList.add("active");
        downloadBtn.style.display = "block";
        downloadBtn.href = qrimg.src;
    })
});

document.addEventListener("DOMContentLoaded", function() {
    const refreshButton = document.getElementById("refresh-button");

    refreshButton.addEventListener("click", function() {
        location.reload();
    });
});