import './style.css'

export class Modal {
    static modal = document.createElement('div')
    static content = document.createElement('div')
    static message = document.createElement('h3')
    static button = document.createElement('button')

    static create (type, text) {
        Modal.modal.setAttribute('class', 'container-modal-'+type)
        Modal.modal.id = 'modal';
        Modal.content.setAttribute('class', 'content-text')
        Modal.message.textContent = text;
        Modal.message.setAttribute('class', 'txt-white')
        Modal.button.setAttribute('class', 'button-modal')
        Modal.button.id = 'btn-close-modal'
        Modal.button.textContent = 'x'
        Modal.modal.appendChild(Modal.content)
        Modal.content.appendChild(Modal.message)
        Modal.modal.appendChild(Modal.button)
        return Modal.modal
    }

    open(type, text, parentElement) {
        for (const child of parentElement.children){
            if(child.id == 'modal')
            {
                parentElement.removeChild(child)
                parentElement.appendChild(Modal.create(type, text,))
            }
            else
                parentElement.appendChild(Modal.create(type, text,))
        }
        Modal.closeAutomatically(parentElement)

        Modal.button.onclick = () => {
            Modal.close(parentElement)
        }
    }

    static closeAutomatically(parentElement){
        for (const child of parentElement.children){
            if(child.id == 'modal')
            {
                setTimeout(() => {
                    child.classList.add('closing-modal')
                    setTimeout(() => {
                        try {
                            parentElement.removeChild(child)
                            
                        } catch (error) {
                            console.log(error.message)
                        }
                    }, 1000);
                }, 4000);
            }
        }
    }
    static close(parentElement)
    {
        for (const child of parentElement.children){
            if(child.id == 'modal')
            {
                console.log(child)
                //child.classList.add('closing-modal')
                try {
                    parentElement.removeChild(child)
                    
                } catch (error) {
                    console.log(error.message)
                }
            }
        }
    }
}