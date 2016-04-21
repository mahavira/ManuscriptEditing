module.exports = function (req, res) {
  var fs = require('fs'),
    fileList = [];
  function walk(path) {
    var dirList = fs.readdirSync(path);
    dirList.forEach(function (item) {
      if (fs.statSync(path + '/' + item).isDirectory()) {
        walk(path + '/' + item);
      } else {
        fileList.push({
          name: item,
          content: fs.readFileSync(path + '/' + item, "utf-8")
        });
      }
    });
  }

  walk('./public/components');
  res.json(fileList)
  res.end()
}
