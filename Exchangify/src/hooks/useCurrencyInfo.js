import { useEffect, useState } from "react";
function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res)=> res.json())//As the api giving the data is visible in json but its type is string thus converting it to string
        .then((res)=> setData[res[currency]])//For getting key and value from json as it has mainly wo firstly values as date then target currency(that consistes of all values in it)
    },[currency])
    console.log(data)
    return data;
}
export default useCurrencyInfo