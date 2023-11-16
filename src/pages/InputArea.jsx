
import { useState, useEffect } from 'react'
const InputArea = () => {
    const HOST = "http://127.0.0.1:8000"
    const [profileLink, setProfileLink] = useState("")

    var sendProfileLink = () => {

        axios.post(`${HOST}/home`, {
            "text": profileLink
        })
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }
    return (
        <div>
            <input type="text" className="profileLinkTextBox" id="" onChange={(e) => setProfileLink(e.target.value)} />
            <h1>{profileLink}</h1>
            <input type="button" value="Predict" onClick={sendProfileLink} />
        </div>
    )
}

export default InputArea