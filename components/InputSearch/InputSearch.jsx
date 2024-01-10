  'use client'
 import { useState } from 'react'
import '../InputSearch/inputSearch.css'
const InputSearch = () => {
    const [text, setText] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    const handleChange = (event) => {
        setText(event.target.value)
    }

    console.log(text)

    return (
        <form onSubmit={handleSubmit} className="form">
            <input onChange={handleChange} className="form__input" placeholder="Busca fotos gratuitas"></input>
        </form>
    )
}
export default InputSearch