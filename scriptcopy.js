

var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var sol = document.getElementById("solana");
var doge = document.getElementById("dogecoin");

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana%2Cdogecoin&vs_currencies=cad",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function (response){
  
    btc.innerHTML = response.bitcoin.cad;
    eth.innerHTML = response.ethereum.cad;
    sol.innerHTML = response.solana.cad;
    doge.innerHTML = response.dogecoin.cad;
} );
