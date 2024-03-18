const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
const inputCheck = (field, value) => {
    if (!value) {
        if (field === "name") return "No name provided"
        if (field === "email") return "An email is required for me to respond"
        if (field === "message") return "Oops, you forgot to fill in the message field"
    }
    if (field === "email") {
        if (!validEmail.test(value)) return "Oops, it seems the email provided is not valid"
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