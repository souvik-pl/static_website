
function upDate(previewPic){
    
    document.getElementById('image').style.backgroundImage="url(" + previewPic.src +")";
    document.getElementById('image').style.backgroundColor = "#CCEECC";
    document.getElementById('image').innerHTML = previewPic.alt;
}

function unDo(){

    document.getElementById('image').style.backgroundImage="url('')";
    document.getElementById('image').style.backgroundColor = "#000000";
	document.getElementById('image').innerHTML = "Please hover over an image below to display here.";
}

function userName(){

    var n = prompt("Please enter your name");
    document.getElementById('image').innerHTML = "Hi "+n+", Please hover over an image below to display here.";
}