var scores = {
    "kor": 55,
    "mat": 75,
    "eng": 50
}

if (Object.entries(scores).filter(v => v < 40).length !== 0) {
    console.log('fail');
} else if (Object.values(scores).reduce((a,b) => a + b) / Object.keys(scores).length < 60) {
    console.log('fail');
} else {
    console.log('pass');
}