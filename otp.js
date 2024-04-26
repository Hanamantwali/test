const otpinput=document.querySelectorAll("input");
const button=document.querySelector("button");

window.addEventListener("load",()=>otpinput[0].focus());

otpinput.forEach((input)=>{
    input.addEventListener("input",()=>{
        const currentinput=input;
        const nextinput=input.nextElementSibling;
        if(currentinput.value.length>1 &&currentinput.value.length==2){
            currentinput.value=""
        }
        if(nextinput!==null && nextinput.hasAttribute("disabled")&& currentinput.value!==""){
            nextinput.removeAttribute("disabled");
            nextinput.focus();
        }
        if(!otpinput[3].disabled && otpinput[3].value!==""){
            button.classList.add("active");
        }else{
            button.classList.remove("active");
        }
    });
    input.addEventListener("keyup",(e)=>{
        if(e.key==="backspace"){
            if(input.previousElementSibling!==null){
                e.target.value="";
                e.target.setAttribute("disabled",true)
                input.previousElementSibling.focus();
            }
        }
    })
});