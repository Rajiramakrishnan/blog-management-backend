const bcrypt = require('bcrypt');
async function checkPass(password, dbPass) {
    const isSame = await bcrypt.compare(password, dbPass);
    return isSame
}

//todo => add hased pass herer

module.exports = {
    checkPass
}