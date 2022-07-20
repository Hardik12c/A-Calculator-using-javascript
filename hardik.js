// variables
let stringshow="";
let stringback="";
let input=document.getElementById('input');
let btns=Array.from(document.querySelectorAll('.btn'));

// functions
btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        let k=e.target.innerHTML;
        if(k=='X'){
            stringshow+=k;
            stringback+='*';
            input.value=stringshow;
        }else if(k=='<i class="fas fa-backspace" aria-hidden="true"></i>'){
            stringshow=stringshow.slice(0, stringshow.length - 1);
            stringback=stringback.slice(0, stringback.length - 1);
            input.value=stringshow;
        }else if(k=='<i class="fa-solid fa-divide"></i>'){
            stringshow+='/';
            stringback+='/';
            input.value=stringshow;
        }else if(e.target.innerHTML=='AC'){
            stringshow="";
            stringback="";
            input.value=stringshow;
        }
        else if(e.target.innerHTML=='='){
            stringback=eval(stringback).toString();
            stringshow=stringback;            
            input.value=stringshow;
        }
        else{
            stringshow +=k;
            stringback+=k;
            input.value=stringshow;
        }
    })
})