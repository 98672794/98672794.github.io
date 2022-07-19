

// HTML5 拖放、拖放到div追加、拖放到div删除-爱代码爱编程 
// https://icode.best/i/89267238453775
// 获取页面元素
var recycle = document.getElementById("recycle");
var img = document.getElementsByClassName("SmsBox");

// 定义添加下标函数
function addIndex() {
    // 给图片添加下标
    for (var i = 0; i < img.length; i++) {
        img[i].index = i;
    }
}

// 调用添加下标函数
addIndex();

// for循环为图片添加开始拖动事件
for (var i = 0; i < img.length; i++) {
    // 开始拖动事件
    img[i].ondragstart = function (event) {
        //console.log("开始拖动");

        $(recycle).css("display","flex")

        event.dataTransfer.setData("index", event.target.index);//设置数据，获取图片的下标
        
    }

    img[i].ondragend = function () {
        //console.log("拖动结束");
        $(recycle).css("display","none")
    }
    


}









recycle.ondragover = function (event) {
    // 阻止默认事件
    event.preventDefault();
}

// 回收站，拖拽删除图片
recycle.ondrop = function (event) {
     //console.log("在目标对象内释放");

    var index = event.dataTransfer.getData("index"); //获取数据,根据设置的数据名获取数据
    
    // 删除图片
    img[index].remove();

    // 重新添加下标，因为删除后img个数减少，不能根据原下标找到对应的图片了
    addIndex();
}


