/*
Expector's personal homepage  Copyright (C) 2022  Expector-Hutch
This program comes with ABSOLUTELY NO WARRANTY; for details type `show w'.
This is free software, and you are welcome to redistribute it
under certain conditions; type `show c' for details.
*/

import data from '../data/main.json' assert {type: 'json'};

function make_friends_link() {
    const friends = data.friends;
    let make_friend_html = friend => data.friend_link_html.replace("{site}", friend.site).replace("{icon}", friend.icon);
    var friends_html = document.getElementById("friends");
    for (var i = 0; i < friends.length; i++) {
        friends_html.innerHTML += make_friend_html(friends[i]);
        console.log(friends_html);
    }
}
make_friends_link()

window.oncontextmenu = function(e){
    //取消默认的浏览器自带右键
    e.preventDefault();
}

tippy('.friend',
    {content: '<div> \
        <img src="https://avatars.githubusercontent.com/u/98736983?v=4"> \
        <h3>云帆沧海</h3> \
        </div><hr><p>一个写Python的初中生飞友</p>',
    interactive: true,
    animation: 'scale'});
