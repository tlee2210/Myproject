function checkLogin(){
    var uid=formLOG.login-form-email.value;
    var pwd=formLOG.login-form-password.value;
    if(uid == ""){
        alert("Vui lòng nhập Username!")}
    else if(pwd ==""){
        alert("Vui lòng nhập Password!")}

    else if(uid == "admin" && pwd == "123"){
        alert("Login Successful!");
    }
    
    else{
        alert("Login Failed!");
    }
}