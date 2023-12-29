import React from "react"
import "./modals.css"
import { MediumTextTomato } from "../../form/components/text/Text"
import { ButtonSubmit } from "../../form/components/Button/Button"
const Modal_message = ({message, content_message}) => {
    return (
        <main className={message ? "show-modal": "hide-modal"}>
            <div className="container-modal">
                <MediumTextTomato text={content_message} />
                 <ButtonSubmit text={"Fechar"} />
            </div>
        </main>
    )
}
export default Modal_message