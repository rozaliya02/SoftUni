function zoostore(input) {
    let dogs = Number(input[0]);
    let cats = Number(input[1]);
    let result = dogs * 2.5 + cats * 4;
    console.log(`${result}`);
}
zoostore([5,4]);