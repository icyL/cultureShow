var form =document.getElementById("form");
var form1 =document.getElementById("form1");
var inputs=document.getElementsByTagName("input");
var textarea=document.getElementById("area");
var showORhid=document.getElementById("showORhid");
var flag=false;//是否显示表单的标识

function showORhidForm() {
    flag=!flag;
    if(flag){
        showORhid.innerHTML="关闭留言";
    }else{
        showORhid.innerHTML="在线留言";
    }
    form.style.display=flag ? "block":"none";
    form1.style.display="none";

}

function submitMsg() {
    if (textarea.value !== "") {
        alert("留言成功！");
        textarea.value = "";
    }else{
        alert("请输入留言！");
    }
    return false;
}


/*异步提交*/
$("#form").submit(function (){
    var ajax_type = "GET"; //提交方法
    // var ajax_type = $(this).attr('method'); //提交方法
    var ajax_url = ""; //表单目标
    var ajax_data = $(this).serialize(); //表单数据

    $.ajax({
        type:ajax_type, //表单提交类型
        url:ajax_url, //表单提交目标
        data:ajax_data, //表单数据
        success:function(msg) {
            console.log(msg);//要跳转的网页里的数据
            // window.close();
            alert("提交成功！");
        },
        error:function() {
            alert("异常");
        }
    });
    $("#user").text(inputs[0].value+"，您好！");
    for(var i=2;i<inputs.length-1;i++){
        inputs[i].value="";
    }
    form1.style.display= "block";
    return false; //阻止表单的默认提交事件
});
