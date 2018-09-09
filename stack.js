let stack = [];
let str;
let input = document.getElementById('input').value;

function push() {
    str = "";
    stack.push(input);
    console.log(stack.length)
    for(let i = stack.length - 1; i >= 0; i--) {
        str += "[" + stack[i] + "]" + "\n"
    }
    input = '';
    alert(str);
}
function pop() {
    str = "";
    stack.pop();
        for(let i = stack.length - 1; i >= 0; i--) {
            str += "[" + stack[i] + "]" + "\n"
        }
        input = '';
        alert(str);
}