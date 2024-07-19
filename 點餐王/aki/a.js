
/* ******************************************************************************************************
*********************************************************************************************************
加密解密

      :::::::::       :::::::::::       :::::::::        ::::::::       ::::::::       :::::::::       ::::::::::
          :+:            :+:           :+:    :+:      :+:    :+:     :+:    :+:      :+:    :+:      :+:
        +:+             +:+           +:+    +:+      +:+            +:+    +:+      +:+    +:+      +:+
      +#+              +#+           +#++:++#+       +#+            +#+    +:+      +#+    +:+      +#++:++#
    +#+               +#+           +#+             +#+            +#+    +#+      +#+    +#+      +#+
  #+#                #+#           #+#             #+#    #+#     #+#    #+#      #+#    #+#      #+#
#########       ###########       ###              ########       ########       #########       ##########

*********************************************************************************************************
*********************************************************************************************************/
// https://www.cnblogs.com/mq0036/p/4983858.html
// https://codepen.io/98672794/pen/dyrqexv 
// https://www.jshaman.com/#polymorphic
// https://www.toutiao.com/article/7135349649744970281/
// 加密解密 https://blog.csdn.net/s3248149993/article/details/131722545
// 时间锁 https://blog.csdn.net/w2sft/article/details/119026719
// 反调试 https://blog.51cto.com/jsjiami/5983101
// sha256 https://chateverywhere.app?shareable_conversation_id=f4f1e4ac-853f-48a3-b6cc-acf9a2c3172a
// 解 http://www.ttmd5.com/hash.php?type=9
// https://codepen.io/98672794/pen/dyrqexv 

//function _0x1731ba(_0x2991c0){_0x2991c0=unescape(_0x2991c0);var _0x4cc9d7=String["\u0066\u0072\u006f\u006d\u0043\u0068\u0061\u0072\u0043\u006f\u0064\u0065"](_0x2991c0["\u0063\u0068\u0061\u0072\u0043\u006f\u0064\u0065\u0041\u0074"](0xb3e2d^0xb3e2d)-_0x2991c0["\u006c\u0065\u006e\u0067\u0074\u0068"]);for(var _0x4abf0e=0x27c76^0x27c77;_0x4abf0e<_0x2991c0["\u006c\u0065\u006e\u0067\u0074\u0068"];_0x4abf0e++){_0x4cc9d7+=String["\u0066\u0072\u006f\u006d\u0043\u0068\u0061\u0072\u0043\u006f\u0064\u0065"](_0x2991c0["\u0063\u0068\u0061\u0072\u0043\u006f\u0064\u0065\u0041\u0074"](_0x4abf0e)-_0x4cc9d7["\u0063\u0068\u0061\u0072\u0043\u006f\u0064\u0065\u0041\u0074"](_0x4abf0e-(0x62a68^0x62a69)));}return _0x4cc9d7;}
//解密
function _0x1731ba(code){
  code=unescape(code)
  var c=String.fromCharCode(code.charCodeAt(0)-code.length)
  for(var i=1;i<code.length;i++){
    c+=String.fromCharCode(code.charCodeAt(i)-c.charCodeAt(i-1))
  }
  //  console.log(c)
  return c
}  

//function _0x5569ds(_0x32a16c){var _0x15f2ba=String["\u0066\u0072\u006f\u006d\u0043\u0068\u0061\u0072\u0043\u006f\u0064\u0065"](_0x32a16c["\u0063\u0068\u0061\u0072\u0043\u006f\u0064\u0065\u0041\u0074"](0x356e4^0x356e4)+_0x32a16c["\u006c\u0065\u006e\u0067\u0074\u0068"]);for(var _0x560947=0x8813f^0x8813e;_0x560947<_0x32a16c["\u006c\u0065\u006e\u0067\u0074\u0068"];_0x560947++){_0x15f2ba+=String["\u0066\u0072\u006f\u006d\u0043\u0068\u0061\u0072\u0043\u006f\u0064\u0065"](_0x32a16c["\u0063\u0068\u0061\u0072\u0043\u006f\u0064\u0065\u0041\u0074"](_0x560947)+_0x32a16c["\u0063\u0068\u0061\u0072\u0043\u006f\u0064\u0065\u0041\u0074"](_0x560947-(0xb6045^0xb6044)));}return _0x15f2ba;}
// 加密
function _0x5569ds(code){
  var c=String.fromCharCode(code.charCodeAt(0)+code.length)
  for(var i=1;i<code.length;i++){  
    c+=String.fromCharCode(code.charCodeAt(i)+code.charCodeAt(i-1))
  }
  return c
}


//解密B
function _0x0113kl(_0x3f839c){var _0x47a3bb=_0x3f839c;var _0xc7da2=_0x47a3bb["\u0073\u0070\u006c\u0069\u0074"]("\u002c");var _0x56660f="";for(var _0x4ed79e=0x24154^0x24154;_0x4ed79e<_0xc7da2["\u006c\u0065\u006e\u0067\u0074\u0068"];_0x4ed79e++){var _0x2a95ea=parseInt(_0xc7da2[_0x4ed79e]);_0x56660f+=String["\u0066\u0072\u006f\u006d\u0043\u0068\u0061\u0072\u0043\u006f\u0064\u0065"](_0x2a95ea);}return _0x56660f;}













// TxtZip https://zzzmh.cn/post/12addf1ff9224d5d87a77638fa50522c
// 低  <script src="https://cdn.staticfile.org/pako/1.0.10/pako.min.js"></script>
// 压缩
function TxtZip(str) {
  const binaryString = pako.gzip(encodeURIComponent(str), {to: 'string'})
  return btoa(binaryString);
}

// 解压
function unTxtZip(b64Data) {
  let strData = atob(b64Data);
  const charData = strData.split('').map(function (x) {
    return x.charCodeAt(0);
  });
  const binData = new Uint8Array(charData);
  const data = pako.inflate(binData);
  strData = String.fromCharCode.apply(null, new Uint16Array(data));
  return decodeURIComponent(strData);
  }

































































// 防f12
//var startTime=new Date();debugger;var endTime=new Date();var isDev=endTime-startTime>(0x4ce04^0x4ce60);var stack=[];if(isDev){while(!![]){GT=Owner=repo=客data5=url3=客data2=api=點餐王=查客="\u672A\u98EF\u5DE6\u98DF".split("").reverse().join("");stack["\u0070\u0075\u0073\u0068"](this);console["\u006c\u006f\u0067"](stack["\u006c\u0065\u006e\u0067\u0074\u0068"],this);}}


// make 256
function calculateHash(input) {
  var hash = CryptoJS.SHA256(input);
  //console.log(hash.toString(CryptoJS.enc.Hex));
  return hash
}


/* admin set Us AC*/
function _取明文(data,sel) {
  if(sel === 'pw') {re = escape(_0x5569ds(calculateHash(data).toString(CryptoJS.enc.Hex)))}
  if(sel === '2') {re = calculateHash(data).toString(CryptoJS.enc.Hex)}
  if(sel === '位') {re = calculateHash(data).toString(CryptoJS.enc.Hex)+'/'+_0x1731ba(客data5)}
  return re
}











































































async function _makeAC(sel,id,pw,d位) {
  SeeAc = await _SeeGitHubTxt(d位)

  // Setting AC
      // Make AC
      if(!SeeAc){
        await _upTxtToGitHub(d位,_取明文(nowTime(),'pw')+id[1]+akiAdPw+_取明文(nowTime(),'pw')+id[1]+pw+_取明文(nowTime(),'pw')+'%u7DB6%uF88B%uF622%uF8630'+_取明文(nowTime(),'pw')) // 基本網站 = 0

        // Make 客Demo 
        //let UsAPI = d位.split('/')[0] 
        公司料 = id[0] + 格 + '請上傳公司商標圖片或填寫商標圖片網址' +格 + '公司Whatsapp號' +格 +
        'ws來詢字' +格 +'warning' +格 +'#CDDC39' +格 +'#EA80FC' +格 +
        '#000000' +格 +'#607D8B' +格 +'100px' +格 +'480px'+格
        枱號 = 'A1' +格 +'B1' +格 +'C2' +格 +'D2' +格 +'E3' +格 +'F3' +格  
        AllData = nowTime() + 線
                + 公司料    + 線
                + '請填寫產品分類名稱'    + 線
                + '收款式'  + 線
                + 枱號      + 線
                + '產料'    + 線
                + nowTime()
        await _upTxtToGitHub(d位.split('/')[0] +'/d',escape(_0x5569ds(AllData)))

        //Get客DemoData = await _SeeGitHubTxt(d位.split('/')[0]+'/d')
        //console.log('Demo Data 已生成',Get客DemoData)
        re = '  帳戶已建立!!'
    }
    else {
      if(sel === 'Make') await _AddAC(SeeAc,id,pw,d位) //admin入
      else re = '  帳戶名稱已被使用!!'  // 客人
    }
    return re
  }







// add AC
async function _AddAC(SeeAc,id,pw,d位) {
  網lv = (SeeAc).split('%u7DB6%uF88B%uF622%uF863')[1][0]
  帳戶數量 = ~~((SeeAc).split(id).length-1)-1

  // 帳不在開
  if (SeeAc.indexOf(id+pw) !== -1) re = '  這個帳戶已經存在!!'

  else {
    await _upTxtToGitHub(d位,SeeAc+_取明文(nowTime(),'pw')+id+pw+_取明文(nowTime(),'pw'))
    帳戶數量++
    re = '  的新成員已建立!!'
  }

  re = re+'\n網lv='+網lv+'\n已有'+帳戶數量+'個帳戶'
  return re
}




































































// 更網Lv id=店名,pw=lv 基本網站 = 0 | 購物 = 1
async function _ChangLv(pw,d位) {
  SeeAc = await _SeeGitHubTxt(d位)

    // 切SeeAc轉網lv
    SeeAc網lvA = (SeeAc).split('%u7DB6%uF88B%uF622%uF863')
    // 字符串删除第一个字符 https://chat.openai.com/share/413a8f08-f0b5-49ff-bc3f-72fcf8635321
    網lvB = SeeAc網lvA[1].substring(1)
    // 加回lv新SeeAc
    新SeeAc = SeeAc網lvA[0]+'%u7DB6%uF88B%uF622%uF863'+pw+網lvB

    await _upTxtToGitHub(d位,新SeeAc)

    adminSet網lv = '基本網站'
    if(pw === '1') adminSet網lv = '購物網站'
    re = '已設置為'+adminSet網lv+'=LV'+pw+'!!'
  
  return re
}





async function _睇Data(pw,d位) {
  d = _0x1731ba(await _SeeGitHubTxt(d位.split('/')[0]+'/d')).split(線)

  if(pw === 'u%9B%CB%C8%C8%C7%98l%9C%CC%C9%9Bn%9C%99k%9C%9Dngion%99%99%9A%9Aoo%99%9Ap%9C%95%96%C6%C5%95el%9D%C8%98%99%9Ej%93%96jmik%9D%9Bj%94%93i%9D%C8%97l%9C%9E')         re = d

  if(pw === 'v%98%9An%98%94ij%99%CC%99g%9A%C9%C8%96j%9D%9A%98%9Ahd%99%CB%CC%9B%96%94%99%9Blkk%98%C5%C5%95%99%C6%C2%93d%98%97%95%98m%9C%93a%96%9Ag%96%C8%C6%99ool%97%96%96') re = '公司資料=0x00485740673475==\n' + d[1]

  if(pw === '%A4%98kjh%9A%98%94%93hk%9A%96g%9B%CA%CA%95c%99%9Bnphi%9A%9B%9B%97%99%94ccaj%9C%93g%9B%9C%9A%98%99%98f%97%9Fi%94%C5%94%94%97ll%9B%CA%C8%94d%94%C3%95h')         re = '分類名=0x00485740673475==\n'   + d[2]

  if(pw === 't%99%95gkdhmkh%94%C7%C9%C6%9A%9A%98f%93%C8%95e%98%94%95%C9%C8%C9%CB%98%94%C5%95g%98%99ideciom%9B%C9%95a%97%9Cjd%92%99%9C%99kik%9B%96m%9F%C9%C8')               re = '收款方式=0x00485740673475==\n' + d[3]

  if(pw === 't%96%94dinnn%9B%98%98%C8%95%97%C9%99g%94%99%9C%9Epl%9A%9Alnje%95%94b%94%96%98%95cc%95%97%99%CA%97ej%9B%C5%92h%9A%97jhd%97%C9%C4%C4%C7%C5%C3%C8%9E%99')         re = '台號=0x00485740673475==\n'     + d[4]

  if(pw === '%A5%CB%98%96%95ci%9B%C9%98j%99%9Bmf%94%C3%C2%C5%94fgei%9A%9Ai%96%92%93%99gj%9A%92%97%98deei%99%94%97%C7%C4%C5%C9%C8%C7%C8%9Ao%9E%9Bjkj%95%C7%CB%98l%9D')       re = '產品/文章=0x00485740673475==\n'+ d[5]

  return re
}




// 更data
async function _ChangeData(sel,pw,d位) {

  // 取all data list
  d = _0x1731ba(await _SeeGitHubTxt(d位.split('/')[0]+'/d')).split(線)

  // 取舊data
  od = d[sel]
  
  // 取新data !=D
  if(pw[0] === '!') nd = pw.substring(1).replace(/,/g,格) // 全更新=! 
  else nd = od + pw.replace(/,/g,格)// +舊料

  // 刪舊data 新data入
  d.splice(sel, 1, nd)

  console.log('新data',d)

  // 更data
  AllData = ''
  for(var cont=0 ; cont < d.length ; cont++){
    AllData = AllData + d[cont] + 線
  }
  await _upTxtToGitHub((d位.split('/')[0]+'/d'),escape(_0x5569ds(AllData)))

  // 睇新data
  re = _0x1731ba(await _SeeGitHubTxt(d位.split('/')[0]+'/d')).split(線)

  return re
}


















































































































let 客Lv    = 1
  , 簡單版 = !true
  , 產品標頭 = '產品'
  , 錢位     = '產品價錢'
  , GT = '103,104,112,95,104,90,85,104,111,75,120,78,76,85,120,68,70,87,114,109,97,109,48,67,55,54,98,70,115,48,65,89,72,99,49,57,100,70,55,116'
  , Owner = 'Aqnmiipm'
  , repo = 'v'
  , NoIMG   = 'aki/NoIMG.jpg'
  , dot     ="'"
  , 格      = '///-///'
  , 線      = '-----------------------'
  , QR      = 0
  , 客data5 = 't%DC%DA%99%8F%CC%D4'
  , MOK     = !true 
  , ADminLV = !true  // 客admin
  , 客角    = ['0是沒有','mok','東主','小編','店員','帳房'] // 更新 AC make 第?
  , 帳單未結帳 = '未結帳!!'
  , akiAdPw = 'v%98%9An%98%94ij%99%CC%99g%9A%C9%C8%96j%9D%9A%98%9Ahd%99%CB%CC%9B%96%94%99%9Blkk%98%C5%C5%95%99%C6%C2%93d%98%97%95%98m%9C%93a%96%9Ag%96%C8%C6%99ool%97%96%96'
  // m88z88889888a88
  //, akiAdPw = 'pb%94%92dimmim%9E%96%94%C9%99%98%98ll%99%9Ad%96%97b%92%96%9A%9A%9A%9B%99%99%9B%9A%9B%9Dl%97%C5%97%96%9B%9D%CA%96a%93%92%93%9Cja%92%94j%9C%C6%9Am%98%93%92%C3'


  /// qqq 加到位
  , loingIcon = '<div class="spinner-border spinner-border-sm text-warning" role="status"><span class="visually-hidden"></span></div>'

















function nowTime() {//获取当前时间
    let now= new Date();
    let _month = ( 10 > (now.getMonth()+1) ) ? '0' + (now.getMonth()+1) : now.getMonth()+1;
    let _day = ( 10 > now.getDate() ) ? '0' + now.getDate() : now.getDate();
    let _hour = ( 10 > now.getHours() ) ? '0' + now.getHours() : now.getHours();
    let _minute = ( 10 > now.getMinutes() ) ? '0' + now.getMinutes() : now.getMinutes();
    let _second = ( 10 > now.getSeconds() ) ? '0' + now.getSeconds() : now.getSeconds();
    return now.getFullYear() + '-' + _month + '-' + _day + '_' + _hour  + _minute + _second;
}








































// 将远程图片转化为base64
// https://www.jsjiami.com/article/js-download-img.html
// https://chat.openai.com/share/6c8a5783-4208-4e96-90a2-154bf27491b6
const imageCache = {};

function _图片转base64(img, maxWidth = 500, maxHeight = 500) {
    function getBase64Image(img, maxWidth, maxHeight) {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");

        var width = img.width;
        var height = img.height;

        // 根据长宽比例调整尺寸
        if (width > maxWidth || height > maxHeight) {
            var aspectRatio = width / height;

            if (width > height) {
                width = maxWidth;
                height = width / aspectRatio;
            } else {
                height = maxHeight;
                width = height * aspectRatio;
            }
        }

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);
        var dataURL = canvas.toDataURL();
        return dataURL;
    }

    if (imageCache[img]) {
        return Promise.resolve(imageCache[img]);
    }

    var image = new Image();
    image.crossOrigin = '';
    image.src = img;

    return new Promise((resolve, reject) => {
        image.onload = function () {
            var base64 = getBase64Image(image, maxWidth, maxHeight);
            imageCache[img] = base64;
            resolve(base64);
        }
        image.onerror = function () {
            reject(new Error('Failed to load image'));
        }
    });
}

async function _imgToB64(img) {
    try {
        // 如果是 base64 图片，直接返回
        if (img.indexOf('data:') === 0) {
            return img;
        } else {
            return await _图片转base64(img);
        }
    } catch (error) {
        console.error(error);
        return img;
    }
}










// https://chat.openai.com/share/7b7feb9e-0a41-444e-b92c-b5a5570c5ee2
function _分割列表(列表, 關鍵字) {
  let 結果 = [];
  let 當前子列表 = [];
  for (let i = 0; i < 列表.length; i++) {
      if (列表[i] === 關鍵字) {
          結果.push(當前子列表);
          當前子列表 = [];
      } else {
          當前子列表.push(列表[i]);
      }
  }
  if (當前子列表.length > 0) {
      結果.push(當前子列表);
  }
  return 結果;
}









// 生成随机字符串 https://segmentfault.com/a/1190000022718482
function randomString(e) {    
  e = e || 128;
  var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
  a = t.length,
  n = "";
  for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n
}

























// 顯示已提交未結帳的訂單
function _顯示已提交未結帳的訂單(此台尾單車用,sel) { 

    let 入坐人數 = 此台尾單車用.split('!好?')[1]
      , 入坐時間 = 此台尾單車用.split('!好?')[2]
      , 已點的訂單車用 = 此台尾單車用.split('!好?')[3].split('!?')
      , totoPrice = 已點的訂單車用.pop()    // 刪除並取最後一個元素
      , 料料

    for(var 已點的cont=0; 已點的cont<已點的訂單車用.length;已點的cont=已點的cont+3){   
                              // 0=品名
      let bb = 已點的cont+1   //   選項
        , cc = 已點的cont+2   //   單價
        , 選項車用 = 已點的訂單車用[cc]
        , 單總價車用 = 已點的訂單車用[bb]
      料料 = 料料 + '\
        <tr>\
          <td><b style="color: '+左Menu下色+';">'+已點的訂單車用[已點的cont]+'</b></td>\
          <td style="text-align:right;" rowspan="2">'+選項車用+'</td>\
        </tr>\
        <tr>\
          <td>'+單總價車用+'</td>\
        </tr>'
    }

  return [入坐人數,入坐時間,料料,totoPrice]
}


















/* **********************************************************************************
*************************************************************************************
CSS

      ::::::::       ::::::::       ::::::::
    :+:    :+:     :+:    :+:     :+:    :+:
   +:+            +:+            +:+
  +#+            +#++:++#++     +#++:++#++
 +#+                   +#+            +#+
#+#    #+#     #+#    #+#     #+#    #+#
########       ########       ########

*************************************************************************************
*************************************************************************************/

let 網all按鍵
    //btn-primary 藍
    //btn-success 青
    //btn-info 淺藍
    //btn-warning 黃
    //btn-danger 紅
    //btn-secondary 灰
    //btn-light 黑

  , 網色1號
  , 左Menu下色
  , 網字色1號
  , 網字色2號
  , 產品鍵圖尺寸高
  , 產品鍵圖尺寸高max
  , 產品鍵圖尺寸橫
  , 產品鍵圖尺寸橫max
  = 0

let htmlStyle = document.documentElement.style
// js取到css样式变量 https://blog.csdn.net/qq_39953537/article/details/91047839

function _轉css(公司頁料) {

  // 轉主css
  網all按鍵 = 'btn-' + 公司頁料[4]
  網色1號   = 公司頁料[5]
  左Menu下色= 公司頁料[6]
  網字色1號 = 公司頁料[7]
  網字色2號 = 公司頁料[8]

  產品鍵圖尺寸橫    = 公司頁料[9]
  產品鍵圖尺寸橫max = 公司頁料[10]

  // 轉色
  htmlStyle.setProperty("--網色1號", 網色1號)
  htmlStyle.setProperty("--左Menu下色", 左Menu下色)
  htmlStyle.setProperty("--網字色1號", 網字色1號)
  htmlStyle.setProperty("--網字色2號", 網字色2號)

  // 內容大小
  htmlStyle.setProperty("--產品鍵圖尺寸高", 產品鍵圖尺寸高)
  htmlStyle.setProperty("--產品鍵圖尺寸高max", 產品鍵圖尺寸高max)
  htmlStyle.setProperty("--產品鍵圖尺寸橫", 產品鍵圖尺寸橫)
  htmlStyle.setProperty("--產品鍵圖尺寸橫max", 產品鍵圖尺寸橫max)

}




