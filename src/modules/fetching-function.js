import jwt from "jsonwebtoken";

const getToken = () => jwt.sign({
    exp: (() => Math.floor(Date.now() / 1000) + 60)(),
    "iss": "learn-web-dev-camper-key"
  }, "web-dev-camper-secret"
);

const EMSI_URL = "https://emsiservices.com/emsi-open-proxy-service/postings/us/taxonomies/"

export async function fetchingFunction(searchType, searchText, searchLimit){
    let fetchingParams = `${searchType}?q=${searchText}&limit=${searchLimit}`
    let URLforFetch = new URL(fetchingParams, EMSI_URL);
    console.log(URLforFetch);
    let res = await fetch(URLforFetch, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${getToken()}`,
        }
    })
    let jsonData = await res.json();
    console.log("real Emsi data!", jsonData);
    return jsonData;
}