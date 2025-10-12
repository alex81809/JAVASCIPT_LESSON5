function first() {
    console.log("hey im the first function")
    second()
}

function second() {
    console.log("hey im the second function")
}

function third() {
    console.log("hey im the third function")
    first()
}

third()
