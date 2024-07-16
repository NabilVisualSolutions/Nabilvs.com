import QRCodeStyling from "qr-code-styling";

const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    dotsOptions: {
        color: "#000000",
        type: "dots"
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 20
    }
});

const textInput = document.getElementById("text-input");
const colorInput = document.getElementById("color-input");
const logoInput = document.getElementById("logo-input");
const styleSelect = document.getElementById("style-select");
const generateBtn = document.getElementById("generate-btn");
const downloadBtn = document.getElementById("download-btn");
const qrCodeContainer = document.getElementById("qr-code");

generateBtn.addEventListener("click", () => {
    const text = textInput.value;
    const color = colorInput.value;
    const style = styleSelect.value;
    const logoFile = logoInput.files[0];

    if (logoFile) {
        const reader = new FileReader();
        reader.onload = (event) => {
            qrCode.update({
                data: text,
                dotsOptions: {
                    color: color,
                    type: style
                },
                image: event.target.result
            });
            qrCodeContainer.innerHTML = "";
            qrCode.append(qrCodeContainer);
        };
        reader.readAsDataURL(logoFile);
    } else {
        qrCode.update({
            data: text,
            dotsOptions: {
                color: color,
                type: style
            },
            image: ""
        });
        qrCodeContainer.innerHTML = "";
        qrCode.append(qrCodeContainer);
    }
});

downloadBtn.addEventListener("click", () => {
    qrCode.download({ name: "qr-code", extension: "png" });
});
