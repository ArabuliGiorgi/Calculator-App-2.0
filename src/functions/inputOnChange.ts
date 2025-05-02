export function Check(str: string, original: string){
    const symbols = "+-x*/÷";
    if(str.endsWith(' '))
        return original;
    const eachSymbols = str.split('');
    if(isNaN(Number(eachSymbols[eachSymbols.length - 1])) && ![...symbols, '%', '.'].includes(eachSymbols[eachSymbols.length - 1]) && eachSymbols.length !== 0)
        return original;
    if(eachSymbols[eachSymbols.length - 1] === eachSymbols[eachSymbols.length - 2] && [...symbols, '%'].includes(eachSymbols[eachSymbols.length - 1]))
        return original;
    let lastNumber = "";
    for (let i = eachSymbols.length - 1; i >= 0; i--) {
        if (symbols.includes(eachSymbols[i]) || eachSymbols[i] === '%') {
            break;
        }
        lastNumber = eachSymbols[i] + lastNumber;
    }
    const lastNumLength = lastNumber.length;
    if(!lastNumber.includes('.')){
        lastNumber = lastNumber.split(',').join('');
        let newNumber = "";
        for(let i = lastNumber.length - 1; i >= 0; i--){
            newNumber = lastNumber[i] + newNumber;
            if((lastNumber.length - 3 - i) % 3 === 0 && i !== 0)
                newNumber = ',' + newNumber;
        }
        str = str.slice(0, str.length - lastNumLength) + newNumber;
    }else{
        if(lastNumber.split('.').length > 2)
            return original;
    }
    if(lastNumber[0] === '0' && lastNumber.length > 1 && lastNumber[1] !== '.'){
        if(lastNumber[1] === '0')
            return original;
        else
            return str.slice(0, str.length - lastNumLength) + lastNumber[1] + lastNumber.slice(2);
    }
    if(lastNumber === '.')
        return str.slice(0, str.length - lastNumLength) + '0.';

    if(symbols.includes(str[str.length - 1]) && symbols.includes(str[str.length - 2]))
        return str.slice(0, str.length - 2) + str[str.length - 1];
    return str;
}