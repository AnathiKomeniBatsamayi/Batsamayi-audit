
    var namme = document.getElementById('name');
    var nameVal = document.getElementById('nameVal');

    var email = document.getElementById('email');
    var emailVal = document.getElementById('emailVal');

    var subject = document.getElementById('subject');
    var subjectVal= document.getElementById('subjectVal');

    var message = document.getElementById('message');
    var messageVal = document.getElementById('messageVal');

    var company = document.getElementById('company');
    

    namme.addEventListener('input', function(event){
        console.log(event.target.value)
        if(event.target.value===''){
            
            namme.style.border = "1px solid red";
            nameVal.style.display="block";
            namme.style.marginBottom="0px"
            
            return
        }
        else{
            namme.style.border = "none";
            namme.style.marginBottom="10px"
            nameVal.style.display="none";
        }
    
        
        console.log(namme);
    });

    email.addEventListener('input', function(event){
        console.log(event.target.value)
        const emailRegex = /^[\w.%-]+@[\w.-]+\.[a-zA-Z]{2,4}$/;

        if(event.target.value===''){
            email.style.border = "1px solid red";
            emailVal.style.display="block";
            email.style.marginBottom="0px"
            
            return
        }
        else if(!emailRegex.test(event.target.value)){
            
            emailVal.style.display = "block";
            emailVal.innerText = "* Please Enter a Valid email";
            return
        }
        else{
            emailVal.style.display="none";
            email.style.marginBottom="10px"
            email.style.border = "none";
        }
    
        
        console.log(email);
    });

    subject.addEventListener('input', function(event){
        console.log(event.target.value)
        if(event.target.value===''){
            subject.style.border = "1px solid red";
            subjectVal.style.display="block";
            subject.style.marginBottom="0px"
            
            return
        }
        else{
            subject.style.border = "none";
            subject.style.marginBottom="10px"
            subjectVal.style.display="none";
        }
    
       
    });

    message.addEventListener('input', function(event){
        console.log(event.target.value)
        if(event.target.value===''){
            message.style.border = "1px solid red";
            messageVal.style.display="block";
            message.style.marginBottom="0px"
            
            return
        }
        else{
            message.style.border = "none";
            message.style.marginBottom="10px"
            messageVal.style.display="none";
        }
    
        
    });

function submitForm() {

    
    
   
   
    
    if(namme.value===""){
        namme.style.border = "1px solid red";
        nameVal.style.display="block";
        namme.style.marginBottom="0px"
        
        return
    }
    if(email.value===""){
        email.style.border = "1px solid red";
        emailVal.style.display="block";
        email.style.marginBottom="0px"

        return
    }if(subject.value===""){
        subject.style.border = "1px solid red";
        subjectVal.style.display="block";
        subject.style.marginBottom="0px"
        return
    }
    if(message.value===""){
        message.style.border = "1px solid red";
        messageVal.style.display="block";
        message.style.marginBottom="0px"
        return
    }

    if (!namme.checkValidity()) {
        
        console.log(email)
        namme.reportValidity();
        return;
    }
    if (!email.checkValidity()) {
        email.reportValidity();
        return;
    }
    if (!subject.checkValidity()) {
        subject.reportValidity();
        return;
    }
    if (!message.checkValidity()) {
        message.reportValidity();
        return;
    }

  

  
   

        console.log("I am submitting")
        emailjs.send("service_m9gm10a", "template_mk2ocjb", {
            from_name: namme.value,
            email_id: email.value,
            subject: subject.value,
            message: message.value,
            company: company.value

        }).then(function(response) {
            console.log("submited")
            alert("Email Sent Successfully! Thank you for contacting us, We will be in contact shortly")
            
            Clearform();
            
        }, function(error) {
            // Handle error
        
        });

        
    
}
function Clearform(){
    document.getElementById('message').value='';
    document.getElementById('subject').value='';
    document.getElementById('email').value='';
    document.getElementById('name').value='';
   
}




    

