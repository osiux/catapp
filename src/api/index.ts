import ky from "ky";

const catApi = ky.extend({
    prefixUrl: "https://api.thecatapi.com/v1/",
    headers: {
        "x-api-key": process.env.REACT_APP_CAT_API as string,
    },
});

export default catApi;
