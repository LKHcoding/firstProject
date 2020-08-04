$(document).ready(function () {
  $("#ajaxConGetButton").click(function () {
    AjaxConGet();
    console.log("1111");
  });

  $("#ajaxConPostButton").click(function () {
    AjaxConPost();
  });
  $(".ajaxDatePick").click(function () {
    // alert("이건성공");
    AjaxDatePick();
  });
});

function AjaxConGet() {
  var url = "http://192.168.10.150:8080/Ajax-jsp2/ajaxCon";
  $.ajax({
    type: "GET",
    url: url,
    dataType: "html",
    data: {
      name: $("#ajaxConName").val(),
      age: $("#ajaxConAge").val(),
      datepick: $("#ajaxDateInfo").val(),
    },
    success: function (data) {
     // alert("ajax GET 통신 성공");
      var $div = $("<div></div>");
      var text = document.createTextNode(data);
      $div.append(data);
      $div.appendTo($("#myDiv"));
    },
    error: function (request, status, error) {
      alert(
        "code:" +
          request.status +
          "\n" +
          "message:" +
          request.responseText +
          "\n" +
          "error:" +
          error
      ); //에러 상태에 대한 세부사항 출력
      alert(e);
    },
  });
}

function AjaxConPost() {
  var url = "http://192.168.10.150:8080/Ajax-jsp2/ajaxCon";
  $.ajax({
    type: "POST",
    url: url,
    dataType: "html",
    data: {
      name: $("#ajaxConName").val(),
      age: $("#ajaxConAge").val(),
      datepick: $("#ajaxDateInfo").val(),
    },
    success: function (data) {
      //alert("ajax POST 통신 성공");
      var $div = $("<div></div>");
      var text = document.createTextNode(data);
      $div.append(data);
      $div.appendTo($("#myDiv"));
    },
    error: function (request, status, error) {
      alert(
        "code:" +
          request.status +
          "\n" +
          "message:" +
          request.responseText +
          "\n" +
          "error:" +
          error
      ); //에러 상태에 대한 세부사항 출력
      alert(e);
    },
  });
}
function AjaxDatePick() {
  var url = "http://192.168.10.150:8080/Ajax-jsp2/ajaxCon";
  $.ajax({
    type: "POST",
    url: url,
    dataType: "html",
    data: {
      name: $("#ajaxConName").val(),
      age: $("#ajaxConAge").val(),
      datepick: $("#ajaxDateInfo").val(),
	  datepickButton: "True",

    },
    success: function (data) {
      //alert("datepick POST 통신 성공");
      var $div = $("<div></div>");
      var text = document.createTextNode(data);
      $div.append(data);
      $div.appendTo($("#myDiv"));
    },
    error: function (request, status, error) {
      alert(
        "code:" +
          request.status +
          "\n" +
          "message:" +
          request.responseText +
          "\n" +
          "error:" +
          error
      ); //에러 상태에 대한 세부사항 출력
      alert(e);
    },
  });
}
