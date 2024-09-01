/**
 * description formata no formato de moeda, de acordo com a localidade definida.
 * param {number} value 
 * param {string} local define a localidade da moeda. Por padrão, ela está definida para a moeda brasileira 🇧🇷
 * returns {string} valor formatado
 */

export function formatCurrency(value:number, local:string='pt-br'){
    //lista de moedas
    const currencyList = {
        'pt-br': 'BRL',
        'en-US': 'USD'
    }
    type ObjectKey = keyof typeof currencyList;

    const localKey = local as ObjectKey;

    const currency = currencyList[localKey];

    if(!currency){
        throw new Error('invalid local!');
    }

    return value.toLocaleString(local, {
        style: 'currency',
        currency: currency,
    });
}