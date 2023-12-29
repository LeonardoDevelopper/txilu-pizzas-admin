const Hiden = ( { value, name, setValue } ) => {
    return <input type="hidden" name={name} value={value} onChange={setValue} />
}

export default Hiden