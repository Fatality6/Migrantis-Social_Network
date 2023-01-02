import React from "react"
import { Field, reduxForm } from "redux-form"
import { Input, Textarea } from "../../common/FormsControl/FormsControls"
import style from "./profileInfo.module.css"

const ProfileDataForm = ({profile, handleSubmit}) => {
    return(
        <form onSubmit={handleSubmit}>
        <div>
          <button>сохранить</button>
        </div>
      <div className={style.text}>
      <b>Ник : </b><Field placeholder='ник' name={'fullName'} component={Input} />
      </div>
      <div className={style.text}>
        <b>В поисках работы : </b><Field component={'input'} name={'lookingForAJob'} type="checkbox" />
      </div>
        <div className={style.text}>
          <b>Что я умею : </b><Field placeholder='что я умею' name={'lookingForAJobDescription'} component={Textarea} />
        </div>
      <div className={style.text}>
        <b>Обо мне : </b><Field placeholder='обо мне' name={'AboutMe'} component={Textarea} />
      </div>
      {/* <div className={style.text}>
        <b>Мои контакты : </b>{Object.keys(profile.contacts).map(key => {
          return <Contact key={key} title={key} value={profile.contacts[key]} />
        })}
      </div> */}
      <div className={style.text}>
        {profile.contacts.vk}
      </div>
    </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form:'profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm