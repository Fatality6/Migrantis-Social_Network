import React from "react"
import { Field, reduxForm } from "redux-form"
import { Input, Textarea } from "../../common/FormsControl/FormsControls"
import style from "./profileInfo.module.css"
import { Dialog } from '@headlessui/react';


const ProfileDataForm = ({ handleSubmit, profile, error, onEditMode, editMode }) => {
  return (

    <Dialog open={editMode} onClose={onEditMode}>
      <div className={style.bgModal}>
        <Dialog.Panel className={style.popup}>
          
          <form onSubmit={handleSubmit}>
            <div>
              <button>сохранить</button>
            </div>
            <div className={style.formError}>{error}</div>
            <div className={style.textForm}>
              <b>Ник : </b><Field placeholder='ник' name={'fullName'} component={Input} />
            </div>
            <div className={style.textForm}>
              <b>В поисках работы : </b><Field component={'input'} name={'lookingForAJob'} type="checkbox" />
            </div>
            <div className={style.textForm}>
              <b>Что я умею : </b><Field placeholder='что я умею' name={'lookingForAJobDescription'} component={Textarea} />
            </div>
            <div className={style.textForm}>
              <b>Обо мне : </b><Field placeholder='обо мне' name={'aboutMe'} component={Textarea} />
            </div>
            {/* <div className={style.textForm}>
              <b>Мои контакты : </b>{Object.keys(profile.contacts).map(key => {
                return <div key={key} className={style.contacts}>
                  <b>{key}:{<Field placeholder={key} name={'contacts.' + key} component={Input} />}</b>
                </div>
              })}
            </div> */}
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

const ProfileDataFormReduxForm = reduxForm({ form: 'profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm