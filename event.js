function login(){
    axios.post('http://13.125.15.20:5000/restful/signin', {id : document.getElementById('id').value, password : document.getElementById('password').value})
    .then(response => {
        if(response.data.keys !== "Error")
        {
            console.log(response)
            alert(response.data + "님 환영합니다.")
        }
        else
        {
            alert("반환 실패");
        }
    });
};

function myFunction() {
    a = document.getElementById('memo');
    document.getElementById('text').value = document.getElementById('text').value.replace(/(?:\r\n|\r|\n)/g, '<br />');
    axios.post('http://13.125.15.20:5000/restful/writepost', {contents : document.getElementById('text').value})
    .then(response => console.log(response))
}