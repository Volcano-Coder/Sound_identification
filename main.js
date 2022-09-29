//https://teachablemachine.withgoogle.com/models/58U0BW4y3/
function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/58U0BW4y3/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults)
}

function gotResults(error, results){
if(error){
    console.error(error);
}
else
{
    console.log(results);
r=Math.floor(Math.random()*255)+1;
g=Math.floor(Math.random()*255)+1;
b=Math.floor(Math.random()*255)+1;
document.getElementById("result_label").innerHTML="I can hear-"+results[0].label;
document.getElementById("result_confidence").innerHTML="accuracy-"+(results[0].confidence*100).toFixed(2)+"%";
document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")";
img1=document.getElementById("alein1");
img2=document.getElementById("alein2");
img3=document.getElementById("alein3");
img4=document.getElementById("alein4");
if(results[0].label=="Dog"){
    img1.src='https://cdn.dribbble.com/users/1186670/screenshots/7189098/media/33fb9c6279d9829266ebf7a4d0511889.gif';
    img2.src='https://images.squarespace-cdn.com/content/v1/506a168ce4b00f5f2f4b48ad/1460768335792-9MBZLSQR0TJO74EOUNUR/ke17ZwdGBToddI8pDm48kLzP-sQqiNL8B5m7xwaUUvp7gQa3H78H3Y0txjaiv_0fY6Tdvpu-1g3lWOqPpuciHdqYdKxYyTpTX9WKW5vOfausItIhYBC90LuJaYL0c21FFQYaDHW6Zy6u01IHkyEB4HknW1cutqA8RGIvqzdInwdnDp-mCWlJUfKGIBQh3xQh/image-asset.gif';
    img3.src="https://tse4.mm.bing.net/th?id=OIP.8leAp0WLBiG1ZkSnSGRV0QHaG6&pid=Api&P=0";
    img4.src='https://tse3.mm.bing.net/th?id=OIP.KZTS4krLZ96sxXON9zTucQHaEX&pid=Api&P=0';
}

else if(results[0].label=="Cat"){
    img1.src='https://tse1.mm.bing.net/th?id=OIP.HBkIO94eexH0s7eTCHjAEgHaG7&pid=Api&P=0';
    img2.src='https://images.squarespace-cdn.com/content/v1/506a168ce4b00f5f2f4b48ad/1460768335792-9MBZLSQR0TJO74EOUNUR/ke17ZwdGBToddI8pDm48kLzP-sQqiNL8B5m7xwaUUvp7gQa3H78H3Y0txjaiv_0fY6Tdvpu-1g3lWOqPpuciHdqYdKxYyTpTX9WKW5vOfausItIhYBC90LuJaYL0c21FFQYaDHW6Zy6u01IHkyEB4HknW1cutqA8RGIvqzdInwdnDp-mCWlJUfKGIBQh3xQh/image-asset.gif';
    img3.src='https://tse4.mm.bing.net/th?id=OIP.8leAp0WLBiG1ZkSnSGRV0QHaG6&pid=Api&P=0';
    img4.src='https://2.bp.blogspot.com/-1BYwRY_Qz0U/WMQSLMsQdFI/AAAAAAAGwz8/Eck9s_e3WGMVhxfn8DMgAeXuNNsPFidQwCLcB/s1600/AW390850_00.gif';
}
else if(results[0].label=="Cow"){
    img1.src='https://tse1.mm.bing.net/th?id=OIP.HBkIO94eexH0s7eTCHjAEgHaG7&pid=Api&P=0';
    img2.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbFlrpkDUdtr7pYqjW4RrzKPMC75_xQ4Q7AA&usqp=CAU';
    img3.src='https://tse4.mm.bing.net/th?id=OIP.8leAp0WLBiG1ZkSnSGRV0QHaG6&pid=Api&P=0';
    img4.src='https://2.bp.blogspot.com/-1BYwRY_Qz0U/WMQSLMsQdFI/AAAAAAAGwz8/Eck9s_e3WGMVhxfn8DMgAeXuNNsPFidQwCLcB/s1600/AW390850_00.gif';
}

else{
    img1.src='https://tse1.mm.bing.net/th?id=OIP.HBkIO94eexH0s7eTCHjAEgHaG7&pid=Api&P=0';
    img2.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbFlrpkDUdtr7pYqjW4RrzKPMC75_xQ4Q7AA&usqp=CAU';
    img3.src='https://www.animaker.com/blog/wp-content/uploads/2018/05/Animaker-lion.gif';
    img4.src='https://tse3.mm.bing.net/th?id=OIP.KZTS4krLZ96sxXON9zTucQHaEX&pid=Api&P=0';
}
}
}