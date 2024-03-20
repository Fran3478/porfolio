const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
const inputCheck = (field, value) => {
    if (!value) return "not_found"
    if (field === "email") {
        if (!validEmail.test(value)) return "invalid"
    }
    return ""
}
const bulkCheck = (fields) => {
    let checkPass = true
    fields.forEach(e => {
        let error = inputCheck(e.field, e.value)
        if (error) {
            e.error(error)
            e.field !== "name" && (checkPass = false)
        }
    })
    return checkPass
}

export { inputCheck, bulkCheck }