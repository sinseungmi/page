const open_btn = document.querySelector('#open');
const off_btn = document.querySelector('#menuicon');

on_off = 0;
off_btn.onclick = function() {
    console.log('click!');
    
    if (on_off == 0) {
        open_btn.style.zIndex=99;
        open_btn.classList.add('open');
        open_btn.classList.remove('close');
        on_off = 1;
        console.log('0');
        
    }else if (on_off == 1) {
        open_btn.classList.add('close');
        open_btn.classList.remove('open');
        console.log('1');
        on_off = 0;
    }
    
}












