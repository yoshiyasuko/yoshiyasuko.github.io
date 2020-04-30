var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/shinchan-hohoi.jpg') {
        myImage.setAttribute('src', 'images/sasuga-dio.jpg');
    } else {
        myImage.setAttribute('src', 'images/shinchan-hohoi.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeader = document.querySelector('h1');

function setUserName() {
    let myName = prompt('あなたの名前を入力してください。');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeader.textContent = 'しんちゃんはすごいよ、' + myName;
    }
}

if (!(localStorage.getItem('name'))) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeader.textContent = 'しんちゃんはすごいよ、' + storedName;
}

myButton.onclick = function() {
    setUserName();
}