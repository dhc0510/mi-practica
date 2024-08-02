const textAreaNames=document.querySelector(".text-area-input-output");
const namesSubmit=document.querySelector(".names-submit");

namesSubmit.addEventListener('click',()=>{
    let names=textAreaNames.value;

    let namesArray = names.split(',').filter((currentValue)=>{return currentValue.toLowerCase().includes("d") ;});
    console.log(namesArray.length);
    textAreaNames.value=namesArray.join(',');
});
