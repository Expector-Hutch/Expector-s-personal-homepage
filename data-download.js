var fs = require("fs");
var path = require("path");

var dirPath = path.join(__dirname, "data");
if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath);
const songid = 1299289240;
var files = {
    "detail.json": [`http://music.163.com/api/song/detail/?id=${songid}&ids=%5B${songid}%5D`,
        (json) => {
            var artists = "";
            for (let i in json.songs[0].artists) artists += json.songs[0].artists[i].name + ' / ';
            artists = artists.substr(0, artists.length - 3);
            return JSON.stringify({
                "name": json.songs[0].name,
                "artists": artists,
                "picUrl": json.songs[0].album.picUrl
            }).toString();
        }],
    "lyric.json": [`https://music.163.com/api/song/lyric?id=${songid}&lv=1&kv=1&tv=-1`,
        (json) => JSON.stringify({ "lyric": json.lrc.lyric }).toString()]
};

for (let file_name in files) {
    fetch(files[file_name][0])
        .then((response) => response.json())
        .then((json) => fs.writeFile(`./data/${file_name}`,
            files[file_name][1](json),
            () => console.log(`file ${file_name} has been downloaded`)));
}
