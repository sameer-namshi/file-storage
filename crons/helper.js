import axios from "axios"

/**
 * @param  {fetch urls from remote server} url
 */
function fetchUrlsFromRemote(url) {
    return axios(url);
}

/**
 * @param  {fetch urls from remote server} url
 */
function fetchFileContentFromUrl(url) {
    return axios(url);
}

/**
 * @param  {url of storage service} hostUrl
 * @param  {name of file} fileName
 * @param  {remote url} fileUrl
 * @param  {binary file data} fileContent
 */
function requestStorageAPI(hostUrl, fileName, fileUrl, fileContent,) {
    return axios.post(hostUrl, {
        fileName,
        fileUrl,
        fileContent
    })
}

export {
    fetchUrlsFromRemote,
    fetchFileContentFromUrl,
    requestStorageAPI
}