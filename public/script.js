let checkResult = window.navigator.onLine ? false : true

window.addEventListener('online', function () {
  checkResult = false
});
window.addEventListener('offline', function () {
  checkResult = true
});

const checkSuccess = "Bạn rất đẹp trai!";
const checkError = "Bạn không đẹp trai!";

let text = document.getElementById('checkTxt');
let btn = document.getElementById('btn');

function check() {
  btn.style.display = 'none';
  text.style.display = 'block';
  setTimeout(function () {
    if (checkResult) {
      alert(checkSuccess);
      text.style.display = 'none';
      btn.style.display = 'block';
    } else {
      alert(checkError);
      text.style.display = 'none';
      btn.style.display = 'block';
    }
  }, 10000);
}