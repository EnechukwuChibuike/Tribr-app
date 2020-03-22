const HEROKU_SERVER = "https://tribrx.herokuapp.com/graphql";
const LOCAL_SERVER = "http://localhost:2020/graphql";

const mode = process.env.NODE_ENV === "production";

export const SERVER_URL = !mode ? HEROKU_SERVER : LOCAL_SERVER;
