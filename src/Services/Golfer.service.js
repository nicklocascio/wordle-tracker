import Parse from "parse";

import { getGroup } from "./Group.service";

// simple create method called during sign up
export const createGolfer = (firstName, lastName) => {
    const Golfer = Parse.Object.extend("Golfer");
    const golfer = new Golfer();
    golfer.set("firstName", firstName);
    golfer.set("lastName", lastName);
    return golfer.save().then((result) => {
        return result;
    });
};

// unset the golfer group attribute to leave
export const leaveGroup = (id) => {
    const Golfer = Parse.Object.extend("Golfer");
    const query = new Parse.Query(Golfer);
    return query.get(id).then((golfer) => {
        golfer.unset("group");
        return golfer.save();
    });
};

// first retrieve the group based on selection and then set golfer group
// use an await to ensure that we get group first
export async function joinGroup(golferId, groupId) {
    const Golfer = Parse.Object.extend("Golfer");
    const query = new Parse.Query(Golfer);

    const group = await getGroup(groupId);

    return query.get(golferId).then((golfer) => {
        golfer.set("group", group);
        return golfer.save();
    });
};

export async function getGroupGolfers(golferId, groupId) {
    // start by getting all of the golfers
    const Golfer = Parse.Object.extend("Golfer");
    const query = new Parse.Query(Golfer);
    const golfers = await query.find();
    console.log(golfers);

    // for each golfer, check if they are in the group, and add to return list if so
    let groupGolfers = [];
    golfers.forEach((golfer) => {
        if(golfer.id != golferId) {
            console.log(golfer);
            try {
                let golferGroupId = golfer.get("group").id;
                if(golferGroupId == groupId) {
                    groupGolfers.push(golfer);
                }
            } catch(error) {
                
            }
        }
    });

    return groupGolfers;
}
