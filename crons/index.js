import { CronJob } from "cron";
import config from "../config.js";
import { parseUrls, fileNameFromUrl } from "../app/libs/utils.js"
import { requestStorageAPI, fetchUrlsFromRemote, fetchFileContentFromUrl } from "./helper.js"


/**
 * Main logic to data from urls
 */
async function execute() {
  try {

    const { REMOTE_URL, REMOTE_PATH, SELF, PATH, PORT } = config;

    const { data } = await fetchUrlsFromRemote(
      `${REMOTE_URL}/${REMOTE_PATH}`
    );

    if (data.length === 0) return;

    const urls = parseUrls(data);

    const promises = urls.filter(Boolean).map((url) => fetchFileContentFromUrl(url).then(
      (response) => {
        const { data: fileContent } = response;
        const fileName = fileNameFromUrl(url);
        requestStorageAPI(`${SELF}:${PORT}/${PATH}`, fileName, url, fileContent,)
      }
    )
    );

    Promise.allSettled(promises)

  } catch (error) {
    console.error(error);
  }
}


// cron calls after every 'x' interval
new CronJob(
  "*/5 * * * * *",
  execute,
  null,
  true,
  "America/Los_Angeles"
);

// first call on startup
(() => {
  execute()
})();




