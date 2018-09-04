let stack = [];
let str;
function push() {
    str = "";
    stack.push(document.getElementById('input').value);
    console.log(stack.length)
    for(let i = stack.length - 1; i >= 0; i--) {
        str += "[" + stack[i] + "]" + "\n"
    }
    document.getElementById('input').value = '';
    alert(str);
}
function pop() {
    str = "";
    stack.pop();
        for(let i = stack.length - 1; i >= 0; i--) {
            str += "[" + stack[i] + "]" + "\n"
        }
        document.getElementById('input').value = '';
        alert(str);
}