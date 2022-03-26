
















// 202203161207 mokaki.js會員系統 98672794  










  
//////////////////////////////
//////////////////////////////
/////////// onload ///////////
//////////////////////////////
//////////////////////////////




// 讓網頁一開始就執行js https://www.zymseo.com/big5/program_250447
window.onload=isAutoRun();//將代碼綁定到window.onload事件
function isAutoRun(){

  //AkiUpHtmlCode() // web base data display // <input id="AkiUpHtmlCode" value="code">

  //try {AkiUpHtmlCode()}
  //var AllTxt = AkiUpHtmlCode()
  //console.log("AllTxt")
  //console.log(AllTxt)


  // user login display
  // display adminPage if user //////////////////////
  if (location.href.indexOf('51679292') != -1){
    console.log("user login!")

    // display Admin Box 
    $("#AkiAdmin").css("display", "flex")
    $(".AdminIMGSetBox,textarea[class='UpTxt']").css("display", "block")

    // all target=new page,save change data time
    $(".UpTxt").attr("contenteditable","true") // 修改div https://blog.csdn.net/bfboys/article/details/52810081
    //$(".UpTxt").css("background","rgba(165, 235, 156, 0.3)")

    // all target=new page,save change data time
    $("a").attr("target","_blank") // 修改a https://blog.csdn.net/bfboys/article/details/52810081

    //////////// Save ////////////
    // js f5/關閉視窗提示 txt ing 
    // 編輯時 頁面離開或f5或者瀏覽器關閉的時候給予提示 防止用戶誤操作 離開當前頁面未保存數據可能丟失 
    // https://www.geeksforgeeks.org/how-to-detect-browser-or-tab-closing-in-javascript/
    window.addEventListener('beforeunload', function (e) {
      e.preventDefault();
      e.returnValue = '';
    });

  }
  // aki admin display
  if (location.href.indexOf('aki') != -1){
    $(".AkiUpHtmlCode").css("display", "block")
  }

  // Admin網站更新

    // if '' qqqq 202203260142
      AkiUpHtmlCode()

}




































//////////////////////////////
//////////////////////////////
///////////// GET ////////////
//////////////////////////////
//////////////////////////////


//qqqq myImg1 just 202203240309OK
// js 实现点击按钮复制文本 
// https://blog.csdn.net/qq_43506222/article/details/106373663
function copyText() {
  //var txt = $("#例Url_driveGoogle").val
      $("#例Url_driveGoogle").select();
      try {var state = document.execCommand("copy");}
      catch(err){var state = false;}
      if(state){
        alert("複製成功\n");
      }else{
        alert("复制失败");
      }
  }  



  // all 文字 內容取  2022003242322OK
  function _GetAllCode(HaHa_getElementsBy) {   

    var cont = ".,."
    var list=$(HaHa_getElementsBy)  // 取文字內容
    var allTxt = "" // 建立字串 用於取all文

    for(var i=0;i<list.length;i++){          //  loop + 字

      // 202203242137 if undefined           //  不同html tat轉
      var tttt = list[i].value               //  1 先找textarea var
      if (typeof tttt == 'undefined'){       //  if not 
        var tttt = list[i].innerHTML         //  2 再找div
        console.log("innerHTML:"+tttt)  
      } // https://flaviocopes.com/how-to-check-undefined-property-javascript/
      else{   console.log("value:"+tttt)  }  //  re1 textarea have
      allTxt = allTxt + tttt + cont
      }
      console.log(allTxt)
      return allTxt
  }



























//////////////////////////////
//////////////////////////////
/////////// Change ///////////
//////////////////////////////
//////////////////////////////


// user input the img url, we change to be turn html api code
    //https://www.linkedin.com/posts/williamhgates_how-to-help-refugees-aid-relief-and-donations-activity-6907410866245914624-eaMd
    //73 sugar发布了一篇小红书笔记，快来看吧！ 😆 Wi2eKd52y4RDgNa 😆 http://xhslink.com/sA5Zcg，复制本条信息，打开【小红书】App查看精彩内容！
    //7.66 GVL:/   https://v.douyin.com/NjQAh2A/ 复制此链接，打开Dou音搜索，直接观看视频！
    //https://twitter.com/teslaownersSV/status/1501675466511433732?t=BQrsMYStbEcaZ2g__Caqig&s=19
    //https://m.facebook.com/story.php?story_fbid=1416333865493440&id=100013505203886&sfnsn=mo
    //https://youtu.be/WprE6NvGlGA
    //https://linevoom.line.me/post/_dQaZLNM1vIpHI7r3oyLmSAcAh6qSp1OKLaz92l4/1164666160509083989
    //點按此連結即可在 WhatsApp 瀏覽我們的商品：https://wa.me/p/5826448410763231/85298672794
    //https://photos.app.goo.gl/CAAj5auk4rEEvbu88
    //https://www.instagram.com/p/Ca1wc3ovlS5/?utm_medium=copy_link

    function _InputSel(imgurl) {
      // if google drive url
      let googleIMG = 'https://drive.google.com/file/d/'  // user 共用 google drive img url
      if (imgurl.indexOf(googleIMG) != -1){
        let turnImgUrl = 'https://drive.google.com/uc?export=download&id=' // can in html img url
        let dsds = imgurl.split("/")  // dsds[5] = google drive img id
        turnImgUrl = turnImgUrl + dsds[5]
        //alert(turnImgUrl)
        return turnImgUrl
      }
      // other img
      else{
        return imgurl
      }
    }







    //onclick Change css
    function UserChangeCss() { 
      // 取色碼
      var val1 = $("#ChangeColoe1").val()
      var val2 = $("#ChangeColoe2").val()
      var val3 = $("#ChangeColoe3").val()
      var val4 = $("#ChangeColoe4").val()

      //奉奉奉奉奉奉qqqqqq 
      var 主色 = ".carousel-indicators .active,.img-responsive,#filters ul li a:hover h5, #filters ul li a.active h5,.footer_wrapper,.top-navbar .nav > li > a:hover, .top-navbar .nav > li > a:focus,#header_wrapper,#service"
      var 標題色 = ".navbar-inverse .navbar-nav > li > a:hover,a:hover,.pinterest a:hover,#filters ul li a:hover h5, #filters ul li a.active h5,.about-us .points:before,.Aki_C2,.fa-cart-arrow-down,.navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus"
      var 副色 = "h2,.detail p,a,#filters ul li a h5,.navbar-inverse .navbar-nav > li > a,.florL li,#google_translate_element_1,.contact_info p"
      var 副色2 = ".detail h4"

      // change css
      $(主色).css("background",val1)
      $(標題色).css("color",val2)
      $(副色).css("color",val3)
      $(副色2).css("color",val4)

    }





    //<button onclick to this
    function ChangeIMG(imgNb) { // <button onclick="ChangeIMG('_myImg1')">
      //alert(imgNb.substr(1))
      let imgUrl = document.getElementById(imgNb).value // imgNb input is img url
      if (imgUrl != ''){  // if have data
        let turnImgUrl = document.getElementById(imgNb.substr(1)).src = _InputSel(imgUrl) // imgNb.substr(1) = imgNb[1:] = _myImg123 ~> myImg123  | _InputSel(imgUrl) return imgurl
        
        // turnImgUrl UpTxt
        //let turnImgUrlBox = "#" + imgNb.substr(1) + "_"
        //$(turnImgUrlBox).val(turnImgUrl)
        let turnImgUrlBox = "#" + imgNb
        $(turnImgUrlBox).val(turnImgUrl)
      }
    }




  // googleTranslate
  function googleTranslateElementInit_TWToCN() {
    // 限版
    // <div id="google_translate_element_簡"></div>
    // // https://www.w3schools.com/howto/howto_google_translate.asp
    // https://stackoverflow.com/a/60884979/8008799
    // GList https://cloud.google.com/translate/docs/languages
    new google.translate.TranslateElement({pageLanguage: 'zh-TW', includedLanguages: 'zh-CN', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false},
     'google_translate_element_1');
    }
    // OVG ALL
    // function googleTranslateElementInit() {
    //  new google.translate.TranslateElement({pageLanguage: 'zh-TW', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');  
    //}





















    




















//////////////////////////////
//////////////////////////////
//////////// Post ////////////
//////////////////////////////
//////////////////////////////

    // all 內容 入文字 202203110101OK
    function _postAllTxt(ElementsBy,入all字) {
      //console.log('_postAllTxt')
      // loop get div htt ps://zhidao.baidu.com/question/2267122359741677188.html
      let oDiv=$(ElementsBy); // all Class UpTxt
      let i=0;
      while(i<oDiv.length)
        {
          $(oDiv[i]).val(入all字[i])  // textarea input
          $(oDiv[i]).html(入all字[i]) // div
          i++;
        }
      return "ok"
    }






















      























  
//////////////////////////////
//////////////////////////////
//////////// Save ////////////
//////////////////////////////
//////////////////////////////

// Js Base64 字符串 加密、解密 https://developer.mozilla.org/en-US/docs/Glossary/Base64
function utf8_to_b64( str ) {   return window.btoa(unescape(encodeURIComponent( str )));  }
function b64_to_utf8( str ) {   return decodeURIComponent(escape(window.atob( str )));  }




/** download 文件 202203240309OK
 * https://www.feiniaomy.com/post/791.html
 * /@author mochu
 * /@var filename 保存的文件名
 * /@var txt 保存的内肉
 * 
 * /@link http://feiniaomy.com
 */
 function download_txt(filename,content,contentType) {
  if (!contentType) contentType = 'application/octet-stream';
  var a = document.createElement('a');
  var blob = new Blob([content], { 'type': contentType });
  a.href = window.URL.createObjectURL(blob);
  a.download = filename;
  a.click();
}





  


































  
//////////////////////////////
//////////////////////////////
///////// User Btn ///////////
//////////////////////////////
//////////////////////////////

    // User網站更新
    function UserSendCodeToMe() {  

      // Get user change all
      // 客修改內容 如有空 if '' 不會空,預txt
      var AllChangeCode = _GetAllCode(".UpTxt")
      console.log('///Get All UpTxt Data ed///')
      console.log(AllChangeCode)

      // txt zip b64
      var str = utf8_to_b64(AllChangeCode)
      console.log('///Now Code b64///')
      console.log(str)

      // SendWsToAki
      let wsToAki = 'https://wa.me/85298672794?text=' + str
      window.open(wsToAki, '_blank').focus() // https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window

    }




  // Admin網站更新
  function AkiUpHtmlCode() { 

    // get Data code
    var val = $("#AkiUpHtmlCode").val() // <input id="AkiUpHtmlCode"><button onclick="AkiUpHtmlCode()">

    console.log("AkiUpHtmlCode val")
    console.log(val)
    // Un zip Data code
    console.log("///UnzipData///")
    var AllTxt = b64_to_utf8( val )     // UpZIP b64
    console.log(AllTxt)

    // post Data code
    var AllTxtB = AllTxt.split(".,.")   // 切割字串 https://www.wibibi.com/info.php?tid=258
    var OK = _postAllTxt('.UpTxt',AllTxtB)
    console.log(OK)

    // Change Css
    UserChangeCss()

    // Change IMG(_myImg1~21)
    for(var i=1;i<22;i++){   
      var imgNb = "_myImg"+i
      ChangeIMG(imgNb)
    }
 

  }




































    // testCodeAKi202203260113 = 
    I2ZmY2RkMi4sLiNlNmVlOWMuLC4jZTA0MGZiLiwuIzkwY2FmOS4sLuWFqDIyMjIy5Z+O5a6j5YKz5pWI5oeJLiwuaHR0cHM6Ly96b2RpYWMudHcvZm9jdXNfcGhvdG9zLzUxMjc2LmpwZy4sLuWinjExMTExMeWAvOeEoemZkOWVhuapny4sLmh0dHA6Ly9qZGFpbHluZXdzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNC8lRTglQjYlOEElRTUlOEQlOTclRTUlQjclQTglRTQlQjklQjMlRTUlQTYlQjlNaWthJUU2JTlDJTgwJUU2JTg0JTlCJUU4JTkxJTk3JUU3JTlDJTlGJUU3JTkwJTg2JUU4JUE0JUIyNy5qcGcuLC7ppqzkuIrlt6gzMzMzM+WKoOebny4sLmh0dHBzOi8vaS5pbWd1ci5jb20vZnhrOTBjNi5qcGcuLC5odHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NRTVJ4SFU5REFkSmp3Vk9aa1YtS1BnMVhKNUV6N2ZWejJnLUEmdXNxcD1DQVUuLC7pm6oxMTEx5rOl56Kz5aSp54S255qCLiwu5oqXMjIy55ar56au5YyFCS4sLm9rZWEzMzMzcHDlhY3osrvlu6PlkYouLC7pl5zmlrw0NDQ05oiR5YCRLiwu5q275q275q27Liwu5LiN5oiQ5Yqf5LiN5pS26LS5LiwuaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjVEgteVg5aWx6Q3ZDc0ZDQ21MTG55bmc3M2tkeE92ckthckN4OF9BcjdtalZ4RjRYRWRHNDFBMGV1RkNGb1Z4OGt2Y2s4JnVzcXA9Q0FVLiwu5LiL6LyJT2tlQXBwLiwuZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBb0hDQklWRlJnU0ZSVVlHQklTRWhJWUVoRVJHQklSRVJnUkdCVVpHaGdZR0JnY0lTNGxIQjRySHhnWUpqZ21LeTh4TlRVMUdpUTdRRHMwUHk0ME5URUJEQXdNRUE4UUdCSVNHalFoSVNFeE1UUTBORFEwTkRRME5EUXhNVEUwTkRRMU5EUTBNVFkvTVRReE5EUTBOREV4TkRRME1UUTBORDAwTkRFeE5ETTBQLy9BQUJFSUFSY0F0UU1CSWdBQ0VRRURFUUgveEFBY0FBQUJCUUVCQVFBQUFBQUFBQUFBQUFBREFBSUVCUVlCQndqL3hBQkNFQUFDQVFJREJBY0dCQU1HQmdNQUFBQUJBZ0FERVFRU0lRVXhRVkV5VW1GeGthSFJCaE1pZ1pLeEZFSnl3UWRpNFJVamdxS3k4Rk5qYzVQUzhTUXpSUC9FQUJrQkFBTUJBUUVBQUFBQUFBQUFBQUFBQUFBQkFnTUVCZi9FQUNjUkFRRUJBUUFDQWdFREF3VUFBQUFBQUFBQkFoRURJUkl4UVFReVVTSmhjUVVUZ2FHeC85b0FEQU1CQUFJUkF4RUFQd0NvUkZ5alFkRWNCeWlXbXZJZUFnMHFES1AwajdRMkdHWTI3SjJYMUhMK1VuRFVWSVB3amZ5RXNLZEJiRDRSNENDd2xNZ0h2L2FUNmE2Q2MydGRhWmppVUZ2MEYra1FxMEU2aS9Tc0lCSEtKbGFzMWFDZFJmcEVIaXNPcFJ3RVc1UndMS0wzeW0wa2lWUjI3VDk1N25LK2YzZ1M5bHk1aTJXKy9kZUtlenRSUFpYWkREUFVxcFlxb1ZWZFJjSU4zaVQ1VFJMUlRxTDlLeTJvWVRJamg3WGErN3UwbGFKZEdUZmNKMUYrbFozM0NkUmZwV1BFNklsQmU0cDN0a1g2VmsvQzRTbjFGK2xaR29DK3ZNNmR3bHBoMWp5VkdYRFUrb24wcjZRcTRhbUIwRStsZlNjRFJ3dWU2V2sxTU5UdmZJbjByNlFndzlQcUo5SytrS0U4SkdxMXdOQnVIR0JEakRVK29uMHI2VG40Vk9vbjByNlIyR3ZsQk84aS93QXVFSkpwd0w4TW5VVDZWOUp3NFduMUUrbGZTR25ESkFINFduMUUrbGZTS0dNVUE4T3BPYkR1SDJsaGdPbC9oUDNFcXFESFR1SDJsbmhEOFh5L2NUbzFmVEhNOXJtaWRQbkphUG9KVzBITnZuSmlIUVRucmFKd2hFRUNoTjVJUVNMVkNVNllJdjJ5bUd3S2Z2eFV6dm05OHIyK0cxODRhMjdkTENyVlpUWUVnV2w1aDhNaFJYS2pOa0RadU9iTGUvakt5VlAyaTlsN3laVUJvZkVWV0lGemVSUVpWRUZCbkhQNVJ2WTIrWEdKVEV4Qy9FZFR1QWlOTHBMYlNUVXFBRGZLK2dLajhsQjR0cC9XVHFOS21wdTdGendWUmxYNWs3NDRWR1NzQ2JEVThockp5RExxMm5aeGtKOFlkeTVFSHkvYUNJUnVtN0hzWDRSSzZTVmljVmZTOWh5Z1VvTWRUOEs4MjA4dU1TVkthZEJRRDFqZG44VENMUnFQcTN3cnpiZmJ1Z1F4eFF1RlVYM0MvQzBraVJLSVcrVkI4SzcyNXQzeVlKTk9GR21PTWFZZ2JlS2NpZ0hoZEZEcDNDV09EcG5OdTRIN2lSOE1uUjE0TDlwWjRaTmZsNlM5YVJNcE9HUTJQZkxDa3BzSkh3NmFIdmsybW1nbVZxMGhZYWtJTUNEcjQwVWdDVkxadE5EYmRKbnRSK0l3bFJqZFZ1TGN4djhBR1hkS3FvcEJTZmlGT3hHdThMSSt4NjN2cWVjREw4YkN4MTNBZXNGaUtsaXd0dUxDYXhLR1dFYUkwUjRFS0JhYzZyNjZEZCtZNkQ1VGltT1V4S1dHRlVjYmsrVXNrcGNsVHZZRmpLZkRNZStXMUdvL0JmRXlzcHA3SUJveXIzak1zWDRlbnZ5My9TMTRWWHFkUWVJL2VCTkpTVG95djFRZEQyZ2JqOHBSZGQ5NVRUVUlBZVozd1JlcFZObDZQUGNJUkNkMXczWXdzZkF4elZhblFDNWU0VzhJZ1BTb2hCWWE4enpNSkdJdGdCeUVjVElwdU5PR0pvMG1BTmlpaWdIakdHWG8vd0NIN1Myd3lpL3lsZmhWNkduViswdDZDNjd1RVZvNFBRR256azVCb0pIdzY2SFRqSmE3aElwd1pGdVFJekg0TkdBdmZRbmNiY0pEMjE3d1VIS1pnNEM1U21ZTjBodXRydWd2WVVWWGVxSzJkZ0VUTDc3T3d2bU43WnVNck0vSXRYMnl2N3RNaWJzNU91cHVRUFNSNjdrczNhVys4bTQyeXZZV0F5alFXQTR5b3F2cWRlSmxrY0laQkl0RTVyV0lKSkEwMTM4WmFsVlVidGVRaU9Jd0U2RmoyYTM1YjlsNDFXditVandNRFM4TXN0OE1OMHFLRDlobHJRcWprZkF5NG5TY29qR3B0ekI3R0gyTTZ0VmYvWXRDTFVVOFI0eWtvV0lJSFRHVTlZYmpHbDNBK0ZyanMvY1N4SXYvQUx2QVBoeGU2L0MzTmR4N3hGWWNwSmV3dnZ0cjN4eGtaOFNGK0ZqWW00QjRYNzVYZmlUMS93RE4vV1phdkY1ejFjTVkweXAvRUhyK0xmMWt2RFZnVjZRTy9pREZLZHp4SmlnL2VEbVBFUlNpZVY0VlQ4SGN2MmxwUkd2eWtIQ3AwTzVmdExLa212eW1mUWtVTng3NGRZT2tsaDg0WlUwaUR0UEhVNnBGTkNjNzlHNElHZ3VkZTRHV0dEcE5TSkw3bUFBdDhXb2xKc1hDWmF5TmU5aTJsdjVHRTBPMUhzRjd6OXBySnhLRHRDcXJQY2Jzbys1bGRWRnd3NWcrWWhxNzNQeWd4QUI3THdwREJ5VDhPaWdmQ0wydGUzZHpsMHdQTHp1WlhWZHBVY01tYXE2aS9CaVA5M2xjL3R0VHVwU2t4VmowbnRUTnY1VjNuaHZ0RmZYMjE4WGkxdTh6T3I5MU1iTXpqdmJsRXNUUWNxVGE2dXR3ZTRpZHcvdDVnMjZZcUorcEE0L3lFeHlkbllQSmpYanZOVGxhcWpMUEQzNXpNWUwybndMa1d4Q0MvQ29UVFA4QW5BbWx3TlZIR1pDSEhXUWhoNVNwS3l0V05POXQ1anJIbkdwYnRIeWhBdklpVWx3SzNNZUVlckhpUENLeEVTbU1JVzA4S3RSQ3Y1clhBM0c0M0VUSkpVVlRjN2hjSFRqTjI2Qmg5aU40UFpNbjdRNFVxR3FBYTNCcUFjUnVEajkvR1o3ejMyMDhldWVxaHRYVitqdzMzRnBLdzFVQmJIbWVFb3NMaWQrbkxqM3l4bzFMcmUzT1pPaGRyVUZvcEVTdm9OT0E0eFRUa1kvS3NuaFZGazdsK3dsalNHdnlrSERFV1g5Sy9ZU3dwbldZMnA0T2trMDEwRWpLRHdsSGk2TlgzaldEMnpDMXIydHBLek9sYTE2NFZFK05SWmh1TnllempBWStxeEF1ZUo1U3l4N0RJMm80ZjZoS0dvM2JOU01Zd0dOeFFwVTNxbmRUUm1zZUpBMEhqYUZ2TTU3WllvQkZvOEhPZXBiZmtRZ2hlOW1zUGtZS3hpNzFKR1RWNnRkeFVjbDZsUS8zYUc1RitZSEJSTmRndGhxaUZuK09vM1NjNjJQSWNvMzJYMllWSHZuSDk0NEdWZW9uQlJOSFZXNG1HOWRydWxtSkpuNm4vYkQ0M0RXdXJDNm1VT0l3akx1MVh6SGZOM2pzS0RLUEVZV3gwaGpkejlPbTN4ZnFNelBsOVdmbGxoRFVLaFE1a0pSdXNoS040aldXVmZCS3gxRmp6R25qSXpiT2NkR3pEczBQZ1oxWjh1YjkrbkQ1ZjBIa3o3eC9WUDVpMndIdGJ0Q2xiSmlhaEEvTFVJckQ1NXdacU5uL0FNVGF3c0s5QktnNHZUSm92NEc0UGxQUENqTDBsSTd3Uk9vNG12TTF4YXpyTjl6ajNEWlB0cmdhOWdLcG91YldwNG15cVR5RDNLbnhtano4U05EdVpkVkluemtyUzYyTjdTWXpDa2U2cW4zWTMwWCtPaVJ5eW5vLzRiUlhQOEorVDNRT04xOWY5N3BIeDlET2hIR3h0ZmRxTFdQWVptdlo3MjF3Mkp0VHFBVWE3R3dWamVrNS9rZjhyZGgrUk0wYnVVMzNLYnJuZXA1SHM3WkZuRlNzbFEyTGtEUGNNb05paHVyb1FmQWpYZkl0ZHlqWlZOaFlhYUhmM3pZVkVDdm1IUmNXYmxtRzZPS0x5SGdKanFOYzdZMFl0K3Q1TEZOamtYcWp3RVVPVS9sUDRZRERVemxYOUsvWVNiVFhXQW9kRmYwcjloSnRCTG41VEtrcnRvKzBOTERNRWRYWXV1WUZBaEZyMjF1dzVTMndGSTEwU3VtaVZGREtIMGNEdHRjWDA1eWsyL3NHbldkV1ozQlZMZkRsdGE1UEVkczFldzhNS2VHcDAxSktwVHNDMXJrWE8rMDF6SnhGRHhlS1VvUUFkYmN1WWxXelI3VkNSYUF2S0luY0tDeE5nb0pKTzRBYnpNN2hzS2NYWDkreTJvcFlVd2Z6bFRvZTRFazk1N0pPeDZOWHFERGk0cHFBOWRob1NML0NnUGJhNTdKZlVLSVVCUUxBQUFBYUFBY0pqdlg0ZDNpejhNOS9OLzhBRFVwMkVhOGtQSXRRekdtaDF4SUZXaURKMVl3QmgwMVhWd2NpdGhTTjB2eFR2QnZoNDVwcGp5N3grMjhVZDJFWTYwMjZkSlQyZ0FIeEV0cWxEc2tXcFJsNTAxdjZyZC9keS81a1Z6WVBEazJEbEdQNWJnK1JnNnV6WFVYVWhoMmFIdzR3ZTE4SG1Va0Q0bDFIZHhFcU1KanFsUG90cDFUcXM2TWExenN2WFB2eWZwdDM0NzhmeC92RSszQStCbTY5a2ZiZkpsdzJMZTlJaktsZDdsazVLNU85TzA3dTdkajBxcFhVc290VVhwTHo5WlZZczZnVGFXYW45M0Q1dkJmRHFjdmMzM0srZ2NTQ2c1MDI2TGI4cDRhOHUyT3B2Y1hubFBzbDdadlJYOExpQ1h3NXNLYm03UFNQTCtaT3poNVQwdlo3Z3FDcHVqQUZDRGNFY0xIbE10WjRpVk9paWlrcllqREQ0Vi9TdjJraEh0eGtmREg0Vi9TdjJFRHRTbVdRQUM1ekQ3R1k1bnNWb01EU1IxSllCaUdzQ2VWcDE2aFFsVk5sWFFBYmdKQjlsUmtwdUcwSnFYNTZaVmpzWTR6dDMvdE4rSlJDWnlOdkhKdms2dkllWjI4RXdsQlZ6RWIzWXN4NW13SDJBSHlreUNwd2pOT2ErM1dHN1NKVmFTSE1pVlRGVlJHcU5CQXp0UXhpeVZKRk9GV0FRd3FtTUcxcVY5WlcxMWxtN3lyeGJSd0lHSUV5T0tUSzdMMjZkeDFtcnFQTTN0WC9BT3cvcFdkUGd2dHorYWYweW1iT3FsS2lrY1RZOXhqOFNMdTNJTXdIeU1qNFhWMS9VSWV1ZmliOVRmZWJ6OXlOMjN3NS90YWFvbm9mOE10bzFNNzRZbTlQSVhRSFhLd1lBMjVBNXQzTVR6eE44M1g4TWwvK1M1NVlkdk4wbGEvYlhOUHQ2ZGVLY2ltRFpnNnVKRk9pYWhGeFRwaGlvMEpzbzBrYllXMVZ4am1rcUZDdE12bVloaFlNcTJzUDFlVUFhcHFKN3R1ZzlNSzF0RFlqZ1pZK3lXeUtkS3N6cG11YVRMOFJ1TEYwUDdTY3lma3F1cU5QM0l5azVzeHZjYWRuN1NEaUh1ekhtWlliVmF6TCtuOTVWTzJwbGxYSStrSUtTYVN6RHlhL0RieFovS1FrVHRPd0x0TTI1bFJwRnFHR2N5TzVrcUFlTVVSN1JvaU05VEhab0VtTmFwR0RxdFNWZUtxU1RYcVNweFdLUmRXWURrTjVQY0k4em9KM0FCWW13QXVTZVV5dUtyWjNaaHVKMDd1RW40MnU5WFRvMHdkeDBKN1c5SkRYM2FidmlQbDR6cThmci9MUHllTzJmMVhrRXdpNVA3dzhPaU9aakx4cjFDeDE4QnVpV2JabjVybTh1NXFUT2ZxRFU1cy80ZDRySmlnbkNyVGRQbUxPUDlKOFpqcVNFN2dUM0FtWDJ3UTlLdlNxbFRaS2lGdHdPVzltMzloTXJXcHozVTU4SGsxZldiZitIczE0b09sVVYxREEzVmhkU054QmltQ3JteDR2N052VWJFMEZZdVVOUkFWWXNWSTVFSGhQVWE2S2d1b0NrbTExQVUyNVhFeEd4Tm0xRXEwcWpBWlZaR05pQ2JXNVRaN1J4Q2xBQmZwZnNZK0lRY1c1SkZ6ZlRpYjhaR0ppcXVMeHQ0clQ1MjhQWGZKYVNQU1dTVW5OcTl2WFRtY25EbU1DNWhta2Q1TlhBbk1DMEswQzBTZ21qR2p6R09Zak1jeVBVcUFhazJBM2s4b1Z6TXY3UTQwc2ZkS2YrcGJ5V1ZuUGFWdkVmYkcxcy93STFrNHNMM2J1dHVFcC9lZ2FxTG5yTjZReTBMeVRUd2htODVrU2ZMNnZGYXpzMjhrOW5Ed2hhZEYyM0tmMmx0VHdoLzJKWTBjSjIrRWYrN3o2aTUrbThkOTczMVRVOW5OK1lnZDJwbGhoZG5KMWI5cDFsb21HVWNQR1NFU1JmSnEvbHJOZUR4ZnN6Mi96UVV3NUNrNkJWQko3Z0lMQVVjWFhJOTFoM3NmenVyS24xdFpmT2JYMlh3ZXBxRWFMb3Y2ai9UN3pVR1ZtZG50Ry93RFVmSjlUMS9oQjJCaFhvMEZTb3dMaTVhM1JCSkp5am1CZUtUb3BvOC9XdGF0cktVTU5sUld2dVJUdTdCRzRpcGNidU1lWGIzUVAvTFgvQUVpVnlWR09oM2QwdXhrSXhuVmpUQzBsbU85ZXVOZkhuMzBlbUpJRUVnaEpnNkNZd0R3ckdCZUtpQlBBbUZlQk1TakdFRThLeGtYRTFRb0pPNGI0R2diVnhvcHJwMG0wVWR2T1pVVXlUYzd5Yms5cGsvRXVYY3Nma09RNFIxR2hOTTNrSERLR0dsaFJ3MExoNk1uVXFVbTZFUkJoWVJLZHBQRkdOOTNBZEFTbkoyRHdqT3dVRFVtS2xTdWJBYW5nSnJ0azdQRk5jeDZiYit3Y3BXYzlaYjF4S3dtSENJcURjQnFlWjRtSG5JcHZIT2RlS05pakR3UmF0UzNTZTFoK1pyUkdzM1hieE1ZYW90eDNTTzlVZHMxUzFYc3RYZGlVQnVvSlp5MXpxUW9RQTM3R00yTkpablBaSEM1YVFjNzZqRnY4TzVmTDd6VG9KeWVTOTAzeE9ROVJIR0lSakdaMXBIR01FeG5XTUd6U1RocndSbldhQ2Q0R1pVYVozYW1LenRrSFJCMTVFeWZ0WEYyR1JlazIrM0JmV1U5Tkk1RlFxVktUNk5HY28wNU5wcEMweXBwSk5NUnFyQ2dSRjBRR2RWTHh0TlNTQU5TZHdFMDJ5ZG1CTE8vVDREcS8xbFp6OG1XdFRKYksyYmtBZHg4WjNEcS8xbHNJMG1LODZKT1RqbnQ2ZEZPWm9wUWRpaWlnSGgySTJjcW9YREc0UzlqYTE3ZDBxcUdGZW9jcTd5UUIzazJub1l3Tk1vQVVCQlFYQjRpMEhoTmwwMGNNaUJRTmJMeFBBeXRYa0xQdThXdUF3NFJGUlJaVlZWSGNCWVNlQkJVbGh3czVLNllWNE5qSE5BdTBtbkRXTUM1blhhQmQ0bEd1MGhZN0ZCRnVma09aaHExUzJwNFRQWWl1WGEvNVJvbzdMNzRRek5XSlk2a3lSVHB4VWFjbElzZHFqNlNTU2l3YUNTRUVSVVJFaGFOQm5ZS291VHdqcVZNc1FCdkowbW53R0JXbU9ibnBOK3c3SldjL0tzdGErSnV6dG1yVEZ6WTFPdHdIZEowNU9Ub21lT2UyMzdPbkx6bDRwUU9FN21qWW9BK0tOdkZBTWtuUUg2Rit3ZzhJNGJVWDBaaHJ6VmlQMmt4TUljZ09ZZEJlSFlJeWhUQTNDdzEwR2dpOHQ5Y1B4UWFuQ1huRldkYWN6Y04ya1oyaEhNQTVpcHdObWtlbzhKVWFSS2pSS1FOcVZyaklPTy91NVNIUlNQWVoySjdmS1M2TkNDbkVTSFJJUUphY0JnUnlDT3FWMFJjenNGVUVETXhDaTUzYjVHeE9LU211ZHpZY0J2SlBJQ1pEYkcwVFdaVDhRVlFiSVNNb045NHR4dHhQbEx4aTZSclhIb0d5L2FUQklwejFVemxqMFZxdFpiNkMrVzNoTm1obno2RFBSeC9FYW1QL0FNNy9BRnA2VGVaNHcxT3Q5bUU2RE16N04rMVNZeDNwclRaRFRRTVM3S3dOMnRZV21pVXlraVJUZ003QUZGRkZBT3hUa1VDNnBIZTFOUjFsUWVRdkFvSkd3bUlWMFFxNGRjbzFWc3kzQXNSY2NSYVNWTXg4bXUxdGpQSUxHT1kxNmtBMVdadE9IT1pIcU5PdlVFaXZVa3FrTmRwRHhUV1U5dW5qRGxvS3NtYTNLOTRHajRhakppcmFKRXRCMXF0dElBNTJsWnRIYWkwaGEyYW9Sb203NXNlQWxoUXBsNzYyMzZpeDErY2dWL1pFc1N3clhZNmt1dXBQZUQrMDA4ZU8rNnoxcVQwem1LMm5VcUxrZktSbXpYQXNiNjI0N3RkMGdNSmNZM1lsZWsyVTAyWWNHcHF6cVI4aHA4NURxYlByZjhHcC93QnVwNlRwNUo5TTdlb2VXT25YUmxKVmxLc042c0NyRHZCM1JxZzNnRmxzVGJGYkNzejBzbWFvb1ZzNmx4bEJ2b0FSTHBmYnZIZjhuNkcvODVtTFJDQmNqMi9ZdUthcGg2VlY3WjZsS203WlJaY3pLQ2JEZ0pQRThRcGJVeEtxRld2VlZWQUNxdFNvcWdEY0FBZEJKdUEydmlNNHpZaXBhemRLcFV0dVBNdzRtNWV4VG9tUjltTnFLUy92SzRPbFBMN3lvUDVyMnpIdW1oRzBxSC9HcC9YVDlZckU4VGJ4Uml1Q0xnZ2c2Z2pVRUhsRkFtWnd5S3FnS0FGc0xCUUZHN2tJcXRVQ0RvTjhLL3BYN1FxS044dzE5dXJQMGo1S2o3cklQNXRUNFJ3MmUzRno4Z0FKTldGV1o4VjFVVk1GVUc1cjk0dElUaDFQeEMzYnZFMHBXQnFVZ2VFT0gxUUpySExMR3BoUndGdTZWdUpvVkJvbHRkN053SGR4aU05NmdHZ0YyTzVSdi9vSXhOa3Mvd0FWUmpyK1JEbFVmUGVaTXdPRkM2NzJOcnNkNWxpb2prVGFqVU1JRkFBM0RkSkswN1FxUjlwY3ZFV2REVlk0aUVWWXFnajdTK01aSGF2c3ExYXE5VmFvVTFDRGxaQ1FDRkEzZzluS1Z1STlpOFV2UmFtNDdHWkQ0TVAzbm9GRkpJeXlwcWprZU80elpXSXBhMUtUcUIrWWk2ZlVOSkR0UGNscDZXbFZqdlpqQ1ZibHFZVmorZW44RFg1NmFINWlYTi95bmp5VVJ3TTJPMFBZU291dEdvR0hCS2d5dDlRMFBsTTVpOWo0bWwwNlRnZFlET3YxTGNTNXFVV0lEQzg0Rmp3c2NKUlBTTUY3WFlOYWROU3ozV21nUHdNZFFvQiswVTg0Qm5ZdmlYSTlHb2RGZjByOW9aREEwZWl2NlYrMElrNTdHc3FRaGgxZ0VobE1td3pnSjIwNWVLOFhGR09ranZUa294ckxFRUcxb1pLa1RwQkVTUjlwS3ZDSzhoWm85WGxTcHNUMWVNWjdtUm1xemlQS29XZEhkQ2d5Q2xXT1dySENXU1I0RWdyV2gwclJnY3JHbW5PTFVuYzRnRmZqZGlZYXIwNlNFbjh3R1Z2cVd4bERpL1lXZ2RhYnVoNU5aMS9ZK2MxMllSWmhENVdGeDUxVzloY1NEOEwwMkhPN0tmbUNJcDZOY1JTdm5vdmpHS3dPMEVhbXBKdDhJdUxOdkE3cEpYR1UrdDVONlJSUW9neVkybjF2SnZTRkdOcDlieWIwaWlpcW9kK01wOWJ5YjBuZnh0UHJlVGVrVVVYSUlYNDJuMXZKdlNjL0dVK3Q1TjZSUlJXUXpIeGxQcmVUZWtqdGk2Zlc4bTlJb3BOa09VMXNYVDYzazNwQi9qS2ZXOG05SW9vU1FVTTQxT3Q1TjZRcVl5bjF2SnZTS0tWeUpFL0gwK3Q1TjZSNlkrbjF2SnZTZGlod2hWMmhUNjNrM3BDTHRHbjF2SnZTS0tNQ3J0R24xdkp2U08vdEduMXZKdlNLS01IZjJqVDYzazNwRU5vMCt0NU42UlJRQjM5bzArdDVONlJSUlFELzJRPT0uLC5odHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NUdVVuRHRqWVRCMVhXcjBPUVNFWER0LWVqOE5jNjZPWGhqaUEmdXNxcD1DQVUuLC7oq4vlnKhPS0VhcHDmiZPplosuLC5odHRwczovL2NjLnR2YnMuY29tLnR3L2ltZy9wcm9ncmFtL3VwbG9hZC8yMDE5LzA0LzE3LzIwMTkwNDE3MTI0MDE4LWEzMmIyOGIzLmpwZy4sLumbquazpeeisy4sLuaJgOaciS4sLuWkqeeEtueagi4sLuW9seeJhy4sLmh0dHBzOi8vcGJzLnR3aW1nLmNvbS9tZWRpYS9EOGhhamktVThBQUxab2I/Zm9ybWF0PWpwZyZuYW1lPWxhcmdlLiwuaHR0cHM6Ly9jYy50dmJzLmNvbS50dy9pbWcvcHJvZ3JhbS91cGxvYWQvMjAxOS8wNC8xNy8yMDE5MDQxNzA5MjQxMi0yNWFmMTM1Yi5qcGcuLC5odHRwczovL3BpYy5waW1nLnR3L3N0b25lMTk4NC8xNTc4NTQxODY5LTIyOTcxMjgyMjJfd24uanBnLiwuaHR0cHM6Ly9pLmltZ3VyLmNvbS9RRnVHVzlFbC5qcGcuLC5odHRwczovL2F0dGFjaC5zZXRuLmNvbS9uZXdzaW1hZ2VzLzIwMTgvMTAvMTkvMTU5ODMxMS1YWEwuanBnLiwuaHR0cHM6Ly9tZWRpYS5ub3duZXdzLmNvbS9ubl9tZWRpYS90aHVtYm5haWwvMjAxOS8wNC8xNTU1Mjg4ODA5LWEzZDk0NmIwYTYzNmNmMThlYjY0ZjVmYWNhMTFjMDE0LTY5NngzOTQuanBnLiwuaHR0cHM6Ly9pbWcubHRuLmNvbS50dy9VcGxvYWQvbmV3cy82MDAvMjAxOS8wNy8xMC9waHBOeHNNTkQuanBnLiwu6YGp55So5Lu75L2V5bm06b6E5oCn5Yil5Lu75L2V55qu6IaaLiwuaHR0cHM6Ly9lem5ld2xpZmUuY29tL3VwbG9hZHMvMTU5MTY2Njc1MS1ua1hVSC5qcGcuLC5odHRwczovL2ltZy5uZXdzLmViYy5uZXQudHcvRWJjTmV3cy9uZXdzLzIwMTkvMTAvMzEvMTU3MjUxMzcwMF82MDc2My5qcGcuLC5odHRwczovL2ltZy5uZXdzLmViYy5uZXQudHcvRWJjTmV3cy9uZXdzLzIwMTkvMTAvMzEvMTU3MjUxMzcxOF80MzkwMy5qcGcuLC5odHRwczovL2F0dGFjaC5zZXRuLmNvbS9uZXdzaW1hZ2VzLzIwMTkvMDUvMjUvMTk0MTUzMi1QSC5qcGcuLC7pm6rms6XnorPkuobkuoblvJPlpKnnhLbnmoIuLC7mipfmnItiYmLnlqvnpq7ljIUuLC5va2VhcHDlhY3osrvlu6NmZmZm5ZGKLiwu6ZecYmJiYuaWvOaIkeWAkS4sLmh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1R2TUhtY3lra1dqR1ZHR2NjbVpGVk5WTWlhakdldE1Xa20wZyZ1c3FwPUNBVS4sLndoYXRzQWZmZnBwLiwuODUyLTU5MzJnZ2c4NzIzLiwuVGVycnJsLiwuODUyLTU5MzI4Jm5ic3A7ICZuYnNwOzcyMy4sLuW+ruS/oUliYmJELiwuQTUxNjc5MmRkZDkyLiwuZW16enphaWwuLC5oa2hlYWx0aGdyb3VwQDE2My5iYmJjb20uLC5yb3JvcnJvLiwu

//////////////////////////////////////////////////



