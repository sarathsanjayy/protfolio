function mail(){
    let param = {
        name: document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    }

    emailjs.send("service_eamisf6","template_8eg3ydf",param).then(alert("Email Sent Successfully"));
}