//const items = document.querySelectorAll('.collapse')

// let activeItem;
// for(let i=0; i < items.length; i++) {
//     items[i].addEventListener('click' , (event) => {
//         const current = event.currentTarget
//         if(activeItem){
//             activeItem.classList.remove('open');
//         }

//         activeItem = current
//         current.classList.toggle('open')
//     })
// }

// const accordian = document.querySelector('.collapse-content');
// let activeItem;
// accordian.addEventListener('click' , (event) => {
//     const current = event.target.closest('.collapse');

//     if(activeItem) {
//         activeItem.classList.remove('open');
//     }

//     if(current) {
//         activeItem = current;
//         event.target.closest('.collapse').classList.add('open');
//     }
//     // console.log(current);
    
// })
//---------------

// const accordians = document.querySelectorAll('[data-accordian]')

// for(let i= 0; i<accordians.length; i++){
//     let activeItem;
//     accordians[i].addEventListener('click', (event) => {
//         const current = event.target.closest('[data-collapse-able]')
//         if(activeItem) {
//             activeItem.classList.remove('collapsed');
//         }

//         if(current) {
//             activeItem = current;
//             current.classList.add('collapsed');
//         }
//     })
// }

//---------------

const accordians = document.querySelectorAll('[data-accordian]')

for(let i= 0; i<accordians.length; i++){
    let activeItem;
    accordians[i].addEventListener('click', (event) => {
        const current = event.target;
        // taghirat va khate zir baraye kam kardane vabastegi be css ast
        const target = current.hasAttribute('data-collapse-able') || current.closest('[data-collapse-able]');
        if(activeItem) {
            activeItem.classList.remove('collapsed');
        }

        if(target) {
            activeItem = target;
            target.classList.add('collapsed');
        }
    })
}