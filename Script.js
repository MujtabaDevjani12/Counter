let num = '0';

document.querySelector('input').value = num;

let buttons = document.querySelectorAll('.btn');

Array.from(buttons).forEach((btn)=> {
    btn.addEventListener('click', (e)=> {

        switch(e.target.innerHTML){

            case 'Increase':
                num++;
                document.querySelector('input').value = num;
                break;
            case 'Reset':
                num = '0';
                document.querySelector('input').value = num;
                break;
            case 'Decrease':
                num--;
                document.querySelector('input').value = num;
                break;
        }


        // if (e.target.innerHTML == 'Increase') {
        //     num++;
        //     document.querySelector('input').value = num;
        // }
        // else if(e.currentTarget.innerHTML == 'Reset'){
        //     num = '0';
        //     document.querySelector('input').value = num;
        // }
        // else if(e.currentTarget.innerHtml == 'Decrease'){
        //     num--;
        //     document.querySelector('input').value = num;
        // }
    })
})
