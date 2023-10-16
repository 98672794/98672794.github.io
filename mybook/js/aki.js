

// 202310150247K **************
// aki.js ~book.js ***********
// 先用akiJs引入故事內容js ****
// 再在故內js行回akiJs的fun ***
// 就可用到故js的內容 *********
// 日後all故只轉故js **********
// 本想引入txt/json 但引了不賦到值




















// 取現網址 用?分割 取尾
let 故事號 = location.href.split('?')[1]


// 用網址取故事號 引入故事號檔內的js 每故事一個.js
document.write("<script type='text/javascript' src='"+故事號+"/book.js'></script>")
// js文件中引用其他js文件 https://blog.csdn.net/Inuyasha1121/article/details/51071803



























// 故js來run
function _指定故事() {

    // jq change tit https://stackoverflow.com/a/7173641
    $(document).prop('title', 故名)
    $('#asd').html(故名)
    
    // 用故文计加故事box
    for(var count=0 ; count < 故文.length ; count++){

        // for加box
        // https://www.mmxiaowu.com/article/58481d53d4352863efb55443
        $('#故事box').append(_整故事box(count))

    }

}
























function _整故事box(數) {

    let boxL = '\
    <div class="row mb-40">\
        <div class="col-md-6 text-center mb-5 mb-lg-0">\
            <img class="img-fluid" src="'+故事號+'/'+數+'.jpg" alt="">\
        </div>\
        <div class="col-md-6 align-self-center text-center text-md-left">\
            <div class="content">\
                <h4 class="subheading">'+故文[數]+'</h4>\
            </div>\
        </div>\
    </div>\
    '

    let boxR = '\
    <div class="row mb-40">\
        <div class="col-md-6 order-md-1 order-2 align-self-center text-center text-md-left">\
            <div class="content">\
                <h4 class="subheading">'+故文[數]+'</h4>\
            </div>\
        </div>\
        <div class="col-md-6 order-md-2 order-1 text-center mb-5 mb-lg-0">\
            <img class="img-fluid" src="'+故事號+'/'+數+'.jpg" alt="">\
        </div>\
    </div>\
    '

    // 判定條件餘數爲0時爲偶數 https://www.twblogs.net/a/5d73a305bd9eee5327ff813f
    if((數%2)===0){ 
        trueBox = boxR
    }else{ 
        trueBox = boxL
    }

    return trueBox


}