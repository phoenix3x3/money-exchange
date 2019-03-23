module.exports = function makeExchange(currency) {
    result = {};
    const coins = [50, 25, 10, 5, 1];
    const names = ['H', 'Q', 'D', 'N', 'P'];
    let x;
    const returnError = {
        error: "You are rich, my friend! We don't have so much coins for exchange"
    };
    if(currency > 10000) return returnError;
    if(currency < 0) return result;
    for(let i = 0; i < 5; i++)  {
        x = Math.floor(currency / coins[i]);
        if(x != 0) result[names[i]] = x;
        currency -= x * coins[i];
    }
    return result;
}
