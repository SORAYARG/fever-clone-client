import { catcher } from "./utils";

const getAll = (client) => async () => catcher(client.get)("events/get-all");
console.log(getAll)
const events = (client) =>({
    getAll: getAll(client),
});

export default events;