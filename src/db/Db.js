const endpoint = "https://kea-alt-del.dk/kata-distortion/";

export function _GET(callback) {
  fetch(endpoint)
    .then((e) => e.json())
    .then((data) => callback(data))
    .catch(function (error) {
      console.log("Request failed", error);
    });
}