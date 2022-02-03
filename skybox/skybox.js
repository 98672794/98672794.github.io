// skybox.js
// https://codepen.io/ikbbceme-the-sasster/pen/dyZXMNa


//內方原位
var rotX = 0; //40
var rotY = 0; //-30
var currX = 0;
var currY = 0;
tracking = false;

$(document).ready(function() {
  
  diff = $('.container').width() - $('.container').height();
  $('.container .smallCube').css({marginTop: '-'+diff/2+'px'})

  setBindings();
  
  setRotation(0,0);
});

function unsetBindings() {
  $('body, li').off();
}

function setBindings() {
  $('body').on('mousedown touchstart', function(e) {
    if (e.type == "touchstart") {
     interactionStart(e.originalEvent.touches[0].clientX, e.originalEvent.touches[0].clientY);
    } else {
      interactionStart(e.clientX, e.clientY);
    }
    e.preventDefault();
  });

  $('body').on('mousemove touchmove', function(e) {
    if (e.type == "touchmove") {
      interactionMove(e.originalEvent.touches[0].clientX, e.originalEvent.touches[0].clientY);
    } else {
      interactionMove(e.clientX, e.clientY);
    }
    e.preventDefault();
  });

  $('body').on('mouseup touchend', function(e) {
    interactionEnd();
    e.preventDefault();
  });
  
  $('.eve').on('click', function() {
      $('.container .smallCube').addClass('anim');
      rotX = 0;
      rotY = 0;
      setRotation(0,0);
    
  })
  $('.community').on('click', function() {
      $('.container .smallCube').addClass('anim');
      rotX = -90;
      rotY = 0;
      setRotation(0,0);
    
  })
  $('.ccpgames').on('click', function() {
      $('.container .smallCube').addClass('anim');
      rotX = -180;
      rotY = 0;
      setRotation(0,0);
    
  })
  $('.updates').on('click', function() {
      $('.container .smallCube').addClass('anim');
      rotX = 90;
      rotY = 0;
      setRotation(0,0);
    
  })
  $('.valkyrie').on('click', function() {
      $('.container .smallCube').addClass('anim');
      rotX = 0;
      rotY = -90;
      setRotation(0,0);    
  })
  $('.gunjack').on('click', function() {
      $('.container .smallCube').addClass('anim');
      rotX = 0;
      rotY = 90;
      setRotation(0,0);
  })
}


//?????????????
function interactionStart(x, y) {
  currX = x;
  currY = y;
  tracking = true;
}

function interactionMove(x, y) {
  if (tracking == false) {
    return;
  }
  var deltaX = x - currX;
  var deltaY = y - currY;
  setRotation(deltaX, deltaY);
  currX = x;
  currY = y;
}

function setRotation(x, y) {
  if (tracking == false) {
    unsetBindings();
    setTimeout(function() {
    setBindings();
      $('.container .inner').removeClass('anim');
    }, 1000);
  }
  rotX+=x;
  rotY+=y;
  if (rotX >= 180) {
    rotX-=360;
  } else if (rotX <= (-179)) {
    rotX+=360;
  }
  
  if (rotY >= 90) {
    rotY = 90;
  } else if (rotY <= (-90)) {
    rotY = -90;
  }
  


  // 內方轉芯
  var radX = 0;
  var radZ = 0; 
  var radY = 0;
  
  $('.container .inner').css({transform:'rotateX('+rotY+'deg) rotateY('+rotX+'deg) translate3d('+radX+'px,'+radY+'px,'+radZ+'px)'});
  //$('.container .inner') 外內轉
  //$('.container .smallCube') 只內方

}

function interactionEnd() {
  tracking = false;
}







































