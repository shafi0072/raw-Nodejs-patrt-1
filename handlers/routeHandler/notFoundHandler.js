// title: not found handler
// module scarpholding

const handler = {};
handler.notFoundHandler = (requestProperties, callBack) => {
    console.log(requestProperties);
    callBack(404, {
        message:'this is a notfound url',

    })
}

module.exports = handler;
