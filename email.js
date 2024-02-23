
    var namme = document.getElementById('name');
    var nameValid = document.getElementById('nameVal');

    var emmail = document.getElementById('email');
    var emailValid = document.getElementById('emailVal');

    var subbject = document.getElementById('subject');
    var subjectValid= document.getElementById('subjectVal');

    var messsage = document.getElementById('message');
    var messageValid = document.getElementById('messageVal');

    var company = document.getElementById('company');

    var container = document.getElementById('contactForm');
    

    namme.addEventListener('input', function(event){
        console.log(event.target.value)
        if(event.target.value===''){
            
            namme.style.border = "1px solid red";
            nameValid.style.display="block";
            namme.style.marginBottom="0px"
            container.style.height="100%";
            return
        }
        else{
            namme.style.border = "none";
            namme.style.marginBottom="10px"
            nameValid.style.display="none";
        }
    
        
        console.log(namme);
    });

    emmail.addEventListener('input', function(event){
        console.log(event.target.value)
        const emailRegex = /^[\w.%-]+@[\w.-]+\.[a-zA-Z]{2,4}$/;

        if(event.target.value===''){
            emmail.style.border = "1px solid red";
            emailValid.style.display="block";
            emmail.style.marginBottom="0px"
            container.style.height="100%";
            return
        }
        else if(!emailRegex.test(event.target.value)){
            
            emailValid.style.display = "block";
            emailValid.innerText = "* Please Enter a Valid email";
            container.style.height="100%";
            return
        }
        else{
            emailValid.style.display="none";
            emmail.style.marginBottom="10px"
            emmail.style.border = "none";
        }
    
        
        console.log(emmail);
    });

    subbject.addEventListener('input', function(event){
        console.log(event.target.value)
        if(event.target.value===''){
            subbject.style.border = "1px solid red";
            subjectValid.style.display="block";
            subbject.style.marginBottom="0px"
            container.style.height="100%";
            return
        }
        else{
            subbject.style.border = "none";
            subbject.style.marginBottom="10px"
            subjectValid.style.display="none";
        }
    
       
    });

    messsage.addEventListener('input', function(event){
        console.log(event.target.value)
        if(event.target.value===''){
            messsage.style.border = "1px solid red";
            messageValid.style.display="block";
            messsage.style.marginBottom="0px"
            container.style.height="100%";
            return
        }
        else{
            messsage.style.border = "none";
            messsage.style.marginBottom="10px"
            messageValid.style.display="none";
        }
    
        
    });

    function submitToAPI(e) {
        e.preventDefault();
      
        if(namme.value===""){
            namme.style.border = "1px solid red";
            nameValid.style.display="block";
            namme.style.marginBottom="0px"
            container.style.height="100%";
            return
        }
        if(emmail.value===""){
            emmail.style.border = "1px solid red";
            emailValid.style.display="block";
            emmail.style.marginBottom="0px"
            container.style.height="100%";
            return
        }if(subbject.value===""){
            subbject.style.border = "1px solid red";
            subjectValid.style.display="block";
            subbject.style.marginBottom="0px"
            container.style.height="100%";
            return
        }
        if(messsage.value===""){
            messsage.style.border = "1px solid red";
            messageValid.style.display="block";
            messsage.style.marginBottom="0px"
            container.style.height="100%";
            return
        }
    
        if (!namme.checkValidity()) {
            
            console.log(email)
            namme.reportValidity();
            return;
        }
        if (!emmail.checkValidity()) {
            emmail.reportValidity();
            return;
        }
        if (!subbject.checkValidity()) {
            subbject.reportValidity();
            return;
        }
        if (!messsage.checkValidity()) {
            messsage.reportValidity();
            return;
        }

        var name = /[A-Za-z]{1}[A-Za-z]/;
        var email = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
        var subject = /[0-9]{10}/;
        var message = /[A-Za-z]{1}[A-Za-z]/;
      
        var nameVal = $("#name").val();
        var emailVal = $("#email").val();
        var subjectVal = $("#subject").val();
        var messageVal = $("#message").val();
      
        var data = {
          name: nameVal,
          email: emailVal,
          subject: subjectVal,
          message: messageVal
        };
      
        var isValid = true;
      
        if (nameVal === '') {
          // Display notification for missing name
        
          isValid = false;
        } else if (nameVal.length < 2) {
          // Display notification for name validation error
            nameValid.display="block"
          nameValid.innerTexttext("Name should have 2 or more characters");
          isValid = false;
        }
      
        if (subjectVal === '') {
          // Display notification for missing subject
          
          isValid = false;
        } else if (subjectVal.length < 2) {
          // Display notification for subject validation error
          nameValid.display="block"
          nameValid.innerTexttext("Subject should have 2 or more characters");
          isValid = false;
        }
      
        if (emailVal === '') {
          // Display notification for missing email
          
          isValid = false;
        } else if (!emailVal.match(email)) {
          // Display notification for email validation error
          nameValid.display="block"
          nameValid.innerTexttext("Enter a Valid Email");
          isValid = false;
        }
      
        if (messageVal === '') {
          // Display notification for missing message
         
          isValid = false;
        } else if (messageVal.length < 2) {
          // Display notification for message validation error
          nameValid.display="block"
          nameValid.innerTexttext("message should have 2 or more characters");
          isValid = false;
        }
      
        if (isValid) {
          var url = "https://t6p1kp4kfg.execute-api.us-east-1.amazonaws.com/Live/contact";
      
          $.ajax({
            url: url,
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(data),
            crossDomain: true,
            success: function(result) {
              // Success handling
              customAlert();
      
              $("#name").val("");
              $("#subject").val("");
              $("#email").val("");
              $("#message").val("");
      
              setTimeout(fade_out, 5000);
            },
            error: function(result) {
              // Error handling
              var overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
              var alertBox = document.getElementById('customAlert');
    alertBox.style.display = 'block';
    alertBox.innerText="Email not Sent, Please try again!"
            }
          });
        }
      }
         
      

function customAlert(message) {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'block';

    var alertBox = document.getElementById('customAlert');
    alertBox.style.display = 'block';
}

function closeAlert() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none';

    var alertBox = document.getElementById('customAlert');
    alertBox.style.display = 'none';
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
}