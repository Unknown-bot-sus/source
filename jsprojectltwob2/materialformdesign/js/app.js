// UI
const labels = document.querySelectorAll('.form-group label');
// console.log(labels)

labels.forEach(label=>{
    // console.log(label);
    // console.log(label.textContent);

    // console.log(label.textContent.split(''));

    label.innerHTML = label.innerText
        .split('')
        .map((letter, index)=>
            `<span style="transition-delay: ${index * 50}ms">${letter}</span>`)
        .join('');
});