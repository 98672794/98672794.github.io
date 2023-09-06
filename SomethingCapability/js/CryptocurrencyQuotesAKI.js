


// Login  MetaMask


// STC 代幣餘額 display
var web3js;
			  
					function getERC20TokenBalance(tokenAddress, walletAddress, callback) {
					  let minABI = [
						{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"type":"function"},
						{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"type":"function"}
					  ];
					  let contract = new web3js.eth.Contract(minABI, tokenAddress);
					  contract.methods.balanceOf(walletAddress).call((error, balance) => {
						contract.methods.decimals().call((error, decimals) => {
						  console.log(balance);
						  console.log(decimals);
						  balance = balance / (10**decimals);
						  callback(balance);
						});
					  });
					}
					window.onload = function() {
					  web3js = new Web3(Web3.givenProvider);
					  console.log(web3js.version);
					}




// Login  Ethereum btn

window.userWalletAddress = null
					const loginButton = document.getElementById('loginButton')
					const userWallet = document.getElementById('userWallet')
				
					function toggleButton() {
					  if (!window.ethereum) {
						loginButton.innerText = 'Requires Ethereum supported browser !!!'
						return false
					  }
				
					  loginButton.addEventListener('click', loginWithMetaMask)
					}
				
					async function loginWithMetaMask() {
					  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
						.catch((e) => {
						  console.error(e.message)
						  return
						})
					  if (!accounts) { return }
				
					  window.userWalletAddress = accounts[0]
					  userWallet.innerText = window.userWalletAddress
					  loginButton.innerText = 'Sign out Ethereum'

					  //<!-- ============ 用STC餘額 ============ -->
					  var str = $( "#我的錢包2222" ).val(accounts[0]);

					  //<!-- ============ 切割字串 https://www.fooish.com/javascript/string/substr.html ============ -->
					  $( "#錢包menu" ).html( accounts[0].substr(0, 5) );
						

					//<!-- ============ STC 代幣餘額 ============ -->
					let tokenAddress = $( "#STC合約地址" ).val(); //STC合約地址
					let walletAddress = $( "#我的錢包2222" ).val(); //我的錢All包
					getERC20TokenBalance(tokenAddress, walletAddress, (balance) => {
						document.getElementById('STC餘額').innerText = balance.toString();
					});

					  loginButton.removeEventListener('click', loginWithMetaMask)
					  setTimeout(() => {
						loginButton.addEventListener('click', signOutOfMetaMask)
					  }, 200)
			  
					}
				
					function signOutOfMetaMask() {
					  window.userWalletAddress = null
					  userWallet.innerText = ''
					  loginButton.innerText = 'Wallet Connect'
					  //<!-- ============ 用STC餘額 html 靜態 Copy dd Js Aki ============ -->
					  var str = $( "#我的錢包2222" ).val("0x0"); //val=input
					  $( "#錢包menu" ).html( 'Wallet Connect');
                      $( "#STC餘額" ).html( '0.00');
					  //<!-- ============ / https://jsfiddle.net/mokaki/yu0n2r7z/1/ ============ -->
			  
					  loginButton.removeEventListener('click', signOutOfMetaMask)
					  setTimeout(() => {
						loginButton.addEventListener('click', loginWithMetaMask)
					  }, 200)
					}
				
					window.addEventListener('DOMContentLoaded', () => {
					  toggleButton()
					});












































// 當前時間
// https://cloud.tencent.com/developer/article/2125372

function time() {
    var vWeek, vWeek_s, vDay;
    vWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var date =  new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    vWeek_s = date.getDay();
    document.getElementById("time").innerHTML = year + "-" + month + "-" + day + " " + "\t" + hours + ":" + minutes + ":" + seconds + "\t" + vWeek[vWeek_s];

};
setInterval("time()", 1000);




















//  getSTC  Current price<


// monica AI
$(document).ready(function() {
    $.ajax({
        url: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
        type: 'GET',
        success: function(data) {
            var exchangeRate = data.ethereum.usd * Number($("#STCtoETH").text())    // https://blog.csdn.net/weixin_43517302/article/details/104468307
            $("#STCtoUSD").text(Math.round(exchangeRate) + " USD")

            var STCtoHKD = exchangeRate * 7.8
            $("#STCtoHKD").text(Math.round(STCtoHKD) + " HKD")
        }
    });
});


















// 企業名冊 div 隱顯
// https://www.runoob.com/jquery/jquery-hide-show.html
// css #All:hover,#科技:hover,#健康:hover{cursor: pointer; }
// <li><a id="科技">科技</a></li>
// <div class="col-lg-12 BusinessRosterIndexBox 科技">

    $("#All").click(function(){
		$(".科技,.健康,.電腦,.課程,.食品,.燈飾").show();
    });

    $("#科技").click(function(){
		$(".電腦,.健康,.課程,.食品,.燈飾").hide();
		$(".科技").show();
    });


    $("#健康").click(function(){
		$(".電腦,.科技,.課程,.食品,.燈飾").hide();
		$(".健康").show();
    });

    $("#電腦").click(function(){
		$(".健康,.科技,.課程,.食品,.燈飾").hide();
		$(".電腦").show();
	});

    $("#課程").click(function(){
		$(".健康,.科技,.電腦,.食品,.燈飾").hide();
		$(".課程").show();
	});

    $("#食品").click(function(){
		$(".健康,.科技,.電腦,.課程,.燈飾").hide();
		$(".食品").show();
	});

    $("#燈飾").click(function(){
		$(".健康,.科技,.電腦,.課程,.食品").hide();
		$(".燈飾").show();
	});
	




















































//const infuraUrl = 'https://mainnet.infura.io/v3/5b51d755c35d4ac1a4b771c65ad05a38';
//console.log()
//alert()