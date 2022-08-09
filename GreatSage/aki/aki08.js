



//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////// BaseData ////////////////////
////////// all html demo just change this ////////
//////////////////////////////////////////////////

題 = "NKOL - 202208062338"
示 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdti7rZ1sn-fCY3rOS2s-6lcR20mR_oKl9QA&usqp=CAU"

權 = '<iframe align="center" width="100%" height="100%" src="../aki/copyright.html" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>'




死撚莫 = "0123"


  
//////////////////////////////
//////////////////////////////
/////////// onload ///////////
//////////////////////////////
//////////////////////////////




// 讓網頁一開始就執行js https://www.zymseo.com/big5/program_250447
window.onload=isAutoRun();//將代碼綁定到window.onload事件
function isAutoRun(){ //   <body onload="isAutoRun()" 

    // js 轉tit https://stackoverflow.com/questions/413439/how-to-dynamically-change-a-web-pages-title?answertab=trending#tab-top
    document.title = 題

    // js 轉favicon https://stackoverflow.com/questions/260857/changing-website-favicon-dynamically
    var link = document.querySelector("link[rel~='icon']")
    link.href = 示
  
    const CopyrightBox = document.querySelector(".footer")
    CopyrightBox.innerHTML = 權


  // Admin手機網站更新時關 *********************
  //  自動按code轉頁面內容,可用做payPage
  //  change Github page code, pass to AkiUpHtmlCode
  ////////AkiUpHtmlCode() // web base data display // <input id="AkiUpHtmlCode" value="code">
  // Admin手機網站更新時關 *********************

  //try {AkiUpHtmlCode()}
  //var AllTxt = AkiUpHtmlCode()
  //console.log("AllTxt")
  //console.log(AllTxt)

  // user login display
  // display adminPage if user //////////////////////

  // 用現url做user login 
  if (location.href.indexOf(死撚莫) != -1){
    console.log("user login!")

    // display Admin Box 
    $(".SmsBoxBtn,.SmsBox ul").css("display", "block")
    $(".SmsBox div").css("opacity", ".8")


    // all target=new page,save change data time
    $("a").attr("target","_blank") // 修改a https://blog.csdn.net/bfboys/article/details/52810081

    //////////// Save ////////////
    // js f5/關閉視窗提示 txt ing 
    // 編輯時 頁面離開或f5或者瀏覽器關閉的時候給予提示 防止用戶誤操作 離開當前頁面未保存數據可能丟失 
    // https://www.geeksforgeeks.org/how-to-detect-browser-or-tab-closing-in-javascript/
    //########qqqqqqq######## window.addEventListener('beforeunload', function (e) {  e.preventDefault(); e.returnValue = ''; });

  }
  else{console.log("WorkIn user!")}// url沒user 

  // aki admin display
  if (location.href.indexOf('aki') != -1){
    $(".AkiUpHtmlCode").css("display", "block")
  }

  // Admin手機網站更新
  //AkiUpHtmlCode()

}




////////////////////////////////////////////////////
////////////////////////////////////////////////////

     
/*
 * aki.css
 * 
 * Copyright (c) 2012, Aki <                                                                

*/


/***************************************/
/* for 0715交互数据管理系统响应式网页模板*/




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















































































////////////// akiOVG ////////////////

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

    function _InputSel(imgurl) {  // 圖網轉

      // if google drive url
      let googleIMG = 'https://drive.google.com/file/d/'  // user 共用 google drive img url
      if (imgurl.indexOf(googleIMG) != -1){
        let turnImgUrl = 'https://drive.google.com/uc?export=download&id=' // can in html img url
        let dsds = imgurl.split("/")  // dsds[5] = google drive img id
        turnImgUrl = turnImgUrl + dsds[5]
        //alert(turnImgUrl)
        return turnImgUrl //google drive img url
      }

      // other img
      else{
        return imgurl
      }
    }






      /////// ChangeLogoOK202208092207 ///////

      function ChangeLogo(ImgVar_Id) { 

        // <input id="Data012" value="AmyIMG/slide2.jpg" type="text"/>
        // <button onclick="ChangeLogo('Data012')">
        // <img id="_Data0" src="images/logo/logo_icon.png">

        // get
          let LogoUrl = document.getElementById(ImgVar_Id).value  // 取圖url val
          let Logotxt = document.getElementById("Data3").value  // 取logo字 val
        
        //sel1
          if (LogoUrl != ''){                                     // if have 圖url

            let turnImgUrl = _InputSel(LogoUrl)                        // 圖網轉

            //sel2 是logo
            if (ImgVar_Id == 'Data012'){   // Data012 是logo = _Data0,ImgDsp_1,ImgDsp_2
              

              // change html 
                // html 轉tit 
                document.title = Logotxt
                // html 轉favicon
                var link = document.querySelector("link[rel~='icon']")
                link.href = turnImgUrl


              /****************** 要轉的位 *********************/
              var Logo1 = document.querySelector("#_Data0")
              var Logo2 = document.querySelector("#_Data1")
              var Logo3 = document.querySelector("#_Data2")

              /* for 0715交互数据管理系统响应式网页模板*/
              Logo1.innerHTML = '<a title="'+Logotxt+'" href="NKOL.html"><img class="logo_icon img-responsive" src="'+turnImgUrl+'" alt="'+Logotxt+'" /></a>'
              Logo2.innerHTML = '<div class="user_img" ><img title="'+Logotxt+'" class="img-responsive" src="'+turnImgUrl+'" alt="'+Logotxt+'" /></div><div class="user_info"><h1>'+Logotxt+'<!-- 文字 --></h1></div>'
              Logo3.innerHTML = '<a title="'+Logotxt+'" href="#"><img  class="img-responsive" src="'+turnImgUrl+'" alt="'+Logotxt+'" /></a>'
              
              // qqqqqqqqqqqq href="#"

              console.log("///圖轉已")
            }
            else{console.log("///not Data012")}

          } // /if have data
          else{console.log("///not data in"+ImgVar_Id)} //  no data no change
      }

























    //<button onclick to this
    function ChangeIMG(imgNb) { // <button onclick="ChangeIMG('_myImg1')">
      //alert(imgNb.substr(1))
      let imgUrl = document.getElementById(imgNb).value // imgNb input is img url
      if (imgUrl != ''){  // if have data
        let turnImgUrl = document.getElementById(imgNb.substr(1)).src = _InputSel(imgUrl) 
        // imgNb.substr(1) = imgNb[1:] = _myImg123 ~> myImg123  | _InputSel(imgUrl) return imgurl
        
        // turnImgUrl UpTxt
        //let turnImgUrlBox = "#" + imgNb.substr(1) + "_"
        //$(turnImgUrlBox).val(turnImgUrl)
        let turnImgUrlBox = "#" + imgNb
        $(turnImgUrlBox).val(turnImgUrl)
      }
    }

    












