var userHP = 0;
var compHP = 0;
var atk = 0;
var counterAtk = 0;
var ifCharSelected = true;
var dead = false;


var health = Math.floor((Math.random() * 200) + 120); 
console.log(health);
userHP = health;
$('#hp, #hp1, #hp2, #hp3').hide();

$('#eCart').click(function () {
    $('#hp').text(health);
    $('#hp').show();
});

$('#kMck').click(function () {
    $('#hp1').text(health);
    $('#hp1').show();
});

$('#skButt').click(function () {
    $('#hp2').text(health);
    $('#hp2').show();
});

$('#rMarsh').click(function () {
    $('#hp3').text(health);
    $('#hp3').show();
});
