// Set initial count
let count = 0;

// Select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// console.log(btns);

btns.forEach(function (btn) {
    //console.log(btn);
    btn.addEventListener('click', function (e) {
        //console.log(e.currentTarget.classList);
        const styles = e.currentTarget.classList;
        if((styles.contains('decrease')) && (count >= 1)){
            count--;
        }else if(styles.contains('increase')){
            count++;
        }else[
            
        ]
        value.textContent = count;
    });
})
