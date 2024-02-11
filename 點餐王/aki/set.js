











var dot = "'"
function _data入網_整div(sel,run,box_name,data) {
  if (MOK) console.log("_data入網_整div('類名menu','append','#all類',[類名])")

  // 網頁data
  let LoginPage = '\
  <div class="row justify-content-center"><div class="col-xl-10 col-lg-12 col-md-9"><div class="row"><div class="col-lg-12"><div class="p-5">\
    <div class="text-center">\
        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>\
    </div>\
    <form class="user">\
        <div class="form-group">\
            <input type="ID" class="form-control form-control-user"\
                id="UserID" placeholder="Enter ID">\
        </div>\
        <div class="form-group">\
            <input type="password" class="form-control form-control-user"\
                id="UserPW" placeholder="Password">\
        </div>\
        <div class="form-group">\
            <div class="custom-control custom-checkbox small">\
                <input type="checkbox" class="custom-control-input" id="customCheck">\
                <label class="custom-control-label" for="customCheck">\
                    Remember Me\
                </label>\
            </div>\
        </div>\
        <a onclick="Login()" class="btn btn-primary btn-user btn-block">\
            Login\
        </a>\
        <hr>\
        <div class="text-center">\
        <a href="Create會員.html" class=" btn-block">Create an Account!</a>\
        </div>\
        <hr>\
        <div class="text-center">\
            <a class="small " href="https://wa.me/">Forgot Password?</a>\
        </div>\
    </form>\
  </div></div></div></div></div>\
  '
  $(box_name)[run]([eval(sel)])

}








_data入網_整div('LoginPage','append','#set_page','1') 