function validateform(){  
    var email=document.myform.email.value;  
    var password=document.myform.password.value;  
    if (email==null || email==""){  
        alert("Email can't be blank.");  
        return false;  
    }
    else if(password.length<8){  
        alert("Password must be at least 8 characters long.");  
        return false;  
    }
    else if(email=="123@gmail.com" && password!="advaith500"){
        alert("Login Failed. Invalid Password");
        return false;
    }
    else if(email=="123@gmail.com" && password=="advaith500"){
        alert("Login Successful.");
        // window.open("new_index.html", "_blank");
        window.location="new_index.html";
        return false;
    }
    else{
        alert("Login Failed. User not found.");
        return false;
    }
}  