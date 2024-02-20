function submitForm() {
    // Collect form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;


    
        emailjs.send("service_m9gm10a", "template_mk2ocjb", {
            from_name: name,
            email_id: email,
            subject: subject,
            message: message

        }).then(function(response) {
            
            alert("Success!")
            
            Clearform();
            
        }, function(error) {
            // Handle error
        
        });

        
    
    
function Clearform(){
    document.getElementById('message').value='';
    document.getElementById('subject').value='';
    document.getElementById('email').value='';
    document.getElementById('name').value='';
    name=document.getElementById('message').value;
    console.log(name);
}

    

}