export const exampleComponent = `
<Capitalized header="hoge" />
`

export const exampleSource = `
const Capitalized = ({ header }) => {
    if (typeof header === 'string') {
        const capitalized = header.charAt(0).toUpperCase() + header.slice(1)

        return <h2>{capitalized}</h2>
    } else {
        return null
    }
}
`

export const exampleSourceOnClick = `
const Capitalized = ({ header, onClick }) => {
    if (typeof header === 'string') {
        const capitalized = header.charAt(0).toUpperCase() + header.slice(1)

        return (
            <h2 onClick={onClick} style={{ cursor: onClick && "pointer", margin: 0, paddingBottom: 16 }}>
                {capitalized}
            </h2>
        )
    } else {
        return null
    }
}
`

export const exampleComponentError = `
<Capitalized header="clickable hoge" onClick={alert("Clicked")} />
`

export const exampleComponentOnClick = `
<Capitalized header="clickable hoge" onClick={() => alert("Clicked")} />
`

export const stateExample = `
const UserInput = ({ onSubmit }) => {
    const [text, setText] = useState("")

    const handleOnChange = ({ target: { value } }) => setText(value)

    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gridGap: 8 }}>
            <input type="text" value={text} onChange={handleOnChange} />
            <button onClick={() => onSubmit(text)}>変換</button>
        </div>
    )
}
`

export const InputComponent = `
<UserInput onSubmit={(text) => alert(text)} />
`

export const combinedComponentSource = `
const CapitalizedInput = () => {
    const [header, setHeader] = useState("capitalized hoge")

    return (
        <div style={{ display: "grid", alignContent: "center" }}>
            <Capitalized header={header} />
            <UserInput onSubmit={(text) => setHeader(text)} />
        </div>
    )
}
`

export const combinedComponent = `
<CapitalizedInput />
`