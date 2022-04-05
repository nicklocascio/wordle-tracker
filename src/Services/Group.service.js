// method to get all groups
// method to add to group
// method to create group
// method to edit group
import Parse from "parse";

export const getAllGroups = () => {
    const Group = Parse.Object.extend("Group");
    const query = new Parse.Query(Group);
    return query.find().then((results) => {
        console.log(results);
        return results;
    });
};