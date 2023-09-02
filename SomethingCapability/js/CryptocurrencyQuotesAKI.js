
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


























// 發送以太幣

async function getFunds() {
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    console.log(accounts[0]);
    let amount = await document.getElementById("amount").value;
    amount = amount * 10**18;
    console.log(amount);
    const getFunds = await window.contract.methods.getFunds().send({value: amount, from: accounts[0]});
}