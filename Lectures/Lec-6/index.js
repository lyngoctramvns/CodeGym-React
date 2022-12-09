function getJSONAPI(){
    return new Promise(function(resolve){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(json){
            resolve(json.data);
            // resolve(json);
            //json. gì đằng sau vd như header, content-type, data, vv...
        })
    })
}

getJSONAPI().then(result => {
    let content = "";
    for (let i = 0; i < result.length; i++){
        content+= `<tr>
            <td>${result[i].id}</td>
            <td>${result[i].title}</td>
            <td>${result[i].body}</td>
        </tr>`;
    }

    document.getElementById("content").innerHTML = content;
})