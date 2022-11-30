const api ={
    key:"cfb7c1035e87a85901dfc28ab9bdf966",
}

const searchbox=document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt){
    if (evt.keyCode == 13){
        getResults(searchbox.value);
        console.log('searchbox.value')
    }
}
