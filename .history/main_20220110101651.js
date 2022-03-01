function subNav() {
  var showSubNav = document.querySelector(".sub-nav");
  showSubNav.classList.toggle("open-subnav");
}

function closesubNav() {
  var closesubnav = document.querySelector(".sub-nav");
  closesubnav.classList.remove("open-subnav");
}

function icon1() {
  var showSubNav2 = document.querySelector(".close-menu");
  showSubNav2.classList.toggle("rotae-icon");
}

function videoUrl(imagecss) {
  document.getElementById("image-video").src = imagecss;
}

// ---------------------------------------------------------------------------

function intension() {
  var showIntension = document.querySelector(".intension-css-image2");
  showIntension.classList.toggle("open-intension");
}

// ------------------------------------------------------------------------------

function showContentImage() {
  var openContentImage = document.querySelector(".content-image");
  openContentImage.classList.add("open-content-image");

  var closetemplate = document.querySelector(".boxtemplate");
  closetemplate.classList.remove("openboxtemplate");

  var closesubnav = document.querySelector(".sub-nav");
  closesubnav.classList.remove("open-subnav");

  var closetiplaptrinh = document.querySelector(".tiplaptrinh");
  closetiplaptrinh.classList.remove("opentiplaptrinh");

  var closetransition = document.querySelector(".transitionto");
  closetransition.classList.remove("opentransitionto");

  var closeGioiThieu = document.querySelector(".footer");
  closeGioiThieu.classList.remove("opengioithieuf8");

  var closeanimationto = document.querySelector(".animationto");
  closeanimationto.classList.remove("openanimation");

  var closeContentText = document.querySelector(".content-text");
  closeContentText.classList.remove("open-content-text");

  var closecontenttable = document.querySelector(".boxcontenttable");
  closecontenttable.classList.remove("addcontenttable");

  var closecontentform = document.querySelector(".boxcontentform");
  closecontentform.classList.remove("addcontentform");

  var closecontentcard = document.querySelector(".contentcard");
  closecontentcard.classList.remove("opencontentcard");

  var clossecontentbutton = document.querySelector(".contentbutton");
  clossecontentbutton.classList.remove("opencontentbutton2");
}

function closeContenImage() {
  var closeContentImage = document.querySelector(".content-image");
  closeContentImage.classList.remove("open-content-image");
}

// --------------------------------------------------------------------------------

function openCode() {
  var openCode = document.querySelector(".intension-css-image1");
  openCode.classList.add("open-code");

  // var closeCodeView3 = document.querySelector(".intension-css-image2");
  // closeCodeView3.classList.remove("open-code2");

  // var closeCodeView3 = document.querySelector(".intension-css-image3");
  // closeCodeView3.classList.remove("open-code3");

  // var closeCodeView3 = document.querySelector(".intension-css-image4");
  // closeCodeView3.classList.remove("open-code4");
}

function closeCode() {
  var closeCode = document.querySelector(".intension-css-image1");
  closeCode.classList.remove("open-code");
}

// ----------2---------------

function openCode2() {
  var openCode2 = document.querySelector(".intension-css-image2");
  openCode2.classList.add("open-code2");

  var closeCodeView = document.querySelector(".intension-css-image1");
  closeCodeView.classList.remove("open-code");

  var closeCodeView = document.querySelector(".intension-css-image3");
  closeCodeView.classList.remove("open-code3");

  var closeCodeView = document.querySelector(".intension-css-image4");
  closeCodeView.classList.remove("open-code4");
}

function closeCode2() {
  var closeCode2 = document.querySelector(".intension-css-image2");
  closeCode2.classList.remove("open-code2");
}

// -----------3-------------------

function openCode3() {
  var openCode3 = document.querySelector(".intension-css-image3");
  openCode3.classList.add("open-code3");

  var closeCodeView3 = document.querySelector(".intension-css-image2");
  closeCodeView3.classList.remove("open-code2");

  var closeCodeView3 = document.querySelector(".intension-css-image1");
  closeCodeView3.classList.remove("open-code");

  var closeCodeView3 = document.querySelector(".intension-css-image4");
  closeCodeView3.classList.remove("open-code4");
}

function closeCode3() {
  var closeCode3 = document.querySelector(".intension-css-image3");
  closeCode3.classList.remove("open-code3");
}

// -----------4-----------------------

function openCode4() {
  var openCode4 = document.querySelector(".intension-css-image4");
  openCode4.classList.add("open-code4");

  var closeCodeView3 = document.querySelector(".intension-css-image3");
  closeCodeView3.classList.remove("open-code3");

  var closeCodeView3 = document.querySelector(".intension-css-image2");
  closeCodeView3.classList.remove("open-code2");

  var closeCodeView3 = document.querySelector(".intension-css-image1");
  closeCodeView3.classList.remove("open-code");
}

function closeCode4() {
  var closeCode4 = document.querySelector(".intension-css-image4");
  closeCode4.classList.remove("open-code4");
}

// ------------------------------------------------------------
function closeView() {
  var closeViewCode = document.querySelector(".intension-css-image4");
  closeViewCode.classList.remove("open-code4");
}

// -------------show-content-text--------------------

function showContentText() {
  var showContentText = document.querySelector(".content-text");
  showContentText.classList.add("open-content-text");

  var closetemplate = document.querySelector(".boxtemplate");
  closetemplate.classList.remove("openboxtemplate");

  var closeanimationto = document.querySelector(".animationto");
  closeanimationto.classList.remove("openanimation");

  var closetransition = document.querySelector(".transitionto");
  closetransition.classList.remove("opentransitionto");

  var closetiplaptrinh = document.querySelector(".tiplaptrinh");
  closetiplaptrinh.classList.remove("opentiplaptrinh");

  var closesubnav = document.querySelector(".sub-nav");
  closesubnav.classList.remove("open-subnav");

  var closeGioiThieu = document.querySelector(".footer");
  closeGioiThieu.classList.remove("opengioithieuf8");

  var closeContentImage = document.querySelector(".content-image");
  closeContentImage.classList.remove("open-content-image");

  var closecontenttable = document.querySelector(".boxcontenttable");
  closecontenttable.classList.remove("addcontenttable");

  var closecontentform = document.querySelector(".boxcontentform");
  closecontentform.classList.remove("addcontentform");

  var closecontentcard = document.querySelector(".contentcard");
  closecontentcard.classList.remove("opencontentcard");

  var clossecontentbutton = document.querySelector(".contentbutton");
  clossecontentbutton.classList.remove("opencontentbutton2");
}

function closeContentText() {
  var closeContentText = document.querySelector(".content-text");
  closeContentText.classList.remove("open-content-text");
}

// ---------------------------------------------------------

function tiktok() {
  var tiktok = document.querySelector(".box-code-tiktok");
  tiktok.classList.add("open-code-tiktok");

  var closeDeveloper = document.querySelector(".box-code-developer");
  closeDeveloper.classList.remove("open-code-developer");

  var closeLoading = document.querySelector(".box-code-loading");
  closeLoading.classList.remove("open-code-loading");
}

function closeTiktok() {
  var closeTiktok = document.querySelector(".box-code-tiktok");
  closeTiktok.classList.remove("open-code-tiktok");
}

// ----------------------------------------------------------------

function developer() {
  var developer = document.querySelector(".box-code-developer");
  developer.classList.add("open-code-developer");

  var closeTiktok = document.querySelector(".box-code-tiktok");
  closeTiktok.classList.remove("open-code-tiktok");

  var closeFacbook = document.querySelector(".box-code-facebook");
  closeFacbook.classList.remove("open-code-facebook");
}

function closeDeveloper() {
  var closeDeveloper = document.querySelector(".box-code-developer");
  closeDeveloper.classList.remove("open-code-developer");
}

// -------------------------------------------------------------------\

function loading() {
  var loading = document.querySelector(".box-code-loading");
  loading.classList.add("open-code-loading");

  var closeDeveloper = document.querySelector(".box-code-developer");
  closeDeveloper.classList.remove("open-code-developer");

  var closeFacbook = document.querySelector(".box-code-facebook");
  closeFacbook.classList.remove("open-code-facebook");

  var closeTiktok = document.querySelector(".box-code-tiktok");
  closeTiktok.classList.remove("open-code-tiktok");
}

function closeLoading() {
  var closeLoading = document.querySelector(".box-code-loading");
  closeLoading.classList.remove("open-code-loading");
}

// -----------------------------------------------------------

function facebook() {
  var facebook = document.querySelector(".box-code-facebook");
  facebook.classList.add("open-code-facebook");

  var closeLoading = document.querySelector(".box-code-loading");
  closeLoading.classList.remove("open-code-loading");

  var closeDeveloper = document.querySelector(".box-code-developer");
  closeDeveloper.classList.remove("open-code-developer");
}

function closeFacebook() {
  var closeFacbook = document.querySelector(".box-code-facebook");
  closeFacbook.classList.remove("open-code-facebook");
}

// ------------------------------------------------------------

function openyoutube() {
  var openYoutube = document.querySelector(".boxvideoyoutubetext");
  openYoutube.classList.add("openyoutube");

  var dongYoutube3 = document.querySelector(".boxvideoyoutubetext3");
  dongYoutube3.classList.remove("openyoutube3");

  var dongYoutube2 = document.querySelector(".boxvideoyoutubetext2");
  dongYoutube2.classList.remove("openyoutube2");

  var dongYoutube4 = document.querySelector(".boxvideoyoutubetext4");
  dongYoutube4.classList.remove("openyoutube4");

  var dongYoutube4 = document.querySelector(".boxvideoyoutubetext5");
  dongYoutube4.classList.remove("openyoutube5");

  var dongYoutube6 = document.querySelector(".boxvideoyoutubetext6");
  dongYoutube6.classList.remove("openyoutube6");

  var dongYoutube7 = document.querySelector(".boxvideoyoutubetext7");
  dongYoutube7.classList.remove("openyoutube7");

  var dongYoutube8 = document.querySelector(".boxvideoyoutubetext8");
  dongYoutube8.classList.remove("openyoutube8");
}

function dongYoutube() {
  var dongYoutube = document.querySelector(".boxvideoyoutubetext");
  dongYoutube.classList.remove("openyoutube");
}

// -----------------------------------------------------------------

function openyoutube2() {
  var openYoutube2 = document.querySelector(".boxvideoyoutubetext2 ");
  openYoutube2.classList.add("openyoutube2");

  var dongYoutube = document.querySelector(".boxvideoyoutubetext");
  dongYoutube.classList.remove("openyoutube");

  var dongYoutube3 = document.querySelector(".boxvideoyoutubetext3");
  dongYoutube3.classList.remove("openyoutube3");

  var dongYoutube4 = document.querySelector(".boxvideoyoutubetext4");
  dongYoutube4.classList.remove("openyoutube4");

  var dongYoutube4 = document.querySelector(".boxvideoyoutubetext5");
  dongYoutube4.classList.remove("openyoutube5");

  var dongYoutube6 = document.querySelector(".boxvideoyoutubetext6");
  dongYoutube6.classList.remove("openyoutube6");

  var dongYoutube7 = document.querySelector(".boxvideoyoutubetext7");
  dongYoutube7.classList.remove("openyoutube7");

  var dongYoutube8 = document.querySelector(".boxvideoyoutubetext8");
  dongYoutube8.classList.remove("openyoutube8");
}

function dongYoutube2() {
  var dongYoutube2 = document.querySelector(".boxvideoyoutubetext2");
  dongYoutube2.classList.remove("openyoutube2");
}

// -----------------------------------------------------------------

function openyoutube3() {
  var openYoutube2 = document.querySelector(".boxvideoyoutubetext3");
  openYoutube2.classList.add("openyoutube3");

  var dongYoutube = document.querySelector(".boxvideoyoutubetext");
  dongYoutube.classList.remove("openyoutube");

  var dongYoutube2 = document.querySelector(".boxvideoyoutubetext2");
  dongYoutube2.classList.remove("openyoutube2");

  var dongYoutube4 = document.querySelector(".boxvideoyoutubetext4");
  dongYoutube4.classList.remove("openyoutube4");

  var dongYoutube4 = document.querySelector(".boxvideoyoutubetext5");
  dongYoutube4.classList.remove("openyoutube5");

  var dongYoutube6 = document.querySelector(".boxvideoyoutubetext6");
  dongYoutube6.classList.remove("openyoutube6");

  var dongYoutube7 = document.querySelector(".boxvideoyoutubetext7");
  dongYoutube7.classList.remove("openyoutube7");

  var dongYoutube8 = document.querySelector(".boxvideoyoutubetext8");
  dongYoutube8.classList.remove("openyoutube8");
}

function dongYoutube3() {
  var dongYoutube3 = document.querySelector(".boxvideoyoutubetext3");
  dongYoutube3.classList.remove("openyoutube3");
}

// -------------------------------------------------------------

function openyoutube4() {
  var openYoutube4 = document.querySelector(".boxvideoyoutubetext4");
  openYoutube4.classList.add("openyoutube4");

  var dongYoutube = document.querySelector(".boxvideoyoutubetext");
  dongYoutube.classList.remove("openyoutube");

  var dongYoutube2 = document.querySelector(".boxvideoyoutubetext2");
  dongYoutube2.classList.remove("openyoutube2");

  var dongYoutube3 = document.querySelector(".boxvideoyoutubetext3");
  dongYoutube3.classList.remove("openyoutube3");

  var dongYoutube4 = document.querySelector(".boxvideoyoutubetext5");
  dongYoutube4.classList.remove("openyoutube5");

  var dongYoutube6 = document.querySelector(".boxvideoyoutubetext6");
  dongYoutube6.classList.remove("openyoutube6");

  var dongYoutube7 = document.querySelector(".boxvideoyoutubetext7");
  dongYoutube7.classList.remove("openyoutube7");

  var dongYoutube8 = document.querySelector(".boxvideoyoutubetext8");
  dongYoutube8.classList.remove("openyoutube8");
}

function dongYoutube4() {
  var dongYoutube4 = document.querySelector(".boxvideoyoutubetext4");
  dongYoutube4.classList.remove("openyoutube4");
}

function openyoutube5() {
  var openYoutube5 = document.querySelector(".boxvideoyoutubetext5");
  openYoutube5.classList.add("openyoutube5");

  var dongYoutube = document.querySelector(".boxvideoyoutubetext");
  dongYoutube.classList.remove("openyoutube");

  var dongYoutube2 = document.querySelector(".boxvideoyoutubetext2");
  dongYoutube2.classList.remove("openyoutube2");

  var dongYoutube3 = document.querySelector(".boxvideoyoutubetext3");
  dongYoutube3.classList.remove("openyoutube3");

  var dongYoutube4 = document.querySelector(".boxvideoyoutubetext4");
  dongYoutube4.classList.remove("openyoutube4");

  var dongYoutube6 = document.querySelector(".boxvideoyoutubetext6");
  dongYoutube6.classList.remove("openyoutube6");

  var dongYoutube7 = document.querySelector(".boxvideoyoutubetext7");
  dongYoutube7.classList.remove("openyoutube7");

  var dongYoutube8 = document.querySelector(".boxvideoyoutubetext8");
  dongYoutube8.classList.remove("openyoutube8");
}

function dongYoutube5() {
  var dongYoutube5 = document.querySelector(".boxvideoyoutubetext5");
  dongYoutube5.classList.remove("openyoutube5");
}

function openyoutube6() {
  var openYoutube6 = document.querySelector(".boxvideoyoutubetext6");
  openYoutube6.classList.add("openyoutube6");

  var dongYoutube = document.querySelector(".boxvideoyoutubetext");
  dongYoutube.classList.remove("openyoutube");

  var dongYoutube2 = document.querySelector(".boxvideoyoutubetext2");
  dongYoutube2.classList.remove("openyoutube2");

  var dongYoutube3 = document.querySelector(".boxvideoyoutubetext3");
  dongYoutube3.classList.remove("openyoutube3");

  var dongYoutube4 = document.querySelector(".boxvideoyoutubetext4");
  dongYoutube4.classList.remove("openyoutube4");

  var dongYoutube5 = document.querySelector(".boxvideoyoutubetext5");
  dongYoutube5.classList.remove("openyoutube5");

  var dongYoutube7 = document.querySelector(".boxvideoyoutubetext7");
  dongYoutube7.classList.remove("openyoutube7");

  var dongYoutube8 = document.querySelector(".boxvideoyoutubetext8");
  dongYoutube8.classList.remove("openyoutube8");
}

function dongYoutube6() {
  var dongYoutube6 = document.querySelector(".boxvideoyoutubetext6");
  dongYoutube6.classList.remove("openyoutube6");
}

function openyoutube7() {
  var openYoutube7 = document.querySelector(".boxvideoyoutubetext7");
  openYoutube7.classList.add("openyoutube7");

  var dongYoutube = document.querySelector(".boxvideoyoutubetext");
  dongYoutube.classList.remove("openyoutube");

  var dongYoutube2 = document.querySelector(".boxvideoyoutubetext2");
  dongYoutube2.classList.remove("openyoutube2");

  var dongYoutube3 = document.querySelector(".boxvideoyoutubetext3");
  dongYoutube3.classList.remove("openyoutube3");

  var dongYoutube4 = document.querySelector(".boxvideoyoutubetext4");
  dongYoutube4.classList.remove("openyoutube4");

  var dongYoutube5 = document.querySelector(".boxvideoyoutubetext5");
  dongYoutube5.classList.remove("openyoutube5");

  var dongYoutube6 = document.querySelector(".boxvideoyoutubetext6");
  dongYoutube6.classList.remove("openyoutube6");

  var dongYoutube8 = document.querySelector(".boxvideoyoutubetext8");
  dongYoutube8.classList.remove("openyoutube8");
}

function dongYoutube7() {
  var dongYoutube7 = document.querySelector(".boxvideoyoutubetext7");
  dongYoutube7.classList.remove("openyoutube7");
}

function openyoutube8() {
  var openYoutube8 = document.querySelector(".boxvideoyoutubetext7");
  openYoutube8.classList.add("openyoutube7");

  var dongYoutube = document.querySelector(".boxvideoyoutubetext");
  dongYoutube.classList.remove("openyoutube");

  var dongYoutube2 = document.querySelector(".boxvideoyoutubetext2");
  dongYoutube2.classList.remove("openyoutube2");

  var dongYoutube3 = document.querySelector(".boxvideoyoutubetext3");
  dongYoutube3.classList.remove("openyoutube3");

  var dongYoutube4 = document.querySelector(".boxvideoyoutubetext4");
  dongYoutube4.classList.remove("openyoutube4");

  var dongYoutube5 = document.querySelector(".boxvideoyoutubetext5");
  dongYoutube5.classList.remove("openyoutube5");

  var dongYoutube6 = document.querySelector(".boxvideoyoutubetext6");
  dongYoutube6.classList.remove("openyoutube6");

  var dongYoutube7 = document.querySelector(".boxvideoyoutubetext7");
  dongYoutube7.classList.remove("openyoutube7");
}

function dongYoutube8() {
  var dongYoutube8 = document.querySelector(".boxvideoyoutubetext8");
  dongYoutube8.classList.remove("openyoutube8");
}

// -------------------------------------------------------------------

function openGioiThieu() {
  var openGioiThieu = document.querySelector(".footer");
  openGioiThieu.classList.add("opengioithieuf8");

  var closesign = document.querySelector(".modal-login");
  closesign.classList.remove("open-sign");

  var closesubnav = document.querySelector(".sub-nav");
  closesubnav.classList.remove("open-subnav");

  var closetemplate = document.querySelector(".boxtemplate");
  closetemplate.classList.remove("openboxtemplate");

  var closecontentcard = document.querySelector(".contentcard");
  closecontentcard.classList.remove("opencontentcard");

  var clossecontentbutton = document.querySelector(".contentbutton");
  clossecontentbutton.classList.remove("opencontentbutton2");

  var closecontentform = document.querySelector(".boxcontentform");
  closecontentform.classList.remove("addcontentform");

  var closecontenttable = document.querySelector(".boxcontenttable");
  closecontenttable.classList.remove("addcontenttable");

  var closeContentText = document.querySelector(".content-text");
  closeContentText.classList.remove("open-content-text");

  var closeContentImage = document.querySelector(".content-image");
  closeContentImage.classList.remove("open-content-image");

  var closeanimationto = document.querySelector(".animationto");
  closeanimationto.classList.remove("openanimation");
}
function closeGioiThieu() {
  var closeGioiThieu = document.querySelector(".footer");
  closeGioiThieu.classList.remove("opengioithieuf8");
}

// -----------------------------------------------------------------

function openUngtuyen() {
  var openUngtuyen = document.querySelector(".boxungtuyen");
  openUngtuyen.classList.add("openungtuyen");
}

function closeUngtuyen() {
  var closeUngtuyen = document.querySelector(".boxungtuyen");
  closeUngtuyen.classList.remove("openungtuyen");
}

// ///////////////////////////////////////////////////

function openUngtuyen2() {
  var openUngtuyen = document.querySelector(".boxungtuyen2");
  openUngtuyen.classList.add("openungtuyen2");
}

function closeUngtuyen2() {
  var closeUngtuyen = document.querySelector(".boxungtuyen2");
  closeUngtuyen.classList.remove("openungtuyen2");
}

// ------------------------------------------------------------------

function openUngtuyeninfo() {
  var openUngtuyeninfo = document.querySelector(".boxinfoungtuyen");
  openUngtuyeninfo.classList.add("openungtuyeninfo");
}

function closeUngtuyeniìno() {
  var closeUngtuyeniìno = document.querySelector(".boxinfoungtuyen");
  closeUngtuyeniìno.classList.remove("openungtuyeninfo");
}

function openUngtuyeninfo2() {
  var openUngtuyeninfo = document.querySelector(".boxinfoungtuyen2");
  openUngtuyeninfo.classList.add("openungtuyeninfo2");
}

function closeUngtuyeniìno2() {
  var closeUngtuyeniìno = document.querySelector(".boxinfoungtuyen2");
  closeUngtuyeniìno.classList.remove("openungtuyeninfo2");
}

// -----------------------------------------------------

// --------------------------------------------------------------

function validator(options) {
  function validate(inputElement, rule) {
    var errorMesage = rule.test(inputElement.value);
    var errorElement =
      inputElement.parentElement.querySelector(".form-message");

    if (errorMesage) {
      errorElement.innerText = errorMesage;
      inputElement.parentElement.classList.add("invalid");
    } else {
      errorElement.innerText = "";
      inputElement.parentElement.classList.remove("invalid");
    }
  }

  var formElement = document.querySelector(options.form);

  if (formElement) {
    formElement.onclick = function (e) {
      // e.preventDefault();
      options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        validate(inputElement, rule);
      });
    };

    options.rules.forEach(function (rule) {
      var inputElement = formElement.querySelector(rule.selector);
      if (inputElement) {
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };

        inputElement.oninput = function () {
          var errorElement =
            inputElement.parentElement.querySelector(".form-message");
          errorElement.innerText = "";
          inputElement.parentElement.classList.remove("invalid");
        };
      }
    });
  }
}

validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "vui lòng nhập tên";
    },
  };
};

validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : "vui lòng nhập email";
    },
  };
};

validator.isCv = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "vui lòng chọn cv";
    },
  };
};

// ///////////////////
function validator2(options) {
  function validate(inputElement, rule) {
    var errorMesage = rule.test(inputElement.value);
    var errorElement =
      inputElement.parentElement.querySelector(".form-message2");

    if (errorMesage) {
      errorElement.innerText = errorMesage;
      inputElement.parentElement.classList.add("invalid");
    } else {
      errorElement.innerText = "";
      inputElement.parentElement.classList.remove("invalid");
    }
  }

  var formElement = document.querySelector(options.form2);

  if (formElement) {
    formElement.onclick = function (e) {
      // e.preventDefault();
      options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        validate(inputElement, rule);
      });
    };

    options.rules.forEach(function (rule) {
      var inputElement = formElement.querySelector(rule.selector);
      if (inputElement) {
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };

        inputElement.oninput = function () {
          var errorElement =
            inputElement.parentElement.querySelector(".form-message2");
          errorElement.innerText = "";
          inputElement.parentElement.classList.remove("invalid");
        };
      }
    });
  }
}

validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "vui lòng nhập tên";
    },
  };
};

validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : "vui lòng nhập email";
    },
  };
};

validator.isCv = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "vui lòng chọn cv";
    },
  };
};

// ----------------------------------------------------------------

function openTimHieuThem() {
  var openTimHieuThem = document.querySelector(".timhieuthem");
  openTimHieuThem.classList.add("openTimHieuThem");
}

function dongTimHieuThem() {
  var dongTimHieuThem = document.querySelector(".timhieuthem");
  dongTimHieuThem.classList.remove("openTimHieuThem");
}

// --------------------------------------------------------------------------

function lightTable() {
  var lightTable = document.querySelector(".boxcontainertable");
  var rotaeToggleTable = document.querySelector(".toggle-table");
  rotaeToggleTable.classList.toggle("rotaeTable");
  lightTable.classList.toggle("backgroundtable");
}

function colorBackgroundTable() {
  var colorBackgroundTable = document.querySelector(".boxcontenttable");
  var widthThanhMauSac = document.querySelector(".thanhmausac2");
  var coloriconthanhmausac = document.querySelector(".iconthanhmausac");

  coloriconthanhmausac.classList.toggle("coloriconthanhmausac");
  colorBackgroundTable.classList.toggle("doimaubackgroundtable");
  widthThanhMauSac.classList.toggle("widththanhmausac");

  var closecolortable = document.querySelector(".thanhmausac3");
  closecolortable.classList.remove("widththanhmausac2");

  var closecolortable = document.querySelector(".thanhmausac4");
  closecolortable.classList.remove("widththanhmausac3");

  var closecolortable = document.querySelector(".iconthanhmausac3");
  closecolortable.classList.remove("coloriconthanhmausac3");

  var closecolortable = document.querySelector(".iconthanhmausac4");
  closecolortable.classList.remove("coloriconthanhmausac4");

  var closecolortable = document.querySelector(".boxcontenttable");
  closecolortable.classList.remove("doimaubackgroundtable3");

  var closecolortable = document.querySelector(".boxcontenttable");
  closecolortable.classList.remove("doimaubackgroundtable2");
}

function colorBackgroundTable2() {
  var colorBackgroundTable = document.querySelector(".boxcontenttable");
  var widthThanhMauSac = document.querySelector(".thanhmausac3");
  var coloriconthanhmausac = document.querySelector(".iconthanhmausac3");
  coloriconthanhmausac.classList.toggle("coloriconthanhmausac3");
  colorBackgroundTable.classList.toggle("doimaubackgroundtable2");
  widthThanhMauSac.classList.toggle("widththanhmausac2");

  var closecolortable = document.querySelector(".thanhmausac2");
  closecolortable.classList.remove("widththanhmausac");

  var closecolortable = document.querySelector(".thanhmausac4");
  closecolortable.classList.remove("widththanhmausac3");

  var closecolortable = document.querySelector(".iconthanhmausac");
  closecolortable.classList.remove("coloriconthanhmausac");

  var closecolortable = document.querySelector(".iconthanhmausac4");
  closecolortable.classList.remove("coloriconthanhmausac4");

  var closecolortable = document.querySelector(".boxcontenttable");
  closecolortable.classList.remove("doimaubackgroundtable");

  var closecolortable = document.querySelector(".boxcontenttable");
  closecolortable.classList.remove("doimaubackgroundtable3");
}

function colorBackgroundTable3() {
  var colorBackgroundTable = document.querySelector(".boxcontenttable");
  var widthThanhMauSac = document.querySelector(".thanhmausac4");
  var coloriconthanhmausac = document.querySelector(".iconthanhmausac4");

  coloriconthanhmausac.classList.toggle("coloriconthanhmausac4");
  colorBackgroundTable.classList.toggle("doimaubackgroundtable3");
  widthThanhMauSac.classList.toggle("widththanhmausac3");

  var closecolortable = document.querySelector(".thanhmausac2");
  closecolortable.classList.remove("widththanhmausac");

  var closecolortable = document.querySelector(".thanhmausac3");
  closecolortable.classList.remove("widththanhmausac2");

  var closecolortable = document.querySelector(".iconthanhmausac3");
  closecolortable.classList.remove("coloriconthanhmausac3");

  var closecolortable = document.querySelector(".iconthanhmausac");
  closecolortable.classList.remove("coloriconthanhmausac");

  var closecolortable = document.querySelector(".boxcontenttable");
  closecolortable.classList.remove("doimaubackgroundtable");

  var closecolortable = document.querySelector(".boxcontenttable");
  closecolortable.classList.remove("doimaubackgroundtable2");
}

// --------------------------------------------------------------------------------

function opencontenttable() {
  var opencontenttable = document.querySelector(".boxcontenttable");
  opencontenttable.classList.add("addcontenttable");

  var closeanimationto = document.querySelector(".animationto");
  closeanimationto.classList.remove("openanimation");

  var closesubnav = document.querySelector(".sub-nav");
  closesubnav.classList.remove("open-subnav");

  var closetiplaptrinh = document.querySelector(".tiplaptrinh");
  closetiplaptrinh.classList.remove("opentiplaptrinh");

  var closetransition = document.querySelector(".transitionto");
  closetransition.classList.remove("opentransitionto");

  var closeContentText = document.querySelector(".content-text");
  closeContentText.classList.remove("open-content-text");

  var closeContentImage = document.querySelector(".content-image");
  closeContentImage.classList.remove("open-content-image");

  var closecontentform = document.querySelector(".boxcontentform");
  closecontentform.classList.remove("addcontentform");

  var closetemplate = document.querySelector(".boxtemplate");
  closetemplate.classList.remove("openboxtemplate");

  var closecontentcard = document.querySelector(".contentcard");
  closecontentcard.classList.remove("opencontentcard");

  var clossecontentbutton = document.querySelector(".contentbutton");
  clossecontentbutton.classList.remove("opencontentbutton2");

  var closeGioiThieu = document.querySelector(".footer");
  closeGioiThieu.classList.remove("opengioithieuf8");
}

function closecontenttable() {
  var closecontenttable = document.querySelector(".boxcontenttable");
  closecontenttable.classList.remove("addcontenttable");
}

// ---------------------------------------------------------------------------

function opencontentform() {
  var opencontentform = document.querySelector(".boxcontentform");
  opencontentform.classList.add("addcontentform");

  var closeanimationto = document.querySelector(".animationto");
  closeanimationto.classList.remove("openanimation");

  var closeContentText = document.querySelector(".content-text");
  closeContentText.classList.remove("open-content-text");

  var closetemplate = document.querySelector(".boxtemplate");
  closetemplate.classList.remove("openboxtemplate");

  var closecontenttable = document.querySelector(".boxcontenttable");
  closecontenttable.classList.remove("addcontenttable");

  var closeContentImage = document.querySelector(".content-image");
  closeContentImage.classList.remove("open-content-image");

  var closecontentcard = document.querySelector(".contentcard");
  closecontentcard.classList.remove("opencontentcard");

  var closetransition = document.querySelector(".transitionto");
  closetransition.classList.remove("opentransitionto");

  var clossecontentbutton = document.querySelector(".contentbutton");
  clossecontentbutton.classList.remove("opencontentbutton2");

  var closeGioiThieu = document.querySelector(".footer");
  closeGioiThieu.classList.remove("opengioithieuf8");

  var closesubnav = document.querySelector(".sub-nav");
  closesubnav.classList.remove("open-subnav");

  var closetiplaptrinh = document.querySelector(".tiplaptrinh");
  closetiplaptrinh.classList.remove("opentiplaptrinh");
}

function closecontentform() {
  var closecontentform = document.querySelector(".boxcontentform");
  closecontentform.classList.remove("addcontentform");
}

function formfour() {
  var formfour = document.querySelector(".foldformfour");
  formfour.classList.toggle("activeformfour");
}

// --------------------------------------------------------------

function openboxhtmlbutton1() {
  var openboxhtmlbutton1 = document.querySelector(".boxcontenthtml");
  openboxhtmlbutton1.classList.toggle("openboxhtmlbutton1");
  var rotaeiconboxhtmlbutton = document.querySelector(".iconboxhtmlbutton");
  rotaeiconboxhtmlbutton.classList.toggle("rotaeiconboxhtmlbutton");
}

function openboxcssbutton1() {
  var openboxcssbutton1 = document.querySelector(".boxcontentcssbutton1");
  openboxcssbutton1.classList.toggle("openboxcssbutton1");
  var rotaeiconboxcssbutton1 = document.querySelector(".iconboxcssbutton1");
  rotaeiconboxcssbutton1.classList.toggle("rotaeiconboxcssbutton1");
}

function opencontentbutton() {
  var opencontentbutton = document.querySelector(".contentbutton");
  opencontentbutton.classList.add("opencontentbutton2");

  var closetemplate = document.querySelector(".boxtemplate");
  closetemplate.classList.remove("openboxtemplate");

  var closeanimationto = document.querySelector(".animationto");
  closeanimationto.classList.remove("openanimation");

  var closetransition = document.querySelector(".transitionto");
  closetransition.classList.remove("opentransitionto");

  var closetiplaptrinh = document.querySelector(".tiplaptrinh");
  closetiplaptrinh.classList.remove("opentiplaptrinh");

  var closeContentText = document.querySelector(".content-text");
  closeContentText.classList.remove("open-content-text");

  var closecontenttable = document.querySelector(".boxcontenttable");
  closecontenttable.classList.remove("addcontenttable");

  var closeContentImage = document.querySelector(".content-image");
  closeContentImage.classList.remove("open-content-image");

  var closecontentcard = document.querySelector(".contentcard");
  closecontentcard.classList.remove("opencontentcard");

  var closecontentform = document.querySelector(".boxcontentform");
  closecontentform.classList.remove("addcontentform");

  var anbuton = document.querySelector(".button");
  anbuton.classList.add("anbuixib");

  var closeGioiThieu = document.querySelector(".footer");
  closeGioiThieu.classList.remove("opengioithieuf8");

  var closesubnav = document.querySelector(".sub-nav");
  closesubnav.classList.remove("open-subnav");
}

function anbuton() {
  var anbuton = document.querySelector(".button");
  anbuton.classList.add("anbuixib");
}

function clossecontentbutton() {
  var clossecontentbutton = document.querySelector(".contentbutton");
  clossecontentbutton.classList.remove("opencontentbutton2");
}

function opencontentcard() {
  var opencontentcard = document.querySelector(".contentcard");
  opencontentcard.classList.add("opencontentcard");

  var closetemplate = document.querySelector(".boxtemplate");
  closetemplate.classList.remove("openboxtemplate");

  var closesubnav = document.querySelector(".sub-nav");
  closesubnav.classList.remove("open-subnav");

  var closeanimationto = document.querySelector(".animationto");
  closeanimationto.classList.remove("openanimation");

  var closeGioiThieu = document.querySelector(".footer");
  closeGioiThieu.classList.remove("opengioithieuf8");

  var closeContentText = document.querySelector(".content-text");
  closeContentText.classList.remove("open-content-text");

  var closecontenttable = document.querySelector(".boxcontenttable");
  closecontenttable.classList.remove("addcontenttable");

  var closeContentImage = document.querySelector(".content-image");
  closeContentImage.classList.remove("open-content-image");

  var closetransition = document.querySelector(".transitionto");
  closetransition.classList.remove("opentransitionto");

  var clossecontentbutton = document.querySelector(".contentbutton");
  clossecontentbutton.classList.remove("opencontentbutton2");

  var closecontentform = document.querySelector(".boxcontentform");
  closecontentform.classList.remove("addcontentform");

  var closetiplaptrinh = document.querySelector(".tiplaptrinh");
  closetiplaptrinh.classList.remove("opentiplaptrinh");
}

function closecontentcard() {
  var closecontentcard = document.querySelector(".contentcard");
  closecontentcard.classList.remove("opencontentcard");
}

function opencodecsscardbasicone() {
  var opencodecsscardbasicone = document.querySelector(
    ".codeopencodecsscardbasicone"
  );
  opencodecsscardbasicone.classList.toggle("opencodecsscardbasicone");

  var opencodecsscardbasicone1 = document.querySelector(".boxhtmlcsscard");
  opencodecsscardbasicone1.classList.toggle("opencodecsscardbasicone1");

  var dongcode = document.querySelector(".dongcode");
  dongcode.classList.toggle("dongcodelai");
}

function opencodecsscardbasicone1() {
  var opencodecsscardbasicone1 = document.querySelector(".boxhtmlcsscard");
  opencodecsscardbasicone1.classList.add("opencodecsscardbasicone1");
}

function opencodecsscardbasicone2() {
  var opencodecsscardbasicone2 = document.querySelector(".boxhtmlcsscard2");
  opencodecsscardbasicone2.classList.add("opencodecsscardbasicone2");
}

// //////////////////////////////
function opencodecsscardbasictwo() {
  var opencodecsscardbasictwo = document.querySelector(
    ".codeopencodecsscardbasictwo"
  );
  opencodecsscardbasictwo.classList.toggle("opencodecsscardbasictwo");

  var opencodecsscardbasicone2 = document.querySelector(".boxhtmlcsscard2");
  opencodecsscardbasicone2.classList.toggle("opencodecsscardbasicone2");

  var dongcode = document.querySelector(".dongcode2");
  dongcode.classList.toggle("dongcodelai");
}

///////////////////

function opencodecsscardbasicthree() {
  var opencodecsscardbasicthree = document.querySelector(
    ".codeopencodecsscardbasicthree"
  );
  opencodecsscardbasicthree.classList.toggle("opencodecsscardbasicthree");

  var opencodecsscardbasicone3 = document.querySelector(".boxhtmlcsscard3");
  opencodecsscardbasicone3.classList.toggle("opencodecsscardbasicone3");

  var dongcode = document.querySelector(".dongcode3");
  dongcode.classList.toggle("dongcodelai");
}

// /////////////////////////////////////////
function opencodecsscardbasicfour() {
  var opencodecsscardbasicfour = document.querySelector(
    ".codeopencodecsscardbasicfour"
  );
  opencodecsscardbasicfour.classList.toggle("opencodecsscardbasicfour");

  var opencodecsscardbasicone4 = document.querySelector(".boxhtmlcsscard4");
  opencodecsscardbasicone4.classList.toggle("opencodecsscardbasicone4");

  var dongcode = document.querySelector(".dongcode4");
  dongcode.classList.toggle("dongcodelai");
}

// ///////////////////////////////////////////
function opencodecsscardbasicfive() {
  var opencodecsscardbasicfive = document.querySelector(
    ".codeopencodecsscardbasicfive"
  );
  opencodecsscardbasicfive.classList.toggle("opencodecsscardbasicfive");

  var opencodecsscardbasicone5 = document.querySelector(".boxhtmlcsscard5");
  opencodecsscardbasicone5.classList.toggle("opencodecsscardbasicone5");

  var dongcode = document.querySelector(".dongcode5");
  dongcode.classList.toggle("dongcodelai");
}
// /////////////////////////////////

function dongcode() {
  var dongcode = document.querySelector(".dongcode");
  dongcode.classList.add("dongcodelai");

  var removecodecsscardbasicone = document.querySelector(
    ".codeopencodecsscardbasicone"
  );
  removecodecsscardbasicone.classList.remove("opencodecsscardbasicone");
}

function dongcode2() {
  var dongcode = document.querySelector(".dongcode");
  dongcode.classList.add("dongcodelai");

  var removecodecsscardbasictwo = document.querySelector(
    ".codeopencodecsscardbasictwo"
  );
  removecodecsscardbasictwo.classList.remove("opencodecsscardbasictwo");
}

function dongcod3() {
  var dongcode = document.querySelector(".dongcode3");
  dongcode.classList.add("dongcodelai");

  var removecodecsscardbasicthree = document.querySelector(
    ".codeopencodecsscardbasicthree"
  );
  removecodecsscardbasicthree.classList.remove("opencodecsscardbasicthree");
}

function dongcod4() {
  var dongcode = document.querySelector(".dongcode4");
  dongcode.classList.add("dongcodelai");

  var removecodecsscardbasicfour = document.querySelector(
    ".codeopencodecsscardbasicfour"
  );
  removecodecsscardbasicfour.classList.remove("opencodecsscardbasicfour");
}

function dongcod5() {
  var dongcode = document.querySelector(".dongcode5");
  dongcode.classList.add("dongcodelai");

  var removecodecsscardbasicfive = document.querySelector(
    ".codeopencodecsscardbasicfive"
  );
  removecodecsscardbasicfive.classList.remove("opencodecsscardbasicfive");
}

// ///////////animation///////////////////////////////

function openanimationto() {
  var openanimationto = document.querySelector(".animationto");
  openanimationto.classList.add("openanimation");

  var closetemplate = document.querySelector(".boxtemplate");
  closetemplate.classList.remove("openboxtemplate");

  var closetransition = document.querySelector(".transitionto");
  closetransition.classList.remove("opentransitionto");

  var closeGioiThieu = document.querySelector(".footer");
  closeGioiThieu.classList.remove("opengioithieuf8");

  var closesubnav = document.querySelector(".sub-nav");
  closesubnav.classList.remove("open-subnav");

  var closeContentText = document.querySelector(".content-text");
  closeContentText.classList.remove("open-content-text");

  var closecontenttable = document.querySelector(".boxcontenttable");
  closecontenttable.classList.remove("addcontenttable");

  var closecontentform = document.querySelector(".boxcontentform");
  closecontentform.classList.remove("addcontentform");

  var closecontentcard = document.querySelector(".contentcard");
  closecontentcard.classList.remove("opencontentcard");

  var clossecontentbutton = document.querySelector(".contentbutton");
  clossecontentbutton.classList.remove("opencontentbutton2");

  var closeContentImage = document.querySelector(".content-image");
  closeContentImage.classList.remove("open-content-image");

  var closetransition = document.querySelector(".transitionto");
  closetransition.classList.remove("opentransitionto");

  var closetiplaptrinh = document.querySelector(".tiplaptrinh");
  closetiplaptrinh.classList.remove("opentiplaptrinh");
}

function closeanimation() {
  var closeanimationto = document.querySelector(".animationto");
  closeanimationto.classList.remove("openanimation");

  var closetemplate = document.querySelector(".boxtemplate");
  closetemplate.classList.remove("openboxtemplate");

  var closetransition = document.querySelector(".transitionto");
  closetransition.classList.remove("opentransitionto");

  var closeGioiThieu = document.querySelector(".footer");
  closeGioiThieu.classList.remove("opengioithieuf8");

  var closesign = document.querySelector(".modal-login");
  closesign.classList.remove("open-sign");

  var closesubnav = document.querySelector(".sub-nav");
  closesubnav.classList.remove("open-subnav");

  var closecontentcard = document.querySelector(".contentcard");
  closecontentcard.classList.remove("opencontentcard");

  var clossecontentbutton = document.querySelector(".contentbutton");
  clossecontentbutton.classList.remove("opencontentbutton2");

  var closecontentform = document.querySelector(".boxcontentform");
  closecontentform.classList.remove("addcontentform");

  var closecontenttable = document.querySelector(".boxcontenttable");
  closecontenttable.classList.remove("addcontenttable");

  var closeContentText = document.querySelector(".content-text");
  closeContentText.classList.remove("open-content-text");

  var closeContentImage = document.querySelector(".content-image");
  closeContentImage.classList.remove("open-content-image");

  var closetiplaptrinh = document.querySelector(".tiplaptrinh");
  closetiplaptrinh.classList.remove("opentiplaptrinh");
}

// //////////////////////////////////////////////////////////

function opentransitionto() {
  var opentransitionto = document.querySelector(".transitionto");
  opentransitionto.classList.add("opentransitionto");

  var closeGioiThieu = document.querySelector(".footer");
  closeGioiThieu.classList.remove("opengioithieuf8");

  var closetemplate = document.querySelector(".boxtemplate");
  closetemplate.classList.remove("openboxtemplate");

  var closetiplaptrinh = document.querySelector(".tiplaptrinh");
  closetiplaptrinh.classList.remove("opentiplaptrinh");

  var closesubnav = document.querySelector(".sub-nav");
  closesubnav.classList.remove("open-subnav");

  var closeContentText = document.querySelector(".content-text");
  closeContentText.classList.remove("open-content-text");

  var closecontenttable = document.querySelector(".boxcontenttable");
  closecontenttable.classList.remove("addcontenttable");

  var closecontentform = document.querySelector(".boxcontentform");
  closecontentform.classList.remove("addcontentform");

  var closecontentcard = document.querySelector(".contentcard");
  closecontentcard.classList.remove("opencontentcard");

  var clossecontentbutton = document.querySelector(".contentbutton");
  clossecontentbutton.classList.remove("opencontentbutton2");

  var closeContentImage = document.querySelector(".content-image");
  closeContentImage.classList.remove("open-content-image");

  var closeanimationto = document.querySelector(".animationto");
  closeanimationto.classList.remove("openanimation");
}

function closetransition() {
  var closetransition = document.querySelector(".transitionto");
  closetransition.classList.remove("opentransitionto");
}

/////////////////sign/////////////////////////////////

function opensign() {
  var opensign = document.querySelector(".modal-login");
  opensign.classList.toggle("open-sign");

  var clossecontentbutton = document.querySelector(".contentbutton");
  clossecontentbutton.classList.remove("opencontentbutton2");

  var closeGioiThieu = document.querySelector(".footer");
  closeGioiThieu.classList.remove("opengioithieuf8");

  var closeGioiThieu = document.querySelector(".footer");
  closeGioiThieu.classList.remove("opengioithieuf8");
}

function closesign() {
  var closesign = document.querySelector(".modal-login");
  closesign.classList.remove("open-sign");
}

// ////////////////////////////////////////////////

function openlogin1() {
  var openlogin1 = document.querySelector(".login-1");
  openlogin1.classList.toggle("open-login1");

  var closelogin2 = document.querySelector(".login-2");
  closelogin2.classList.remove("open-login2");
}

function closelogin1() {
  var closelogin1 = document.querySelector(".login-1");
  closelogin1.classList.remove("open-login1");
}

// /////////////////////////////////////

function openlogin2() {
  var closelogin2 = document.querySelector(".login-2");
  closelogin2.classList.toggle("open-login2");

  var closelogin1 = document.querySelector(".login-1");
  closelogin1.classList.remove("open-login1");
}

function closelogin2() {
  var closelogin2 = document.querySelector(".login-2");
  closelogin2.classList.remove("open-login2");
}

// //////////////////////////////////////////////////

function opentiplaptrinh() {
  var opentiplaptrinh = document.querySelector(".tiplaptrinh");
  opentiplaptrinh.classList.add("opentiplaptrinh");

  var closetransition = document.querySelector(".transitionto");
  closetransition.classList.remove("opentransitionto");

  var closeGioiThieu = document.querySelector(".footer");
  closeGioiThieu.classList.remove("opengioithieuf8");

  var closesubnav = document.querySelector(".sub-nav");
  closesubnav.classList.remove("open-subnav");

  var closeContentText = document.querySelector(".content-text");
  closeContentText.classList.remove("open-content-text");

  var closecontenttable = document.querySelector(".boxcontenttable");
  closecontenttable.classList.remove("addcontenttable");

  var closecontentform = document.querySelector(".boxcontentform");
  closecontentform.classList.remove("addcontentform");

  var closecontentcard = document.querySelector(".contentcard");
  closecontentcard.classList.remove("opencontentcard");

  var clossecontentbutton = document.querySelector(".contentbutton");
  clossecontentbutton.classList.remove("opencontentbutton2");

  var closeContentImage = document.querySelector(".content-image");
  closeContentImage.classList.remove("open-content-image");

  var closetransition = document.querySelector(".transitionto");
  closetransition.classList.remove("opentransitionto");
}

function closetiplaptrinh() {
  var closetiplaptrinh = document.querySelector(".tiplaptrinh");
  closetiplaptrinh.classList.remove("opentiplaptrinh");

  var closetransition = document.querySelector(".transitionto");
  closetransition.classList.remove("opentransitionto");

  var closeGioiThieu = document.querySelector(".footer");
  closeGioiThieu.classList.remove("opengioithieuf8");
}

function contactme() {
  var contactme = document.querySelector(".contactme");
  contactme.classList.toggle("opencontactme");
}

function suncontact() {
  var suncontact = document.querySelector(".contactme");
  suncontact.classList.add("backround-sun-contact");

  var batnight = document.querySelector(".night-contact");
  batnight.classList.add("batnightcontact");

  var dongsuncontact = document.querySelector(".sun-contact");
  dongsuncontact.classList.add("dongsuncontact");

  var chukyme = document.querySelector(".chukyme");
  chukyme.classList.add("openchukyme");
}

function nightcontact() {
  var suncontact = document.querySelector(".contactme");
  suncontact.classList.remove("backround-sun-contact");

  var suncontactt = document.querySelector(".night-contact");
  suncontactt.classList.remove("batnightcontact");

  var dongsuncontact = document.querySelector(".sun-contact");
  dongsuncontact.classList.remove("dongsuncontact");

  var chukyme = document.querySelector(".chukyme");
  chukyme.classList.remove("openchukyme");
}

// /////////////////////////////////////////////////

function opentemplate() {
  var opentemplate = document.querySelector(".boxtemplate");
  opentemplate.classList.add("openboxtemplate");

  var closetransition = document.querySelector(".transitionto");
  closetransition.classList.remove("opentransitionto");

  var closeGioiThieu = document.querySelector(".footer");
  closeGioiThieu.classList.remove("opengioithieuf8");

  var closesubnav = document.querySelector(".sub-nav");
  closesubnav.classList.remove("open-subnav");

  var closeContentText = document.querySelector(".content-text");
  closeContentText.classList.remove("open-content-text");

  var closecontenttable = document.querySelector(".boxcontenttable");
  closecontenttable.classList.remove("addcontenttable");

  var closecontentform = document.querySelector(".boxcontentform");
  closecontentform.classList.remove("addcontentform");

  var closecontentcard = document.querySelector(".contentcard");
  closecontentcard.classList.remove("opencontentcard");

  var clossecontentbutton = document.querySelector(".contentbutton");
  clossecontentbutton.classList.remove("opencontentbutton2");

  var closeContentImage = document.querySelector(".content-image");
  closeContentImage.classList.remove("open-content-image");

  var closetransition = document.querySelector(".transitionto");
  closetransition.classList.remove("opentransitionto");

  var closetiplaptrinh = document.querySelector(".tiplaptrinh");
  closetiplaptrinh.classList.remove("opentiplaptrinh");
}

function closetemplate() {
  var closetemplate = document.querySelector(".boxtemplate");
  closetemplate.classList.remove("openboxtemplate");

  var closetransition = document.querySelector(".transitionto");
  closetransition.classList.remove("opentransitionto");

  var closeGioiThieu = document.querySelector(".footer");
  closeGioiThieu.classList.remove("opengioithieuf8");

  var closesign = document.querySelector(".modal-login");
  closesign.classList.remove("open-sign");

  var closesubnav = document.querySelector(".sub-nav");
  closesubnav.classList.remove("open-subnav");

  var closecontentcard = document.querySelector(".contentcard");
  closecontentcard.classList.remove("opencontentcard");

  var clossecontentbutton = document.querySelector(".contentbutton");
  clossecontentbutton.classList.remove("opencontentbutton2");

  var closecontentform = document.querySelector(".boxcontentform");
  closecontentform.classList.remove("addcontentform");

  var closecontenttable = document.querySelector(".boxcontenttable");
  closecontenttable.classList.remove("addcontenttable");

  var closeContentText = document.querySelector(".content-text");
  closeContentText.classList.remove("open-content-text");

  var closeContentImage = document.querySelector(".content-image");
  closeContentImage.classList.remove("open-content-image");

  var closetiplaptrinh = document.querySelector(".tiplaptrinh");
  closetiplaptrinh.classList.remove("opentiplaptrinh");
}
