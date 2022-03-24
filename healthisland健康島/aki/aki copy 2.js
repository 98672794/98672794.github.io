
















// 202203161207 mokaki.js會員系統 98672794  










  
//////////////////////////////
//////////////////////////////
/////////// onload ///////////
//////////////////////////////
//////////////////////////////




// 讓網頁一開始就執行js https://www.zymseo.com/big5/program_250447
window.onload=isAutoRun();//將代碼綁定到window.onload事件
function isAutoRun(){

  // user login 
  // display adminPage if user //////////////////////
  if (location.href.indexOf('51679292') != -1){
    console.log("user login!")

    // display Admin Box
    $("#AkiAdmin").css("display", "flex")
    $(".UpTxt,.AdminIMGSetBox").css("display", "block")

    // all target=new page,save change data time
    $("a").attr("target","_blank") // 修改a https://blog.csdn.net/bfboys/article/details/52810081


    


    

  }

}






































































//////////////////////////////
//////////////////////////////
///////////// GET ////////////
//////////////////////////////
//////////////////////////////



/** download 文件 AKi
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


//qqq myImg1 just
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








  // all 文字 內容取  202203110101OK
  function _GetAllCode(HaHa_getElementsBy) {   
    var cont = ".,."
    var list=$(HaHa_getElementsBy)  // 取文字內容
    var allTxt = "" // 建立字串 用於取all文
    for(var i=0;i<list.length;i++){ // loop + 字
      allTxt = allTxt + list[i].value  + cont
      
      //console.log(list[i].value )
      }
      //console.log(allTxt)
      return allTxt
  }


















































//////////////////////////////
//////////////////////////////
/////////// Change ///////////
//////////////////////////////
//////////////////////////////


// Js Base64 字符串 加密、解密 https://developer.mozilla.org/en-US/docs/Glossary/Base64
function utf8_to_b64( str ) {   return window.btoa(unescape(encodeURIComponent( str )));  }
function b64_to_utf8( str ) {   return decodeURIComponent(escape(window.atob( str )));  }
    




    //即時监听输入 Change css
    function UserChangeCss() { 
      // 取色碼
      var val1 = $("#ChangeColoe1").val()
      var val2 = $("#ChangeColoe2").val()
      var val3 = $("#ChangeColoe3").val()
      var val4 = $("#ChangeColoe4").val()

      //奉奉奉奉奉奉qqqqqqqqqqqqqqqqqqqqqqqqqqqq 
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
    function ChangeIMG(imgNb) { 
      //alert(imgNb.substr(1))
      let imgUrl = document.getElementById(imgNb).value // imgNb input is img url
      if (imgUrl != ''){  // if have data
        let turnImgUrl = document.getElementById(imgNb.substr(1)).src = _InputSel(imgUrl) // imgNb.substr(1) = imgNb[1:] = _myImg123 ~> myImg123  | _InputSel(imgUrl) return imgurl
        
        // turnImgUrl UpTxt
        let turnImgUrlBox = "#" + imgNb.substr(1) + "_"
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
///////// User Btn ///////////
//////////////////////////////
//////////////////////////////
  
  
    // User網站更新
    function UserSendCodeToMe() {  

      // Get user change all
      // 客修改內容 如有空 if '' 不會空,預txt
      var AllChangeCode = _GetAllCode(".UpTxt")
      // 切割字串 https://www.wibibi.com/info.php?tid=258
      var AllTxt = AllChangeCode.split(".,.") 
      console.log("AllTxt")
      console.log(AllTxt)

      // 合字頭
      var UserNewHTML = HtmlCode[0] + '\n\n'+ AllTxt[10] + '\n\n'  + HtmlCode[1]

      //+ AllTxt[0] + HtmlCode[2] + AllTxt[1] + HtmlCode[3]
      //+ AllTxt[2] + HtmlCode[4] + AllTxt[3] + HtmlCode[5]
      // loop 合字
      for(var i=2;i<HtmlCode.length;i++){ 
        var j=i-2
        UserNewHTML = UserNewHTML + '\n\n' + AllTxt[j] + '\n\n' + HtmlCode[i] + '\n\n'
      }

      UserNewHTML = UserNewHTML + '\n|END|\n'
      //console.log('i=')
      //console.log(i)

      // +字尾
      //+ AllTxt[53] + HtmlCode[54] + AllTxt[54] + HtmlCode[55] 


      //+ AllTxt[55] + HtmlCode[56] + AllTxt[56] + HtmlCode[57] 
      //+ AllTxt[47] + HtmlCode[58]



      //console.log('AllTxt0.length')
      //console.log(AllTxt.length)
      //console.log(AllTxt[56])//58
      //console.log('HtmlCode1.length')
      //console.log(HtmlCode.length)
      //console.log(HtmlCode[58])//60
      //console.log('666')
      //console.log(AllTxt)

      // download .html
      NowTime = new Date().getTime() // 取得從 1970-01-01 00:00:00 UTC 累計的毫秒數 https://www.fooish.com/javascript/date/
      Fname = 'index_'+ NowTime +'.html'
      download_txt(Fname,UserNewHTML);    
      console.log('111')



      

      
      //let str = utf8_to_b64(AllTxt)
      //console.log(str)
      //console.log(b64_to_utf8( str ))


      

      
    }
  
  






























































//////////////////////////////////////////////////






















































    // all 內容 入文字 202203110101OK
    function _postAllTxt(ElementsBy,入all字) {
      // loop get div https://zhidao.baidu.com/question/2267122359741677188.html
      let oDiv=$(ElementsBy); // all Class UpTxt
      let i=0;
      while(i<oDiv.length)
        {
          // 不同html tat轉
          if (ElementsBy == ".UpTxt"){// .UpTxt = textarea = html
            $(oDiv[i]).html(入all字[i] + "a0123") // post 每一個
          }
          if (ElementsBy == ".UpImg"){// .UpImg = input = val
            $(oDiv[i]).val(入all字[i] + "a01ddd23") // post 每一個
          }
          i++;
        }
      return "ok"
    }













    // AdminMakeCodeUrl

    
  
  
  

  
  
  
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
  
  





    // Admin網站更新
    //
    function AkiUpHtmlCode() { 
      // upload file to github using javascript  
      // https://medium.com/axlewebtech/upload-a-file-in-github-using-github-apis-dbb6f38cc63
      // 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
      // https://api.github.com/repos/98672794/98672794.github.io/healthisland健康島/contents/abc.txt

      







     }


