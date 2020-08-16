function validation (){
    var Username=document.getElementById("#uname");

    var Password=document.getElementById("#pass");

    var Email = document.getElementById("#email");

    if(Username.value().trim()=="")
    {
        alert("Username should not blank");
        return false;
    }

    if(Password.value()=="")
    {
        alert("Password should not blank");
        return false;
    }

    if(Password.value().length<8)
    {
        alert(" Password too short");
        return false;
    }
    if(Email.value()=="")
    {
        alert("Email should not blank");
        return false;
    }

}