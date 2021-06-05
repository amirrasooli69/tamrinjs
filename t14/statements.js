var mytext = "sample text";
// var mytext = 'sample text';
// mytext =`fdsfdfdf
// dfdfdf
// dfdfdf`;
console.log(mytext.length);

function validate(event){
    if(event.target.value.length < 3){
        alert('you should input 3 character');
    }
}
var text="hello amir rasooli";
// console.log(text[0]);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.indexOf("ras")); // agar matn vojood nadashte bashad -1 barmigardanad
console.log(text.includes("ras"));
console.log(text.slice(2,5));
text = 's' + text.slice(1,15);
console.log(text);

var text="hello amir rasooli";
console.log(text.substr(3,5)); // az 3 ta 5 bad az khodesh mide
console.log(text.substr(-4,3)); // agar manfi bezarim az akhar miyad barmigardoone
console.log(text.replace("amir","vahid"));
console.log("   amir   rasooli   ".trim()); // space ezafe aval va akhar o hazf mikonad
console.log(text.split("a")); // ba tavajoh be meghdare vorodi matn ra mishekanad va har ghesmat ra dakhele 1 khane araye mirizad
input ="سلام بر تو";
console.log(text.localeCompare(input));
// baraye inke momkene zabanha ba ham fargh konad az localeCompare estefade mikonim
// agar text bozogtar bashe 1 barmigardanad
// agar barabar bashand o barmigardanad
// agar input bozograr bashad -1 barmigardanad


