function getJsonImage(key){
    return new Promise(function(resolve){
        axios.get(`q=${key}`)
        .then(function(json){
            resolve(json.data.data[0]);
            // resolve(json);
            //json. gì đằng sau vd như header, content-type, data, vv...
        })
    })
}

function getImage(){

    let key = document.getElementById("key").value;
    //lấy dữ liệu
    //thay thế tham số q
    //thay ảnh url
    //set src cho ảnh để ảnh show trên HTML
    getJsonImage(key).then(result => {
        //lấy ra đường dẫn
        let imgSrc = result.images.downsized.url;
        // in ra ảnh
        document.getElementById("result").setAttribute("src", imgSrc);
    });
}