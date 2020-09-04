$(function () {
    getUserInfo()
})
// 获取用户信息
function getUserInfo() {
    $.ajax({
        method: "get",
        url: "/my/userinfo",
        // headers: {
        //     Authorization: localStorage.getItem("token")
        // },
        success: function (res) {
            console.log(res);
            if (res.status !== 0) {
                return layer.msg("获取用户信息失败！")
            }
            else {
                renderAvatar(res.data)
            }
        }
    })
}
// 渲染头像
function renderAvatar(user) {
    var name = user.nickname || user.username
    $("#welcome").html("欢迎&nbsp&nbsp" + name)

    if (user.user_pic !== null) {
        $(".layui-nav-img").prop("src", user.user_pic).show()
        $(".ext-avatar").hide()
    } else {
        $(".text-avatar").html(name[0].toUpperCase()).show()
        $(".layui-nav-img").prop("src", user.user_pic).hide()
    }

}
$("#tuichu").on("click", function () {
    // console.log(111);
    var layer = layui.layer
    layer.confirm('确定退出登录?', { icon: 3, title: '提示' }, function (index) {
        localStorage.removeItem("token")
        location.href = "/login.html"
        layer.close(index);
    });
})




















// $(function () {
//     getUserInfo()
// })
// function getUserInfo() {
//     $.ajax({
//         method: "get",
//         url: "/my/userinfo",
//         // headers: {
//         //     Authorization: localStorage.getItem("token")
//         // },
//         success: function (res) {
//             console.log(res);
//             if (res.status !== 0) {
//                 return layui.layer.msg("获取用户信息失败！")
//             } else {
//                 renderAvatar(res.data)
//             }
//         },
//         complete: function (res) {
//             // console.log(res);
//             if (res.responseJSON.status === 1 && res.responseJSON.message === "身份认证失败！") {
//                 localStorage.removeItem("token")
//                 location.href = "/login.html"
//             }
//         }
//     })
// }
// function renderAvatar(user) {
//     // 1. 获取用户的名称
//     var name = user.nickname || user.username
//     // 2. 设置欢迎的文本
//     $('#welcome').html('欢迎&nbsp;&nbsp;' + name)
//     // 3. 按需渲染用户的头像
//     if (user.user_pic !== null) {
//         // 3.1 渲染图片头像
//         $('.layui-nav-img')
//             .attr('src', user.user_pic)
//             .show()
//         $('.text-avatar').hide()
//     } else {
//         // 3.2 渲染文本头像
//         $('.layui-nav-img').hide()
//         var first = name[0].toUpperCase()
//         $('.text-avatar')
//             .html(first)
//             .show()
//     }
// }
