const inputCheck = (input, type) => {
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    if (!input) return "Oops, the field cannot be left empty"
    if (type === "email") {
        if (!validEmail.test(input)) return "Oops, the email doesn't seem to be a valid one"
    }
}

export default inputCheck