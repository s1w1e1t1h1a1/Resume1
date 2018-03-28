// ajax call(XMMLHTTPRequest)initiaion
function loadjson(file,callback)
{
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function () {
    if (xhr.readyState ===4 && xhr.status =="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send();

}
// function callin
loadjson("data.json",function (text) {
  let data=JSON.parse(text);
  console.log(left);
  basics(data.left);
})
// for main div calling
// var main=document.queryselector('.main');
// for main div id calling
var main=document.getElementById('main');
// element creation
var left=document.createElement("div");
// add class name to element
left.classList.add("left");
// add id to element
left.setAttribute("id","left");
// adding text to div
left.textContent="Profile Details:"
left.appendChild(document.createElement("HR"));
// appending to main div
main.appendChild(left);
function basics(leftside){
var image=document.createElement("img");
image.src=leftside.photo;
left.appendChild(image);
var name=document.createElement("h1");
name.textContent=leftside.name;
left.appendChild(name);
var email=document.createElement("h2");
email.textContent=leftside.email;
name.appendChild(email);
var phone=document.createElement("h3");
phone.textContent=leftside.phone;
email.appendChild(phone);



}
