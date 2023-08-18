const  fetchData = document.getElementById("fetchbtn");

fetchData.addEventListener('click', fetchxhr);

function fetchxhr(){
    console.log('data has been fetched')

    let data = new XMLHttpRequest();
        //1. get request-------------
        // data.open('GET',"ajax2.txt");
        // data.open('GET','https://jsonplaceholder.typicode.com/todos/1');
        // data.open('GET','https://jsonplaceholder.typicode.com/todos/1', false);

        //2. post request-----------

        data.open('POST' , 'https://dummy.restapiexample.com/api/v1/create', true);
        data.getResponseHeader('contant-type', 'application/json')

    // data.onprogress = function(){
    //     console.log('data is loading.......')
    // }
    // data.onreadystatechange = function(){
    //     console.log('ready state is', data.readyState)
    // }
    data.onload = function(){
        if(this.status === 200){

            console.log('data has been loaded successfully')
            // console.log(this.responseURL)
            console.log(this.responseText)
        }else{
            console.log('this file does not exits')
        }
    }

    let params = `{"name":"text8787","salary":"12235","age":"73"}`;
    data.send(params);
    console.log('we are done')
}

