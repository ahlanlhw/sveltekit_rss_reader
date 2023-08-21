import { getData } from '$lib/server/data'
/** @type {import('./$types').PageServerLoad} */
export function load() {
    // const data = getData() 
    const obj = {'one': 'uno',
'two':'dos','three':'tres'}
    return {obj}
}
