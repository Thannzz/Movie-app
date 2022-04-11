let signupDetails = JSON.parse(localStorage.getItem('signupdata'))||[];

var arr = []
function storedata(e){
    e.preventDefault()
    
    let form = document.getElementById('signupform')

    let name = form.name.value ; 
    
    let email = form.email.value ;

    let contact = form.contact.value ;

    let password = form.password.value ;

    let p1 = new Data(name,email,contact,password)

    arr.push(p1)
    console.log(arr)

    localStorage.setItem('signupdata',JSON.stringify(arr))


}

function Data(n,e,c,p){
    this.name=n ;
    this.email=e;
    this.contact=c;
    this.password=p;
}