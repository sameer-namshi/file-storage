/**
 * @param  { data from remote server} payload
 * @returns urls
 */
const parseUrls = (payload) => {
    try {
        return JSON.stringify(payload).match(/(https.*?")/g)?.map(value => value.slice(0, -1));
    } catch (error) {
        console.error(error);
    }
};
/**
 * @param  {} url
 * @returns filename
 */
const fileNameFromUrl = (url) => {
    return url.split('/').pop();
};
/**
 * @param  {} fileName
 * @param  {} originalFileName
 * @return new filename
 */
function incrementedFileName(fileName, originalFileName) {
    const lastCount = Number(fileName.split("_")[1]);
    const newCount = lastCount ? lastCount + 1 : 1;
    return originalFileName + '_' + newCount
}
/**
 * @param  {} res
 * @param  {} data
 */
function send(res, data) {
    res.json(data);
}

export {
    parseUrls,
    fileNameFromUrl,
    incrementedFileName,
    send
}