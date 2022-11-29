let regex = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;

function checkEmail(str){
    if(regex.test(str)){
        return true;
    } else {
        return false;
    }
}

function checkSubmit(){
    let email = document.getElementById('email').value;
    if(checkEmail(email) === true){
        alert('Email correct!')
    }else {
        alert('Email is invalid!')
    }
}