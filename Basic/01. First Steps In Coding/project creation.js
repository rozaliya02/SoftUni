function projectCreation(input) {
    let arcname = input[0];
    let projects = input[1];
    let hours = projects * 3;
    console.log(`The architect ${arcname} will need ${hours} hours to complete ${projects} project/s.`)
}
projectCreation(["George", "4"])