import React, { useEffect } from "react"
import "./set-location.css"
import { ButtonDefault, ButtonSubmit } from "../../components/form/components/Button/Button"
import { BigTextTomato, SmallTextTomato } from "../../components/form/components/text/Text"
import { BASE_URL } from "../../components/form/Form"
import { useNavigate } from "react-router-dom"
const SetLocation = () =>{
    const REDIRECT_TO = useNavigate()
    const [user_location, setUser_location] = React.useState(null)
    const TOKEN_ADMIN = window.localStorage.getItem('TOKEN-ADMIN') || null
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

            //     fetch(BASE_URL + '/admin/inserts/set-location', 
            //     {
            //         method : 'POST',
            //         headers : {
            //             'Content-Type' : 'application/json'
            //         },
            //         body : JSON.stringify()
            //     } )
            // }, (error) => {
            //     if (error && error.code ==  error.PERMISSION_DENIED)
            //     {
            //         setUser_location(false)
            //     }else{
                    
            //     }

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