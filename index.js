const form=document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector('#email')
const password=document.querySelector('#password');
const passwordConfirm=document.querySelector('#passwordConfirm');


form.addEventListener('submit',e=>{
    e.preventDefault()

    validForm();
})

const setError=(element,message)=>{
   const inputControl=element.parentElement;
   const errorDisplay=inputControl.querySelector('.error');
   errorDisplay.innerText=message;
 
   inputControl.classList.add('error')
   inputControl.classList.remove('success')

}

const setSuccess=(element)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText='';
  
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}

const isValid=email=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validForm(){
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const paswordValue=password.value.trim();
    const passwordConfirmValue=passwordConfirm.value.trim();
    if(usernameValue === ''){
        setError(username,'username is not empty')
    }else{
        setSuccess(username)
    }

    // email

    if(emailValue === ''){
        setError(email,'email is not empty')
    }else if(!isValid(emailValue)){
        setError(email,'provided true email addres')
    }else{
        setSuccess(email)
    }



    // passowrd
    if(paswordValue === ''){
        setError(password,'password is not empty')
    }else if(paswordValue.length < 8){
        setError(password,'password shouldn"t small from eight')
    }
    
    else{
        setSuccess(password)
    }

    // password Confirm
  
    if( passwordConfirmValue=== ''){
        setError(passwordConfirm,'password is not empty')
    }else if( passwordConfirmValue !== paswordValue){
        setError(passwordConfirm,'password dont mach confirm password')
    }
    
    else{
        setSuccess(passwordConfirm)
    }


}