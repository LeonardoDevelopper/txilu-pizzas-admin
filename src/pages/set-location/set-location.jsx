import React, { useEffect } from "react"
import "./set-location.css"
import { ButtonDefault, ButtonSubmit } from "../../components/form/components/Button/Button"
import { BigTextTomato, SmallTextTomato } from "../../components/form/components/text/Text"
import { BASE_URL } from "../../components/form/Form"
import { useNavigate } from "react-router-dom"
import { Modal } from '../../components/partials/modal/index'
const SetLocation = () =>{
    const root = document.getElementById('root')
    const REDIRECT_TO = useNavigate()
    const [user_location, setUser_location] = React.useState(null)
    const TOKEN_ADMIN = JSON.parse(window.localStorage.getItem('TOKEN-ADMIN')) || null
    const modal = new Modal()
    useEffect(() => {
        if (!TOKEN_ADMIN)
            REDIRECT_TO('/login')
    })
    const get_adm_location = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords
                setUser_location({
                    user_coords: {
                        LATITUDE: latitude,
                        LONGITUDE: longitude

                    }
                })
                const updateLocation = {...TOKEN_ADMIN, coords: {lat : latitude, lon : longitude}}
                console.log(updateLocation)
                 fetch(BASE_URL + '/admin/inserts/set-location', 
                 {
                     method : 'POST',
                     headers : {
                         'Content-Type' : 'application/json'
                     },
                     body : JSON.stringify({data : updateLocation})
                 } ).then((res) => res.json())
                 .then((response) => {
                    if(response.OK)
                    {
                        REDIRECT_TO('/dashboard') 
                        modal.open('success', 'Permissão recebida', root)
                    }else
                        modal.open('failure', 'A resposta do servidor retornou com um erro, tente novamente', root)
                 }).catch(() => {
                    modal.open('failure', 'Ouve algum erro durante a requisição, tente novamente', root)

                 })
             }, (error) => {
                 if (error && error.code ==  error.PERMISSION_DENIED)
                 {
                     setUser_location(false)
                     modal.open('failure', 'permissão negada pelo usuário', root)
                 }else{
              
                 }

             })
        }
    }
    return (
        <main className="setLocation">

            <div className="body-translate"> 
             {user_location && user_location.user_coords ? <SmallTextTomato text={"Lat: "+user_location.user_coords.LATITUDE + ", Lon: " + user_location.user_coords.LONGITUDE} /> : ""}

                <BigTextTomato text={"Está aplicação requer localização do usuário"} />
                <SmallTextTomato text={"Clique em <Permitir> para nos conceder sua localização"} />
                <ButtonDefault location = {user_location && user_location.user_coords ? true: false} fun={get_adm_location} text={"Permitir"} />

            </div>
        </main>
    )
}
export default SetLocation