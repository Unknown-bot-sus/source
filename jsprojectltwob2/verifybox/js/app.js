// UI
const codes = document.querySelectorAll('.code');
codes[0].focus();

codes.forEach((code, index)=>{
   // console.log(code);
    code.addEventListener('keydown', (e)=>{
        if(e.key >= 0 && e.key <= 9){
            // For only 1 number
            codes[index].value = '';
            if(index < codes.length-1){
                setTimeout(()=>codes[index+1].focus(),10);
            }
        }else if(e.key === "Backspace"){
            if(index !== 0) {
                setTimeout(() => codes[index - 1].focus(), 10);
            }
        }
    });
});

// 8VB WDFXXX