import React, { useState } from 'react'

import { UserInput } from './UserInput'
import { Capitalized } from './Capitalized'

export const CapitalizedInput = () => {
    const [header, setHeader] = useState("hoge")

    return (
        <div style={{ display: "grid", alignContent: "center" }}>
            <Capitalized header={header} />
            <UserInput onSubmit={(text) => setHeader(text)} />
        </div>
    )
}