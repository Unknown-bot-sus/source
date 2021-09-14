const buttons = document.querySelectorAll(".btnripple");

buttons.forEach( button=>{
    // console.log(button);

    button.addEventListener('click', event=>{
        // console.log('button clicked');
        const cx = event.clientX;
        const cy = event.clientY;

        const btntop = event.target.offsetTop;
        const btnleft = event.target.offsetLeft;
        // console.log(btnleft);

        const xinside = cx - btnleft;
        const yinside = cy - btntop;
        // console.log(xinside, yinside);

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = `${yinside}px`;
        circle.style.left = `${xinside}px`;
        // console.log(circle);

        event.target.appendChild(circle);
        
        setTimeout( ()=>{
            circle.remove();
        },500);
    });
});