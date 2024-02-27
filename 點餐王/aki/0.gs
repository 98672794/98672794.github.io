//客修
// function SaveData(set)

function doGet(e) {
  let t = {
    name: e.parameter.name,
    time: new Date().toLocaleString(),
    type: e.parameter.type // 添加type参数，以便在switch语句中使用
    }
    , data0 = t.name.split('/?qwe123?/') // 公位 , 公司料 , 客api
    , 放位 = data0[0].split('///-///')
    , data = data0[1].split('///-///') //data轉list
    , sel = data.pop()  // 刪除並取最後一個元素
    //, id = data.pop()
    

    id = '1zRbK4dHcM-DdyYHwh58qY1DDR_fdxT4yaoIDPN8SuQk'
    
    // 取表
    , a = SpreadsheetApp.openById(id).getSheets()
    

  switch (t.type) {
    case "new":

      // 修 公司資料
      if(sel === '公'){
        // loop加入資料
        for(var cont=0; cont<data.length;cont++){
          // 有data才入
          if (!!data[cont]) {
            a[0].getRange(放位[cont]).setValue(data[cont])
            }
        }
      }


      // 修 收款方式
      if(sel === '收0'){
        // loop 先入收名
        for(var cont=0; cont<data.length;cont++){
          // 有data才入
          if (!!data[cont]) {
            // https://chateverywhere.app?shareable_conversation_id=23d9b5e8-fb83-47ef-98f7-f5185e8f9099
            a[0].getRange("A3").offset(0, 放位[cont]).setValue(data[cont])
            }
        }
      }
      if(sel === '收'){
        // loop 再入收式
        for(var cont=0; cont<data.length;cont++){
          // 有data才入
          if (!!data[cont]) {
            a[0].getRange("A4").offset(0, 放位[cont]).setValue(data[cont])
            }
        }
      }



           
            
      let response = {
        success: true
      };
      return ContentService.createTextOutput(JSON.stringify(response))
        .setMimeType(ContentService.MimeType.JSON);

    default:
      return _hi();
  }
}
function _hi() {
  var url = 'https://98672794.github.io/%E9%BB%9E%E9%A4%90%E7%8E%8B/#%E9%A3%B2%E5%93%81'; // The URL you want to redirect to
  var htmlOutput = HtmlService.createHtmlOutput('<script>window.location.href = "' + url + '";</'+'script>');
  return htmlOutput;
}

//----------------------------------------------------\\



// 點低
// function 確定訂單() 


const id = "1UAn0-vAFu5WfI8K6vvdpS9EIfUX8ATYJSOxVdfQriUI"

function doGet(e) {
  let t = {
    name: e.parameter.name,
    time: new Date().toLocaleString(),
    type: e.parameter.type // 添加type参数，以便在switch语句中使用
  };
  let a = SpreadsheetApp.openById(id).getSheets()
    , data = t.name.split('!?') //data轉list
    , totoprice = data.pop()  // 刪除並取最後一個元素
    , totoprice2 = totoprice.split('$') //totoprice2只取$數

  switch (t.type) {
    case "new":

      let f = a[0].getLastRow() + 2 //頁2 加新行

      // 添加兩行空白
      a[0].appendRow([""])

      // loop加入訂單內容
      for(var cont=0; cont<data.length;cont=cont+3){
                          // 0=品名
        let bb = cont+1   //   選項     
          , cc = cont+2;  //   單價
        a[0].appendRow([data[cont], data[bb], data[cc]])
      }

      // 将时间合并到2个单元格 https://chateverywhere.app/
      let lastRow = a[0].getLastRow();
      a[0].getRange(lastRow + 1, 1).setValue(t.time);
      let totopriceRange = a[0].getRange(lastRow + 1, 1, 1, 2);
      totopriceRange.merge();
      totopriceRange.setHorizontalAlignment("right");

      // 第3格加入總金標
      //let lastRow = a[0].getLastRow();
      a[0].getRange(lastRow+1, 3).setValue('總金額 $');
      // 第4格加入總金$
      a[0].getRange(lastRow+1, 4).setValue(totoprice2[1]);
      

      // 添加兩行空白
      a[0].appendRow([" "])
      a[0].appendRow([""]);
            
      let response = {
        success: true
      };
      return ContentService.createTextOutput(JSON.stringify(response))
        .setMimeType(ContentService.MimeType.JSON);

    default:
      return _hi();
  }
}

function _hi() {
  var url = 'https://98672794.github.io/%E9%BB%9E%E9%A4%90%E7%8E%8B/#%E9%A3%B2%E5%93%81'; // The URL you want to redirect to
  var htmlOutput = HtmlService.createHtmlOutput('<script>window.location.href = "' + url + '";</'+'script>');
  return htmlOutput;
}
