
function subNav() {
    var showSubNav = document.querySelector('.sub-nav')
    showSubNav.classList.toggle('open-subnav')
}

function icon1() {
    var showSubNav2 = document.querySelector('.close-menu')
    showSubNav2.classList.toggle('rotae-icon')
}


function videoUrl(imagecss) {
    document.getElementById('image-video').src = imagecss
  }

// ---------------------------------------------------------------------------




 function intension() {
     var showIntension = document.querySelector('.intension-css-image2')
         showIntension.classList.toggle('open-intension')
 }

// ------------------------------------------------------------------------------

function showContentImage() {
    var openContentImage = document.querySelector('.content-image')
        openContentImage.classList.add('open-content-image')
}

function closeContenImage() {
    var closeContentImage = document.querySelector('.content-image')
    closeContentImage.classList.remove('open-content-image')
}

// --------------------------------------------------------------------------------


function openCode() {
    var openCode = document.querySelector('.intension-css-image1')
    openCode.classList.add('open-code')

    var closeCodeView3 = document.querySelector('.intension-css-image2')
    closeCodeView3.classList.remove('open-code2')

    var closeCodeView3 = document.querySelector('.intension-css-image3')
    closeCodeView3.classList.remove('open-code3')

    var closeCodeView3 = document.querySelector('.intension-css-image4')
    closeCodeView3.classList.remove('open-code4')
}

function closeCode() {
    var closeCode = document.querySelector('.intension-css-image1')
    closeCode.classList.remove('open-code')
}

// ----------2---------------

function openCode2() {
    var openCode2 = document.querySelector('.intension-css-image2')
        openCode2.classList.add('open-code2')

        var closeCodeView = document.querySelector('.intension-css-image1')
        closeCodeView.classList.remove('open-code')

        var closeCodeView = document.querySelector('.intension-css-image3')
         closeCodeView.classList.remove('open-code3')

         var closeCodeView = document.querySelector('.intension-css-image4')
         closeCodeView.classList.remove('open-code4')

}

function closeCode2() {
    var closeCode2 = document.querySelector('.intension-css-image2')
    closeCode2.classList.remove('open-code2')
}

// -----------3-------------------

function openCode3() {
    var openCode3 = document.querySelector('.intension-css-image3')
    openCode3.classList.add('open-code3')

    
       var closeCodeView3 = document.querySelector('.intension-css-image2')
       closeCodeView3.classList.remove('open-code2')

       var closeCodeView3 = document.querySelector('.intension-css-image1')
       closeCodeView3.classList.remove('open-code')

       var closeCodeView3 = document.querySelector('.intension-css-image4')
       closeCodeView3.classList.remove('open-code4')
}

function closeCode3() {
    var closeCode3 = document.querySelector('.intension-css-image3')
    closeCode3.classList.remove('open-code3')

}

// -----------4-----------------------

function openCode4() {
    var openCode4 = document.querySelector('.intension-css-image4')
    openCode4.classList.add('open-code4')

    var closeCodeView3 = document.querySelector('.intension-css-image3')
       closeCodeView3.classList.remove('open-code3')

       var closeCodeView3 = document.querySelector('.intension-css-image2')
       closeCodeView3.classList.remove('open-code2')

       var closeCodeView3 = document.querySelector('.intension-css-image1')
       closeCodeView3.classList.remove('open-code')
}

function closeCode4() {
    var closeCode4 = document.querySelector('.intension-css-image4')
    closeCode4.classList.remove('open-code4')
}

// ------------------------------------------------------------
function closeView() {
    var closeViewCode = document.querySelector('.intension-css-image4')
    closeViewCode.classList.remove('open-code4')
}


// -------------show-content-text--------------------
 
function showContentText() {
    var showContentText = document.querySelector('.content-text')
    showContentText.classList.add('open-content-text')
}

function closeContentText() {
    var closeContentText = document.querySelector('.content-text')
    closeContentText.classList.remove('open-content-text')
}


// ---------------------------------------------------------

function tiktok() {
    var tiktok = document.querySelector('.box-code-tiktok')
    tiktok.classList.add('open-code-tiktok')

    var closeDeveloper = document.querySelector('.box-code-developer')
        closeDeveloper.classList.remove('open-code-developer')

        var closeLoading = document.querySelector('.box-code-loading')
        closeLoading.classList.remove('open-code-loading')
}

function closeTiktok() {
    var closeTiktok = document.querySelector('.box-code-tiktok')
    closeTiktok.classList.remove('open-code-tiktok')
}

// ----------------------------------------------------------------

function developer() {
    var developer = document.querySelector('.box-code-developer')
    developer.classList.add('open-code-developer')

    var closeTiktok = document.querySelector('.box-code-tiktok')
    closeTiktok.classList.remove('open-code-tiktok')

    var closeFacbook = document.querySelector('.box-code-facebook')
    closeFacbook.classList.remove('open-code-facebook')
}

function closeDeveloper() {
    var closeDeveloper = document.querySelector('.box-code-developer')
        closeDeveloper.classList.remove('open-code-developer')
}

// -------------------------------------------------------------------\

function loading() {
    var loading = document.querySelector('.box-code-loading')
        loading.classList.add('open-code-loading')

        var closeDeveloper = document.querySelector('.box-code-developer')
        closeDeveloper.classList.remove('open-code-developer')

        var closeFacbook = document.querySelector('.box-code-facebook')
        closeFacbook.classList.remove('open-code-facebook')

        var closeTiktok = document.querySelector('.box-code-tiktok')
        closeTiktok.classList.remove('open-code-tiktok')

}

function closeLoading() {
    var closeLoading = document.querySelector('.box-code-loading')
    closeLoading.classList.remove('open-code-loading')
}

// -----------------------------------------------------------


function facebook() {
    var facebook = document.querySelector('.box-code-facebook')
    facebook.classList.add('open-code-facebook')

    var closeLoading = document.querySelector('.box-code-loading')
    closeLoading.classList.remove('open-code-loading')

    var closeDeveloper = document.querySelector('.box-code-developer')
    closeDeveloper.classList.remove('open-code-developer')

}

function closeFacebook() {
    var closeFacbook = document.querySelector('.box-code-facebook')
    closeFacbook.classList.remove('open-code-facebook')
}


// ------------------------------------------------------------

function openyoutube() {
    var openYoutube = document.querySelector('.boxvideoyoutubetext')
    openYoutube.classList.add('openyoutube')

    var dongYoutube3 = document.querySelector('.boxvideoyoutubetext3')
    dongYoutube3.classList.remove('openyoutube3')

    var dongYoutube2 = document.querySelector('.boxvideoyoutubetext2')
    dongYoutube2.classList.remove('openyoutube2')

    var dongYoutube4 = document.querySelector('.boxvideoyoutubetext4')
    dongYoutube4.classList.remove('openyoutube4')

    var dongYoutube4 = document.querySelector('.boxvideoyoutubetext5')
    dongYoutube4.classList.remove('openyoutube5')

    var dongYoutube6 = document.querySelector('.boxvideoyoutubetext6')
    dongYoutube6.classList.remove('openyoutube6')
}

function dongYoutube() {
    var dongYoutube = document.querySelector('.boxvideoyoutubetext')
    dongYoutube.classList.remove('openyoutube')
}

// -----------------------------------------------------------------

function openyoutube2() {
    var openYoutube2 = document.querySelector('.boxvideoyoutubetext2 ')
    openYoutube2.classList.add('openyoutube2')

        var dongYoutube = document.querySelector('.boxvideoyoutubetext')
        dongYoutube.classList.remove('openyoutube')

        var dongYoutube3 = document.querySelector('.boxvideoyoutubetext3')
        dongYoutube3.classList.remove('openyoutube3')

        var dongYoutube4 = document.querySelector('.boxvideoyoutubetext4')
        dongYoutube4.classList.remove('openyoutube4')

        var dongYoutube4 = document.querySelector('.boxvideoyoutubetext5')
        dongYoutube4.classList.remove('openyoutube5')

        var dongYoutube6 = document.querySelector('.boxvideoyoutubetext6')
        dongYoutube6.classList.remove('openyoutube6')
}

function dongYoutube2() {
    var dongYoutube2 = document.querySelector('.boxvideoyoutubetext2')
    dongYoutube2.classList.remove('openyoutube2')
}

// -----------------------------------------------------------------


function openyoutube3() {
    var openYoutube2 = document.querySelector('.boxvideoyoutubetext3')
    openYoutube2.classList.add('openyoutube3')
    
        var dongYoutube = document.querySelector('.boxvideoyoutubetext')
        dongYoutube.classList.remove('openyoutube')

        var dongYoutube2 = document.querySelector('.boxvideoyoutubetext2')
        dongYoutube2.classList.remove('openyoutube2')

        var dongYoutube4 = document.querySelector('.boxvideoyoutubetext4')
        dongYoutube4.classList.remove('openyoutube4')

        var dongYoutube4 = document.querySelector('.boxvideoyoutubetext5')
        dongYoutube4.classList.remove('openyoutube5')

        var dongYoutube6 = document.querySelector('.boxvideoyoutubetext6')
        dongYoutube6.classList.remove('openyoutube6')
}

function dongYoutube3() {
    var dongYoutube3 = document.querySelector('.boxvideoyoutubetext3')
    dongYoutube3.classList.remove('openyoutube3')
}

// -------------------------------------------------------------

function openyoutube4() {
    var openYoutube4 = document.querySelector('.boxvideoyoutubetext4')
    openYoutube4.classList.add('openyoutube4')
    
        var dongYoutube = document.querySelector('.boxvideoyoutubetext')
        dongYoutube.classList.remove('openyoutube')

        var dongYoutube2 = document.querySelector('.boxvideoyoutubetext2')
        dongYoutube2.classList.remove('openyoutube2')

        var dongYoutube3 = document.querySelector('.boxvideoyoutubetext3')
        dongYoutube3.classList.remove('openyoutube3')

        var dongYoutube4 = document.querySelector('.boxvideoyoutubetext5')
        dongYoutube4.classList.remove('openyoutube5')

        var dongYoutube6 = document.querySelector('.boxvideoyoutubetext6')
        dongYoutube6.classList.remove('openyoutube6')
}

function dongYoutube4() {
    var dongYoutube4 = document.querySelector('.boxvideoyoutubetext4')
    dongYoutube4.classList.remove('openyoutube4')
}

function openyoutube5() {
    var openYoutube5 = document.querySelector('.boxvideoyoutubetext5')
    openYoutube5.classList.add('openyoutube5')
    
        var dongYoutube = document.querySelector('.boxvideoyoutubetext')
        dongYoutube.classList.remove('openyoutube')

        var dongYoutube2 = document.querySelector('.boxvideoyoutubetext2')
        dongYoutube2.classList.remove('openyoutube2')

        var dongYoutube3 = document.querySelector('.boxvideoyoutubetext3')
        dongYoutube3.classList.remove('openyoutube3')

        var dongYoutube4 = document.querySelector('.boxvideoyoutubetext4')
        dongYoutube4.classList.remove('openyoutube4')

        var dongYoutube6 = document.querySelector('.boxvideoyoutubetext6')
        dongYoutube6.classList.remove('openyoutube6')
}

function dongYoutube5() {
    var dongYoutube5 = document.querySelector('.boxvideoyoutubetext5')
    dongYoutube5.classList.remove('openyoutube5')
}

function openyoutube6() {
    var openYoutube6 = document.querySelector('.boxvideoyoutubetext6')
    openYoutube6.classList.add('openyoutube6')
    
        var dongYoutube = document.querySelector('.boxvideoyoutubetext')
        dongYoutube.classList.remove('openyoutube')

        var dongYoutube2 = document.querySelector('.boxvideoyoutubetext2')
        dongYoutube2.classList.remove('openyoutube2')

        var dongYoutube3 = document.querySelector('.boxvideoyoutubetext3')
        dongYoutube3.classList.remove('openyoutube3')

        var dongYoutube4 = document.querySelector('.boxvideoyoutubetext4')
        dongYoutube4.classList.remove('openyoutube4')

        var dongYoutube5 = document.querySelector('.boxvideoyoutubetext5')
        dongYoutube5.classList.remove('openyoutube5')
}

function dongYoutube6() {
    var dongYoutube6 = document.querySelector('.boxvideoyoutubetext6')
    dongYoutube6.classList.remove('openyoutube6')
}


// -------------------------------------------------------------------

function openGioiThieu() {
    var openGioiThieu = document.querySelector('.footer')
    openGioiThieu.classList.add('opengioithieuf8')
}

function closeGioiThieu() {
    var closeGioiThieu = document.querySelector('.footer')
    closeGioiThieu.classList.remove('opengioithieuf8')
}

// -----------------------------------------------------------------

function openUngtuyen() {
    var openUngtuyen = document.querySelector('.boxungtuyen')
    openUngtuyen.classList.add('openungtuyen')

}

function closeUngtuyen() {
    var closeUngtuyen = document.querySelector('.boxungtuyen')
    closeUngtuyen.classList.remove('openungtuyen')
}

// ///////////////////////////////////////////////////


function openUngtuyen2() {
    var openUngtuyen = document.querySelector('.boxungtuyen2')
    openUngtuyen.classList.add('openungtuyen2')

}

function closeUngtuyen2() {
    var closeUngtuyen = document.querySelector('.boxungtuyen2')
    closeUngtuyen.classList.remove('openungtuyen2')
}

// ------------------------------------------------------------------

function openUngtuyeninfo() {
    var openUngtuyeninfo = document.querySelector('.boxinfoungtuyen')
    openUngtuyeninfo.classList.add('openungtuyeninfo')

}

function closeUngtuyeniìno() {
    var closeUngtuyeniìno = document.querySelector('.boxinfoungtuyen')
    closeUngtuyeniìno.classList.remove('openungtuyeninfo')
}

function openUngtuyeninfo2() {
    var openUngtuyeninfo = document.querySelector('.boxinfoungtuyen2')
    openUngtuyeninfo.classList.add('openungtuyeninfo2')

}

function closeUngtuyeniìno2() {
    var closeUngtuyeniìno = document.querySelector('.boxinfoungtuyen2')
    closeUngtuyeniìno.classList.remove('openungtuyeninfo2')
}

// -----------------------------------------------------



// --------------------------------------------------------------


function validator(options) {

    function validate(inputElement, rule) {
        var errorMesage = rule.test(inputElement.value)
        var errorElement = inputElement.parentElement.querySelector('.form-message')

        if(errorMesage) {
           errorElement.innerText = errorMesage
           inputElement.parentElement.classList.add('invalid')
        } else {
           errorElement.innerText = ''
           inputElement.parentElement.classList.remove('invalid')
        }
    }

  var formElement = document.querySelector(options.form)

 

  if (formElement) {
    formElement.onclick = function(e) {
        // e.preventDefault();
        options.rules.forEach(function (rule) {
         var inputElement = formElement.querySelector(rule.selector)
         validate(inputElement, rule)
        })
    }

      options.rules.forEach(function (rule) {
         var inputElement = formElement.querySelector(rule.selector)
            if (inputElement) {
                inputElement.onblur = function() {
                    validate(inputElement, rule)
                }

                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector('.form-message')
                    errorElement.innerText = ''
                    inputElement.parentElement.classList.remove('invalid')
                }
            }
      })
  }
}

validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'vui lòng nhập tên'
        }
    }
}

validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'vui lòng nhập email'
        }
    }
}


validator.isCv = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'vui lòng chọn cv'
        }
    }
}

// ///////////////////
function validator2(options) {

    function validate(inputElement, rule) {
        var errorMesage = rule.test(inputElement.value)
        var errorElement = inputElement.parentElement.querySelector('.form-message2')

        if(errorMesage) {
           errorElement.innerText = errorMesage
           inputElement.parentElement.classList.add('invalid')
        } else {
           errorElement.innerText = ''
           inputElement.parentElement.classList.remove('invalid')
        }
    }

  var formElement = document.querySelector(options.form2)

 

  if (formElement) {
    formElement.onclick = function(e) {
        // e.preventDefault();
        options.rules.forEach(function (rule) {
         var inputElement = formElement.querySelector(rule.selector)
         validate(inputElement, rule)
        })
    }

      options.rules.forEach(function (rule) {
         var inputElement = formElement.querySelector(rule.selector)
            if (inputElement) {
                inputElement.onblur = function() {
                    validate(inputElement, rule)
                }

                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector('.form-message2')
                    errorElement.innerText = ''
                    inputElement.parentElement.classList.remove('invalid')
                }
            }
      })
  }
}

validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'vui lòng nhập tên'
        }
    }
}

validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'vui lòng nhập email'
        }
    }
}


validator.isCv = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'vui lòng chọn cv'
        }
    }
}



// ----------------------------------------------------------------

function openTimHieuThem() {
    var openTimHieuThem = document.querySelector('.timhieuthem')
    openTimHieuThem.classList.add('openTimHieuThem')
}


function dongTimHieuThem() {
    var dongTimHieuThem = document.querySelector('.timhieuthem')
    dongTimHieuThem.classList.remove('openTimHieuThem')
}


// --------------------------------------------------------------------------

function lightTable() {
  var lightTable = document.querySelector('.boxcontainertable') 
  var rotaeToggleTable = document.querySelector('.toggle-table')
  rotaeToggleTable.classList.toggle('rotaeTable')
  lightTable.classList.toggle('backgroundtable')
}



function colorBackgroundTable() {
    var colorBackgroundTable = document.querySelector('.boxcontenttable')
    var widthThanhMauSac = document.querySelector('.thanhmausac2')
    var coloriconthanhmausac = document.querySelector('.iconthanhmausac')

    coloriconthanhmausac.classList.toggle('coloriconthanhmausac')
    colorBackgroundTable.classList.toggle('doimaubackgroundtable')
    widthThanhMauSac.classList.toggle('widththanhmausac')

    var closecolortable = document.querySelector('.thanhmausac3')
    closecolortable.classList.remove('widththanhmausac2')

    var closecolortable = document.querySelector('.thanhmausac4')
    closecolortable.classList.remove('widththanhmausac3')

    var closecolortable = document.querySelector('.iconthanhmausac3')
    closecolortable.classList.remove('coloriconthanhmausac3')

    var closecolortable = document.querySelector('.iconthanhmausac4')
    closecolortable.classList.remove('coloriconthanhmausac4')

    var closecolortable = document.querySelector('.boxcontenttable')
    closecolortable.classList.remove('doimaubackgroundtable3')

    var closecolortable = document.querySelector('.boxcontenttable')
    closecolortable.classList.remove('doimaubackgroundtable2')
}


function colorBackgroundTable2() {
    var colorBackgroundTable = document.querySelector('.boxcontenttable')
    var widthThanhMauSac = document.querySelector('.thanhmausac3')
    var coloriconthanhmausac = document.querySelector('.iconthanhmausac3')
    coloriconthanhmausac.classList.toggle('coloriconthanhmausac3')
    colorBackgroundTable.classList.toggle('doimaubackgroundtable2')
    widthThanhMauSac.classList.toggle('widththanhmausac2')

    var closecolortable = document.querySelector('.thanhmausac2')
    closecolortable.classList.remove('widththanhmausac')

    var closecolortable = document.querySelector('.thanhmausac4')
    closecolortable.classList.remove('widththanhmausac3')

    var closecolortable = document.querySelector('.iconthanhmausac')
    closecolortable.classList.remove('coloriconthanhmausac')

    var closecolortable = document.querySelector('.iconthanhmausac4')
    closecolortable.classList.remove('coloriconthanhmausac4')

    var closecolortable = document.querySelector('.boxcontenttable')
    closecolortable.classList.remove('doimaubackgroundtable')

    var closecolortable = document.querySelector('.boxcontenttable')
    closecolortable.classList.remove('doimaubackgroundtable3')
}

function colorBackgroundTable3() {
    var colorBackgroundTable = document.querySelector('.boxcontenttable')
    var widthThanhMauSac = document.querySelector('.thanhmausac4')
    var coloriconthanhmausac = document.querySelector('.iconthanhmausac4')


    coloriconthanhmausac.classList.toggle('coloriconthanhmausac4')
    colorBackgroundTable.classList.toggle('doimaubackgroundtable3')
    widthThanhMauSac.classList.toggle('widththanhmausac3')

    var closecolortable = document.querySelector('.thanhmausac2')
    closecolortable.classList.remove('widththanhmausac')

    var closecolortable = document.querySelector('.thanhmausac3')
    closecolortable.classList.remove('widththanhmausac2')


    var closecolortable = document.querySelector('.iconthanhmausac3')
    closecolortable.classList.remove('coloriconthanhmausac3')

    var closecolortable = document.querySelector('.iconthanhmausac')
    closecolortable.classList.remove('coloriconthanhmausac')

    var closecolortable = document.querySelector('.boxcontenttable')
    closecolortable.classList.remove('doimaubackgroundtable')

    var closecolortable = document.querySelector('.boxcontenttable')
    closecolortable.classList.remove('doimaubackgroundtable2')
}


// --------------------------------------------------------------------------------

function opencontenttable() {
    var opencontenttable = document.querySelector('.boxcontenttable')
    opencontenttable.classList.add('addcontenttable')
}

function closecontenttable() {
    var closecontenttable = document.querySelector('.boxcontenttable')
    closecontenttable.classList.remove('addcontenttable')
}

// ---------------------------------------------------------------------------

function opencontentform() {
    var opencontentform = document.querySelector('.boxcontentform')
    opencontentform.classList.add('addcontentform')
}

function closecontentform() {
    var closecontentform = document.querySelector('.boxcontentform')
    closecontentform.classList.remove('addcontentform')
}

function formfour() {
    var formfour = document.querySelector('.foldformfour')
    formfour.classList.toggle('activeformfour')
}

// --------------------------------------------------------------

function openboxhtmlbutton1() {
    var openboxhtmlbutton1 = document.querySelector('.boxcontenthtml')
    openboxhtmlbutton1.classList.toggle('openboxhtmlbutton1')
    var rotaeiconboxhtmlbutton = document.querySelector('.iconboxhtmlbutton')
    rotaeiconboxhtmlbutton.classList.toggle('rotaeiconboxhtmlbutton')
}

function openboxcssbutton1() {
    var openboxcssbutton1 = document.querySelector('.boxcontentcssbutton1')
    openboxcssbutton1.classList.toggle('openboxcssbutton1')
    var rotaeiconboxcssbutton1 = document.querySelector('.iconboxcssbutton1')
    rotaeiconboxcssbutton1.classList.toggle('rotaeiconboxcssbutton1')
}