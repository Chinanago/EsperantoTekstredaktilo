const input = document.querySelector('textarea');
const log = document.getElementById('text');

function updateValue(e) {
    var str = e.target.value;
    var newstr = str.replace(/C\^/g,'\u0108')
                    .replace(/c\^/g,'\u0109')
                    .replace(/G\^/g,'\u011C')
                    .replace(/g\^/g,'\u011D')
                    .replace(/H\^/g,'\u0124')
                    .replace(/h\^/g,'\u0125')
                    .replace(/J\^/g,'\u0134')
                    .replace(/j\^/g,'\u0135')
                    .replace(/S\^/g,'\u015C')
                    .replace(/s\^/g,'\u015D')
                    .replace(/U\^/g,'\u016C')
                    .replace(/u\^/g,'\u016D');
    input.value = newstr;
    console.log(newstr);
}
input.addEventListener('input', updateValue);
function dialogHide() {
    var dialog = document.getElementById("dialog");
    dialog.style.display = "none";
    return;
}
function dialogShow() {
    var dialog = document.getElementById("dialog");
    dialog.style.display = "block";
    return;
}
function buttonClick(){
    dialogShow();
}