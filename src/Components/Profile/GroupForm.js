import React from "react";

const GroupForm = ({ golfer, groups, onLeave, onJoinChange, onJoinSubmit, onCreateChange, onCreateSubmit }) => {
    return (
        <div>
            {golfer !== undefined && (
                <div>
                    {golfer.get("group") ? (
                        <div>
                            <h4>You are in group: {golfer.get("group").get("name")}</h4>
                            <button onClick={onLeave}>Leave Group</button>
                        </div>
                    ) : (
                        <div>
                            <div>
                                <h2>Join a Group</h2>
                                <form onSubmit={onJoinSubmit}>
                                    <label htmlFor="group-finder">Select a group below</label>
                                    <br />
                                    <select name="group-finder" defaultValue={'DEFAULT'} onChange={onJoinChange}>
                                        <option value="DEFAULT" disabled> -- groups -- </option>
                                        {groups && groups.map((group) => (
                                            <option key={group.id} value={group.id}>{group.get("name")}</option>
                                        ))}
                                    </select>
                                    <br />
                                    <br />
                                    <button type="submit" onSubmit={onJoinSubmit}>Join</button>
                                </form>
                            </div>
                            <div>
                                <h2>Create a Group</h2>
                                <form onSubmit={onCreateSubmit}>
                                    <label htmlFor="name">What is the name of your group?</label>
                                    <br />
                                    <br />
                                    <input type="text" name="name" onChange={onCreateChange} placeholder="group name"/>
                                    <br />
                                    <br />
                                    <button type="submit" onSubmit={onCreateSubmit}>Create</button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}   

export default GroupForm;