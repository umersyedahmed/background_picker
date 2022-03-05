document.getElementById('spring').onclick = springStyle;
document.getElementById('summer').onclick = summerStyle;
document.getElementById('fall').onclick = fallStyle;
document.getElementById('winter').onclick = winterStyle;

function springStyle() {
    document.querySelector('body').style.backgroundImage = "url('https://images.unsplash.com/photo-1602615576820-ea14cf3e476a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
    document.querySelector('h1').style.color = 'black';

}

function summerStyle() {
    document.querySelector('body').style.backgroundImage = "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80')";
    document.querySelector('h1').style.color = 'black';


}

function fallStyle() {
    document.querySelector('body').style.backgroundImage = "url('https://images.unsplash.com/photo-1482109920615-41d79c403116?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')";
    document.querySelector('h1').style.color = 'black';
}

function winterStyle() {
    document.querySelector('body').style.backgroundImage = "url('https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1208&q=80')"
    document.querySelector('h1').style.color = 'black';

}