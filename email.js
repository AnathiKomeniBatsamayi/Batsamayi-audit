function submitForm() {
    // Collect form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;


    if(name==='' || email==='' || subject ==='' || message==='')
    {
        alert('Please fill in all fields.');
            return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
else{
    emailjs.send("service_m9gm10a", "template_mk2ocjb", {
        from_name: name,
        email_id: email,
        subject: subject,
        message: message
    }).then(function(response) {
        
        alert("Success!")
        console.log("Email sent successfully", response);
        document.getElementById('success-message').style.display = 'block';
        
    }, function(error) {
        // Handle error
        console.error("Email sending failed", error);
        
document.getElementById('form-container').style.display = 'none';
    });
}
    

    name.value='';
    email.value='';
    subject.value='';
    message.value='';

}