import Parse from "parse";

// called to populate form
export const getAllGroups = () => {
    const Group = Parse.Object.extend("Group");
    const query = new Parse.Query(Group);
    return query.find().then((results) => {
        return results;
    });
};

// called during join group to properly set the pointer
export const getGroup = (id) => {
    const Group = Parse.Object.extend("Group");
    const query = new Parse.Query(Group);
    return query.get(id).then((result) => {
        return result;
    })
};

export const createGroup = (name) => {
    const Group = Parse.Object.extend("Group");
    const group = new Group();
    group.set("name", name);
    return group.save().then((result) => {
        return result;
    });
};