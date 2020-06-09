
$(document).ready(function() {
    $("#imgloading").hide();
    $("#btnSubmit").click(function(){   
        $("#btnSubmit").hide();
        $("#imgloading").show();
        $.ajax({
            url: "/account",
            type: "POST",
            cache:true,
            data: JSON.stringify({userName:$("#txtUser").val(),password:$("#txtPassword").val()}),
            contentType: "application/json; charset=UTF-8",
            dataType: "json",
            success: function () {
               window.location.replace("/customer.html")
            },
            error: function (xhr, status) {
                $("#txtUser").val('');
                $("#txtPassword").val('');

                alert("Tài khoản hoặc tên đăng nhập không chính xác!")
            }, complete: function(){
                $("#btnSubmit").show();
                $("#imgloading").hide();
              }
        });
    })
});