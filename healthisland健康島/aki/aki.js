

// 202205230245
// 用法
// User :
//  手機到 web.com?user
//    轉字 = 可直接編輯
//    轉圖 = 將圖網址貼上
//    轉色 = 左導航查色,看效果
//    上傅 = 左導航第一鍵=send code to WebAdmin
//    WebAdmin上傅後可用f12查看code
// WebAdmin :
//  手機到 web.com?useraki
//    最下貼上code看新效果
//    人手change Github code, pass AkiUpHtmlCode









////////////////////////////////
//// 用唔到
//////////
// 202205101644 冇flow其說法
// 定義

// User :
//  轉字 = phone(url?User)
//  轉圖 = phone(ImgUpGDrive);phone(url?User)
//  change = buttUpCodeWs

// 用 chrome 到 url?User
// 圖up到GDrive取分享url
// 修改完按鍵toAdmin(F12可看碼)

// admin
//  看新效果 = phone(url?UserAdmin)
//  change = CodeToGithub(index(AkiUpHtmlCode))


// 202203161207 mokaki.js會員系統 98672794  










  
//////////////////////////////
//////////////////////////////
/////////// onload ///////////
//////////////////////////////
//////////////////////////////




// 讓網頁一開始就執行js https://www.zymseo.com/big5/program_250447
window.onload=isAutoRun();//將代碼綁定到window.onload事件
function isAutoRun(){

  // Admin手機網站更新時關 *********************
  //  自動按code轉頁面內容,可用做payPage
  //  change Github page code, pass to AkiUpHtmlCode
  AkiUpHtmlCode() // web base data display // <input id="AkiUpHtmlCode" value="code">
  // Admin手機網站更新時關 *********************

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

    
    //<!--AD 停修用--> // https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove
    $(".item").css("position", "relative")
    const span = document.getElementById("addAdmin");
    const classes = span.classList;
    classes.remove("carousel-inner")


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

  // Admin手機網站更新
  //AkiUpHtmlCode()

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





  // all 文字 內容取  2022003242322OK
  function _222GetAllCode(HaHa_getElementsBy) {   

    var cont = ".,."
    var list=$(HaHa_getElementsBy)  // 取文字內容
    var allTxt = "" // 建立字串 用於取all文

    for(var i=0;i<list.length;i++){          //  loop + 字

      // 202203242137 if undefined           //  不同html tat轉
      var tttt = list[i].innerHTML               //  1 先找textarea var
      if (typeof tttt == 'undefined'){       //  if not 
        var tttt = list[i].value         //  2 再找div
        console.log("value:"+tttt)  
      } // https://flaviocopes.com/how-to-check-undefined-property-javascript/
      else{   console.log("innerHTML:"+tttt)  }  //  re1 textarea have

      allTxt = allTxt + tttt + cont
      }
      console.log(allTxt)
      return allTxt
  }



  // all 文字 內容取  2022003242322OK
  function _qqqqqGetAllCode(HaHa_getElementsBy) {   

    var cont = ".,."
    var list=$(HaHa_getElementsBy)  // 取文字內容
    var allTxt = "" // 建立字串 用於取all文

    for(var i=0;i<list.length;i++){          //  loop + 字

      // 202203242137 if undefined           //  不同html tat轉
      var tttt = list[i].value               //  1 先找textarea var
      if (typeof tttt == 'undefined'){       //  if not 
        var tttt = list[i].innerHTML         //  2 再找div
        if (typeof tttt == 'undefined'){ 

        }

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

    // Change IMG(_myImg1~36) just雙數
    for(var i=1;i<36;i++){   
      var imgNb = "_myImg"+i
      ChangeIMG(imgNb)
    }
 

  }






// 05240418 User input Login 
// https://stackoverflow.com/a/4365272 

  // User input Login 
  function UserInputLogin() { 
    // get user name
    let val = $("#UserinputLogin").val() //<input id="UserinputLogin"

    // UserLogin
    let UserLogin = './?' + val
    window.location.href = UserLogin; // 原頁轉跳 https://www.runoob.com/w3cnote/js-redirect-to-another-webpage.html

  }
// OK202205242145

























    // testCodeAKi202203260113 = cmdiYSgxNjUsIDIzNSwgMTU2LCAwLjkpLiwucmdiYSgyMywgMTM5LCAxMTAsIDAuOSkuLC5yZ2IoMjI4LCAwLCAwKS4sLiM5OTkuLC7lhajln47lrqPlgrPmlYjmh4kuLC5BbXlJTUcvc2xpZGUxLmpwZy4sLuWinuWAvOeEoemZkOWVhuapny4sLkFteUlNRy9zbGlkZTIuanBnLiwuQW15SU1HL0FteeWBpeW6t+WztmxvZ28ucG5nLiwu5Yaw5rKz5rOl5aSp54S255qCLiwu6Yar576O5YGl5L+x5qiC6YOoCS4sLuWkqualtQkuLC7lnLDlo7zmqILkvZPogrLpgYvli5UuLC7lgaXlurflrrbluq3oj5zorZwuLC5va2VhcHDlhY3osrvlu6PlkYouLC7pl5zmlrzmiJHlgJEuLC44NTI1OTMyODcyMz90ZXh0PeWBpeW6t+WztkFteeaCqOWlveizvOiyt+WkqeeEtueagi4sLuaOg+eivOizuuemruWMhS4sLkFteUlNRy/ppqzkuIrliqDnm58uc3ZnLiwu57Ch5piT55m76KiY56iL5bqPLiwu5LiL6LyJT2thQXBwIOWPg+WKoOmBiuaIsiDlj6/njbLotIjnpq7ljIUuLC7nibnpgbjllYbmiLblhKrmg6AuLC7lkowxMCXoh7M1MCXmipjmiaPlhKrmg6AuLC7kuIvovIlPa2VBcHAuLC5BbXlJTUcv5aKe5YC854Sh6ZmQ5ZWG5qmfLnN2Zy4sLkFteUlNRy/nq4vljbPnmbvoqJguc3ZnLiwu6KuL5ZyoT0tFYXBw5omT6ZaLLiwuQW15SU1HL2JibTIuanBlZy4sLuWPr+WIsOWwluadseW6t+Wuj+W7o+WfuOmihuWPluazsOWbvemggue0muiMieiOiemmmeexs+S5meS7vSDpgIHlrozljb3mraIuLC7lrqLmnI06NTkzMjg3MjMuLC7lpKnnhLblhrDmsrPms6XnmoIuLC5BbXlJTUcvQkcucG5nLiwuQW15SU1HL2gwLmpwZWcuLC5BbXlJTUcvaDEuanBlZy4sLkFteUlNRy9oMi5qcGVnLiwuQW15SU1HL2gzLmpwZWcuLC5BbXlJTUcvaDQuanBlZy4sLkFteUlNRy9oNS5qcGVnLiwu6YGp55So5Lu75L2V5bm06b6E5oCn5Yil5Lu75L2V55qu6IaaLiwuQW15SU1HL3MxLmpwZy4sLkFteUlNRy9zMi5qcGcuLC5BbXlJTUcvczMuanBnLiwuQW15SU1HL3M0LmpwZy4sLumGq+e+juWBpeS/seaogumDqC4sLkFteUlNRy9wMl8yLmpwZWcuLC5BbXlJTUcvcDJfMS5qcGVnLiwu5Zyw5aO85qiC5L2T6IKy6YGL5YuVLiwuQW15SU1HL3AzXzEuanBlZy4sLkFteUlNRy9wM18yLmpwZWcuLC5BbXlJTUcvcDNfMy5qcGVnLiwuQW15SU1HL3AzXzQuanBlZy4sLkFteUlNRy9wM181LmpwZWcuLC7lgaXlurflrrbluq3oj5zorZwuLC5BbXlJTUcvcDRfMS5qcGcuLC5BbXlJTUcvcDRfMi5qcGcuLC5BbXlJTUcvcDRfMy5qcGcuLC5BbXlJTUcvcDRfNC5qcGcuLC5BbXlJTUcvcDRfNS5qcGcuLC5BbXlJTUcvcDRfNi5qcGcuLC5BbXlJTUcvcDRfNy5qcGcuLC5BbXlJTUcvcDRfOC5qcGcuLC5BbXlJTUcvcDRfOS5qcGcuLC5BbXlJTUcvcDRfMTAuanBnLiwu5Yaw5rKz5rOl5aSp54S255qCLiwu6Yar576O5YGl5L+x5qiC6YOoLiwu5aSq5qW1Liwu5Zyw5aO85qiC5L2T6IKy6YGL5YuVLiwu5YGl5bq35a625bqt6I+c6K2cLiwub2tlYXBw5YWN6LK75buj5ZGKLiwu6Zec5pa85oiR5YCRLiwuQW15SU1HL3FyLmpwZy4sLndoYXRzQXBwLiwuODUyLTU5MzI4NzIzLiwuVGVsLiwuODUyLTU5MzI4NzIzLiwu5b6u5L+hSUQuLC5BNTE2NzkyOTIuLC5lbWFpbC4sLmhraGVhbHRoZ3JvdXBAMTYzLmNvbS4sLjg1MjU5MzI4NzIzP3RleHQ95YGl5bq35bO2QW155oKo5aW95p+l6Kmi5aSp54S255qCLiwu
//////////////////////////////////////////////////



