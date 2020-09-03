$(function () {
    var form = layui.form
    var layer = layui.layer
    form.verify({
        pwd: [/^[\S]{6,12}$/, "密码必须6-12位且不能出现空格"],
        repwd: function (value) {
            // 通过形参拿到的是确认密码框中的内容
            // 还需要拿到密码框中的内容
            // 然后进行一次等于的判断
            // 如果判断失败,则return一个提示消息即可
            var pwd = $('.reg-box [name=password]').val()
            if (pwd !== value) {
                return '两次密码不一致！'
            }
        }
    })
    $("#form_reg").on("submit", function (e) {
        e.preventDefault()
        var data = {
            username: $("#form_reg [name=username]").val(),
            password: $("#form_reg [name=password]").val()
        }
        $.post("http://ajax.frontend.itheima.net/api/reguser", data, function (res) {
            if (res.status !== 0) {
                return layer.msg(res.message)
            }
            else {
                layer.msg(res.message)
                $("#form_login")[0].reset()
                $("#link_login").click()
            }
        })
    })
    $("#form_login").on("submit", function (e) {
        e.preventDefault()
        var data = $(this).serialize()
        $.post("http://ajax.frontend.itheima.net/api/login", data, function (res) {
            console.log(res);
            if (res.status !== 0) {
                layer.msg(res.message)
            } else {
                layer.msg(res.message)
                localStorage.setItem("token", res.token)
                $("#form_login")[0].reset()
                // location.href = "/index.html"

            }
        })
    })
})