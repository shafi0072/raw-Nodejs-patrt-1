// title: about handler
// module scarpholding
const handler = {};
handler.about = (requestProperties, callBack) => {
    console.log(requestProperties);
    callBack(200, {
        message:'this is a sample about',

    })
}

module.exports = handler;
