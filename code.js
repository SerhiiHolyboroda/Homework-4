document.getElementById("div1").hidden = true;
document.getElementById("div2").hidden = true;
getDiv = x => document.querySelector(x);
getDiv('#color').onclick = function(event){
document.getElementById("div2").hidden = true;
getDiv("#div1").hidden = false;
}
getDiv('#image').onclick = function(event){
document.getElementById("div1").hidden = true;
getDiv("#div2").hidden = false;
}

getDiv('#divs1').onclick = function(event){
document.body.style.backgroundColor = '#03fcd3';
}
getDiv('#divs2').onclick = function(event){
document.body.style.backgroundColor = '#d93807';
}
getDiv('#divs3').onclick = function(event){
document.body.style.backgroundColor = '#07d989';
}
getDiv('#divs4').onclick = function(event){
document.body.style.backgroundColor = '#54d907';
}
getDiv('#divs5').onclick = function(event){
document.body.style.backgroundColor = ' #435259';
}
getDiv('#divs6').onclick = function(event){
document.body.style.backgroundColor = '#ff1e00';
}

getDiv('#divs7').onclick = function(event){
document.body.style.backgroundColor = '#0026ff';
}
getDiv('#divs8').onclick = function(event){
document.body.style.backgroundColor = '#dd00ff';
}
getDiv('#divs9').onclick = function(event){
document.body.style.backgroundColor = '#540d0d';
}
