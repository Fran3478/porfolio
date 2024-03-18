const inputCheck = (type, input) => {
    console.log(input, type)
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    if (!input) {
        if (type === "name") return "No name provided"
        if (type === "email") return "An email is required for me to respond"
        if (type === "message") return "Oops, you forgot to fill in the message field"
    }
    if (type === "email") {
        if (!validEmail.test(input)) return "Oops, it seems the email provided is not valid"
    }
    return ""
}

export default inputCheck