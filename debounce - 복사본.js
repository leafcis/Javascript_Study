const debounceSearch = _.debounce(function() {
    const textInput = document.getElementById('input');
    const URLText = `http://sample.bmaster.kro.kr/contacts_long/search/${textInput.value}`;

    axios.get(URLText)
        .then(response => {
            console.log(response.data)
        })
        .catch(err => {
            console.log(err);
        })
}, 200)