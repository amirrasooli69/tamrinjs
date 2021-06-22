const forms = document.querySelectorAll('[data-validation]');

const messages = {
    valueMissing: () => 'مقدار اجباری میباشد!',
    patternMismatch: () =>'فرمت وارد شده اشتباه است',
    tooShort: (target) => `حداقل باید ${target.minLength} کاراکتر وارد شود!`
}

const validityKeys = Object.keys(messages)

forms.forEach(form => {
    form.addEventListener('input', (e) => {
        const {target} = e;

        const errorsEl = target.parentElement.querySelectorAll('small');
        errorsEl.forEach(el => el.remove());

        validityKeys.forEach(key => {
            if(target.validity[key]) {
                appendError(target,key);
                // console.log(messages[key]);
            }
        })
    })
})

function appendError(target, key){
    const errorEl = document.createElement('small');
    errorEl.innerText = messages[key](target)
    target.parentElement.appendChild(errorEl);
}