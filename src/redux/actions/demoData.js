export const getRandomData = () => {
    let array = [];

    for (let i=0; i< getRandomInt(10, 1000); i++) {
        array.push({
            firstName: getRandomString(),
            lastName: getRandomString(),
            birthday: randomDate(new Date(2012, 0, 1), new Date()),
            phoneNumber: getRandomPhoneNumber()
        })
    }
    return array;
}

export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export const getRandomString = () => {
    return Math.random().toString(36).substring(7);
}

export const getRandomPhoneNumber = () => {
    return Math.random().toString().slice(2,11);
}