/**
 * @description formata no formato de moeda, de acordo com a localidade definida.
 * @param {number} value 
 * @param {string} local define a localidade da moeda. Por padrão, ela está definida para a moeda brasileira 🇧🇷
 * @returns {string} valor formatado
 */
export function formatCurrency(value, local='pt-br'){
    //lista de moedas
    const currencyList = {
        'pt-br': {
            style: 'currency', currency: 'BRL'
        },
        'en-US': {
            style: 'currency',
            currency: 'USD',
        }
    }

    const currency = currencyList[local];

    if(!currency){
        throw new Error('invalid local!');
    }

    return value.toLocaleString(local, currency);
}