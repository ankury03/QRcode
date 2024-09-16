let qr = document.querySelector("#qr");   
let image = document.querySelector("#imgBox");   
let qrtext = document.querySelector("#qrtext");   

 function getQR() {
    if(qrtext.value.trim().length > 0){
        qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
        image.classList.add("show-img");
    }else{
        qrtext.classList.add("error");
        setTimeout(() => {
            qrtext.classList.remove("error");
        }, 1000);
    }

}