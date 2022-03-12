

document.addEventListener("DOMContentLoaded",()=>{
    const loginform=document.querySelector("#login");
    const createaccountform=document.querySelector("#createAccount");
   
    document.querySelector("#linkcreateaccount").addEventListener("click",e=>{
       e.preventDefault();
       loginform.classList.add("form--hidden");
    createaccountform.classList.remove("form--hidden");
    });
    document.querySelector("#linklogin").addEventListener("click",e=>{
        e.preventDefault();
        loginform.classList.remove("form--hidden");
        createaccountform.classList.add("form--hidden");
        });
})