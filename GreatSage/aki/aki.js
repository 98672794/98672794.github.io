

// 大賢者 - 202207121119
























//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////// BaseData ////////////////////
////////// all html demo just change this ////////
//////////////////////////////////////////////////

題 = "大賢q者 - 202207121119"
示 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdti7rZ1sn-fCY3rOS2s-6lcR20mR_oKl9QA&usqp=CAU"





//////////////////////////////
//////////////////////////////
/////////// onload ///////////
//////////////////////////////
//////////////////////////////

// 讓網頁一開始就執行js https://www.zymseo.com/big5/program_250447
window.onload=isAutoRun();//將代碼綁定到window.onload事件
function isAutoRun(){

  // js 轉tit https://stackoverflow.com/questions/413439/how-to-dynamically-change-a-web-pages-title?answertab=trending#tab-top
  document.title = 題

  // js 轉favicon https://stackoverflow.com/questions/260857/changing-website-favicon-dynamically
  var link = document.querySelector("link[rel~='icon']")
  link.href = 示


}









//////////////////////////////
//////////////////////////////
/////////// window.open ///////////
//////////////////////////////
//////////////////////////////


  // https://blog.starrocket.io/posts/five-search-engines-other-than-google/
  function search()
  {
    var search_input=document.getElementById("結果input字v").value;// value of search box
    var option=document.getElementById("option").value; //value of select
    window.open(option + search_input);   //proceed with search
  }



  // googleTranslate
    // jacky0719 Dont run this script, it will cause whole html slow down for 20 secs, this script is outdated
    // OVG ALL
    // https://www.w3schools.com/howto/howto_google_translate.asp
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');  
    }    
  
  














////////////////////////////////////////////////////
////////////////////////////////////////////////////


 // jquery 实现顶部导航下滑消失，上滑显示动画 - 掘金
 // https://juejin.cn/post/6844903978518446087
    var scrollTopLast = 0;
    window.onscroll=function(e){
        var scrollTop = e.target.scrollingElement.scrollTop;
        if(scrollTop > scrollTopLast){
            console.log("滑轮向下滚动");
            $(".topbar").css("transition", "0.5s")
            $(".topbar").css("opacity", "0")
        }else{
            console.log("滑轮向上滚动");
            $(".topbar").css("transition", "0.5s")
            $(".topbar").css("opacity", "1")
        }
        console.log(e.target.scrollingElement.scrollTop);
        scrollTopLast = scrollTop;
    }

//作者：布谷咕咕
//链接：https://juejin.cn/post/6844903978518446087
//来源：稀土掘金
//著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


  














// 移除父元素 JavaScript
// https://www.learnfk.com/question/jquery/6647736.html
// https://api.jquery.com/closest/

$(".SmsBoxClose").click(function() {
  event.preventDefault();
  $(this).closest('.SmsBox').remove();
});
























  




//////////////////////////////////////////////////
//////////////////////////////////////////////////

//////////////////////////////////////////////////
//////////////////////////////////////////////////

//////////////////////////////////////////////////
//////////////////////////////////////////////////

//////////////////////////////////////////////////
//////////////////////////////////////////////////

//////////////////////////////////////////////////
//////////////////////////////////////////////////

//////////////////////////////////////////////////
//////////////////////////////////////////////////

//////////////////////////////////////////////////
//////////////////////////////////////////////////

//////////////////////////////////////////////////
//////////////////////////////////////////////////

//////////////////////////////////////////////////
//////////////////////////////////////////////////

//////////////////////////////////////////////////
//////////////////////////////////////////////////

//////////////////////////////////////////////////
//////////////////////////////////////////////////


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










  
  
  //function googleTranslateElementInit_TWToCN() {
    // 限版
    // <div id="google_translate_element_簡"></div>
    // // https://www.w3schools.com/howto/howto_google_translate.asp
    // https://stackoverflow.com/a/60884979/8008799
    // GList https://cloud.google.com/translate/docs/languages
    //new google.translate.TranslateElement({pageLanguage: 'zh-TW', includedLanguages: 'zh-CN', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false},
    // 'google_translate_element_1');
    //}
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



