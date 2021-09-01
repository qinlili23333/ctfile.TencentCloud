const fetch =require("node-fetch")
var password = "547873715";
exports.main_handler = async (event, context) => {
  console.log("Hello World");
  console.log(event);
  console.log(event["non-exist"]);
  console.log(context);

  if (event.queryString.pass) {
    password = event.queryString.pass;
  }
  var fileid;
  if (event.queryString.file) {
    fileid = event.queryString.file;
  } else {
    return {
      isBase64Encoded: false,
      statusCode: 404,
      headers: { "Content-Type": "text/html" },
      body: "Cannot Find File",
    };
  }
  var dlurl = await fileToLink(fileid);
  if (dlurl) {
    return {
      isBase64Encoded: false,
      statusCode: 302,
      headers: {"Location": dlurl}
    };
  }

  return {
    isBase64Encoded: false,
    statusCode: 404,
    headers: { "Content-Type": "text/html" },
    body: "Cannot Find File",
  };

  async function fileToLink(fileid) {
    var jsonurl =
      "https://webapi.ctfile.com/getfile.php?path=f&f=" +
      fileid +
      "&passcode=" +
      password +
      "&token=false&r=" +
      Math.random() +
      "&ref=https://service-2rsoi72f-1253144261.sh.apigw.tencentcs.com";
    const response = await fetch(jsonurl, {
      headers: {
        origin: "https://service-2rsoi72f-1253144261.sh.apigw.tencentcs.com",
        referer: "https://service-2rsoi72f-1253144261.sh.apigw.tencentcs.com",
      },
    });
    var jsonFile = await response.text();
    console.log(jsonFile)
    var jsonText
    try{jsonText = JSON.parse(jsonFile);}
    catch{
        return false;
    }
    var jsonurl2 =
      "https://webapi.ctfile.com/get_file_url.php?uid=" +
      jsonText.userid +
      "&fid=" +
      jsonText.file_id +
      "&file_chk=" +
      jsonText.file_chk +
      "&app=0&acheck=2&rd=" +
      Math.random();
    const response2 = await fetch(jsonurl2, {
      headers: {
        origin: "https://service-2rsoi72f-1253144261.sh.apigw.tencentcs.com",
        referer: "https://service-2rsoi72f-1253144261.sh.apigw.tencentcs.com",
      },
    });
    var jsonFile2 = await response2.text();
    console.log(jsonFile2)
    var jsonText2 
    try{
        jsonText2 = JSON.parse(jsonFile2);}
    catch{
        return false;
    }
    return jsonText2.downurl;
  }
};
