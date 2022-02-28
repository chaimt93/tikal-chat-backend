const db = {};

async function insertData({path, data}) {
    try {
        db[path] = db[path] ? [...db[path], data] : [data];
        return {success: true}
    } catch (e) {
        return {success: false, error: e}
    }

}

async function getData({path}) {
    return {messages:db[path]}
}

module.exports = {
    insertData,
    getData
}