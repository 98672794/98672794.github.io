
//////////////////////// aki 202208020223 ////////////////////////////
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


  

