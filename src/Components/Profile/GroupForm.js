import React from "react";

const GroupForm = ({ user, groups }) => {
    console.log(user.get("group")); 

    return (
        <div>
            {user.get("group") ? (
                <div>
                    <h2>You are in group: {user.get("group").get("name")}</h2>
                </div>
            ): (
                <div>
                    <h2>Join a Group</h2>
                    <form>
                        <label htmlFor="group-finder">Select a group below</label>
                        <br />
                        <select name="group-finder">
                            {groups && groups.map((group) => (
                                <option key={group.id}>{group.get("name")}</option>
                            ))}
                        </select>
                        <br />
                        <br />
                        <button type="submit">Join</button>
                    </form>
                </div>
            )}
        </div>
    )
}   

export default GroupForm;