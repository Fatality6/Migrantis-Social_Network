import React, {useState, useEffect} from 'react';
/* import style from "./profileInfo.module.css"; */

const ProfileStatus = (props) => {

let [editMode,setEditMode] = useState(false)
let [status,setStatus] = useState(props.status)

useEffect( ()=>{setStatus(props.status)}, [props.status] )

const activateEditMode = () => {
    setEditMode(true)
}

const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
}

const onChangeStatus = (e) => {
    setStatus(e.currentTarget.value)
}

    
        return (
            <>
                {!editMode &&
                    <div>
                        <span onClick = {activateEditMode}> {props.status || 'нет статуса'} </span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input
                            autoFocus = {true}
                            onBlur = {deactivateEditMode}
                            value={status}
                            onChange={onChangeStatus}
                        />
                    </div>
                }
            </>
        )
    }


export default ProfileStatus;