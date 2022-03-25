
















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
      var 副色 = ".detail p,a,#filters ul li a h5,.navbar-inverse .navbar-nav > li > a,.florL li,#google_translate_element_1,.contact_info p"
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
      console.log('///純///')
      //console.log('///33333///')
      //var str = str.replaceAll('/','__')   // for js cut
      //var str = str.replaceAll('+',' ')   // wsOVG cut the "+" ,re add
      //console.log(str)

      // SendWsToAki
      let wsToAki = 'https://wa.me/85298672794?text=' + str
      window.open(wsToAki, '_blank').focus() // https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window

    }




  // Admin網站更新
  function AkiUpHtmlCode() { 

    // get Data code
    // qqqq 錯位post list岩 // val testCodeAKi20220325 = "IzAwYjhkNC4sLiNlZjlhOWEuLC4jZmZjMTA3LiwuI2VhODBmYy4sLuWFqOWfjuWuo WCs aViOaHiS4sLmh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS85ODY3Mjc5NC85ODY3Mjc5NC5naXRodWIuaW8vbWFpbi9ha2kvaW1nMjAyMjAzL1dlTWFrZUFwcC5qcGcuLC7lop7lgLznhKHpmZDllYbmqZ8uLC5BbXlJTUcvc2xpZGUyLmpwZy4sLummrOS4iuWKoOebny4sLkFteUlNRy9CRy5wbmcuLC5odHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM__ZXhwb3J0PWRvd25sb2FkJmlkPTFXWkF2ckZxUmFNaTA2azFrZVUwM0FkZVU2c09ocTFfby4sLumbquazpeeis WkqeeEtueagi4sLueUouWTgTIuLC7mipfnlqvnpq7ljIUJLiwu55Si5ZOBMy4sLm9rZWFwcOWFjeiyu W7o WRii4sLueUouWTgTQuLC7pl5zmlrzmiJHlgJEuLC7nlKLlk4E1LiwuODUyOTg2NzI3OTQ__dGV4dD1tb2suLC7mjoPnorzos7rnpq7ljIUuLC5BbXlJTUcv6aas5LiK5Yqg55ufLnN2Zy4sLuewoeaYk eZu iomOeoi W6jy4sLuS4i i8iU9rYUFwcCDlj4PliqDpgYrmiLIg5Y v542y6LSI56au5YyFLiwu54m56YG45ZWG5oi25YSq5oOgLiwu5ZKMMTAl6IezNTAl5oqY5omj5YSq5oOgLiwu5LiL6LyJT2tlQXBwLiwuQW15SU1HL WinuWAvOeEoemZkOWVhuapny5zdmcuLC5BbXlJTUcv56uL5Y2z55m76KiYLnN2Zy4sLuiri WcqE9LRWFwcOaJk mWiy4sLkFteUlNRy__lr7blr7bnsbPmipfnlqvnpq7ljIUucG5nLiwu6Zuq5rOl56KzLiwu5omA5pyJLiwu5aSp54S255qCLiwu5b2x54mHLiwuQW15SU1HL0JHLnBuZy4sLkFteUlNRy9oMC5qcGVnLiwuQW15SU1HL2gxLmpwZWcuLC5BbXlJTUcvaDIuanBlZy4sLkFteUlNRy9oMy5qcGVnLiwuQW15SU1HL2g0LmpwZWcuLC5BbXlJTUcvaDUuanBlZy4sLumBqeeUqOS7u S9leW5tOm hOaAp WIpeS7u S9leearuiGmi4sLkFteUlNRy9zMS5qcGcuLC5BbXlJTUcvczIuanBnLiwuQW15SU1HL3MzLmpwZy4sLkFteUlNRy9zNC5qcGcuLC7pm6rms6XnorPlpKnnhLbnmoIuLC7mipfnlqvnpq7ljIUuLC5va2VhcHDlhY3osrvlu6PlkYouLC7pl5zmlrzmiJHlgJEuLC5BbXlJTUcvcXIuanBnLiwud2hhdHNBcHAuLC44NTItNTkzMjg3MjMuLC5UZWwuLC44NTItNTkzMjg3MjMuLC7lvq7kv6FJRC4sLkE1MTY3OTI5Mi4sLmVtYWlsLiwuaGtoZWFsdGhncm91cEAxNjMuY29tLiwuODUyNTkzMjg3MjM__dGV4dD3lgaXlurfls7ZBbXnmgqjlpb3mn6XoqaLpm6rms6XnorPlpKnnhLbnmoIuLC4="
    
    
    var val = $("#AkiUpHtmlCode").val() // <input id="AkiUpHtmlCode"><button onclick="AkiUpHtmlCode()">
    var val = val.replaceAll(' ','+')   // wsOVG cut the "+" ,re add
    var val = val.replaceAll('__','/')   // for js cut

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







































//////////////////////////////////////////////////













    
    // Admin功能測試 PostTxt
    function _AdminTest_GetAndPostTxt() {  
      let AllChangeCode = _GetAllCode(".UpTxt") // get code not this
      //console.log('%s \n %s \n', _postAllTxt(AllChangeCode.split(".,.")), AllChangeCode)
      let AllTxt = AllChangeCode.split(".,.") // tt[0] // = xxx |切割字串 https://www.wibibi.com/info.php?tid=258
      let OK = _postAllTxt('.UpTxt',AllTxt)
      console.log('%s \n %s \n', OK, AllChangeCode)// all 內容 入文字 https://blog.csdn.net/qq449245884/article/details/105085580
      }
  

  
    // Admin功能測試 UpAndChangeImg
    function _AdminTest_GetAndPostImg() {  
      let AllChangeCode = _GetAllCode(".UpImg") // get code not this
      //console.log('%s \n %s \n', _postAllTxt(AllChangeCode.split(".,.")), AllChangeCode)
      let AllTxt = AllChangeCode.split(".,.") // tt[0] // = xxx |切割字串 https://www.wibibi.com/info.php?tid=258
      let OK = _postAllTxt('.UpImg',AllTxt)
      console.log('%s \n %s \n', OK, AllChangeCode)// all 內容 入文字 https://blog.csdn.net/qq449245884/article/details/105085580
      }
  
  