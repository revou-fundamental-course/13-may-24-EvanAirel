//Ini JS
let isKelilingisVisible = false; //keliling is hide
function hideOrShow () {
    if (isKelilingisVisible == false) {
        isKelilingisVisible = true;
        document.getElementById('luas-section').style.display = 'none';
        document.getElementById('keliling-section').style.display = 'block';
    } else {
        isKelilingisVisible = false;
        document.getElementById('luas-section').style.display = 'block';
        document.getElementById('keliling-section').style.display = 'hide';
    }
}

function validation () {
    let alasValue = document.getElementById ('alas-input').value;
    let tinggiValue = document.getElementById ('tinggi-input').value;
    console.log(alasValue);
    console.log(tinggiValue);

    if (alasValue != ''&& tinggiValue !='') {
        console.log('sukses validasi');
    }   else {
            alert('no input data')

    }
}

function validation () {
    let S1Value = document.getElementById ('S1-input').value;
    let S2Value = document.getElementById ('S2-input').value;
    let S3Value = document.getElementById ('S3-input').value;
    console.log(S1Value);
    console.log(S2Value);
    console.log(S3Value);
}