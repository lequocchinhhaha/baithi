$(document).ready(function(){
    var obj_form={
        rules:{
            email:{
                required:true,
                email:true
            }
        },
        messages:{
            email:{
                required:'bạn chưa nhập email',
                email:'bạn chưa nhập định dạng email đúng'
            }
        }
    }
    $('#form-info').validate(obj_form);
})