import React, { useState } from 'react'

export const UserInput = ({ onSubmit }) => {
    const [text, setText] = useState("")

    const handleOnChange = ({ target: { value } }) => setText(value)

    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gridGap: 8 }}>
            <input type="text" value={text} onChange={handleOnChange} />
            <button onClick={() => onSubmit(text)}>変換</button>
        </div>
    )
}