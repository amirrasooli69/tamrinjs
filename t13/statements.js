function inputChanger(event){
    console.log('changed...');
    // console.log(event.target.value);
    // alert('hi' + event.target.value);
}
//------
function clicked(event){
    console.log(event);
    if(event.ctrlKey){
        alert('salam reis')
    }
    else{
        alert('salam');
    }
    // alert("salam");
}

function mouseOver(event){
    console.log(event);
    event.target.innerHTML = 'salam doostan';
}

function mouseOut(event){
    event.target.innerHTML = 'khodahafez doostan';

}

function keyDown(event)
{
    console.log(event);
}

function load(){
    alert('سلام خوش آمدید');
}