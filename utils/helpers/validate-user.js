module.exports = function validateUser(user) {
    const trueValue = (value) => !!value === true; 
    
    if (Object.keys(user).length < 4) {
        throw new Error("This user ain't right");
    };

    if (!Object.values(user).every(trueValue)) {
        throw new Error("This user ain't right");
    }

    return;
}