var logindata = JSON.parse(localStorage.getItem('signupdata'))

function getLogindata(e){
    e.preventDefault()
    
    var form =document.getElementById('loginform')
    

    var email = form.email.value ;

    var password =  form.password.value ;
    
//checking login credentials
    for(let i=0 ;i<logindata.length ;i++)
    {
        if((logindata[i].email === email)  && logindata[i].password===password)
        {
            alert('Login Successful')
            window.location.href="index.html"
        }
        else{
            alert('Invalid Credentials')
        }
    }
}