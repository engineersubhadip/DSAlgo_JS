const products = [
    { name: 'Laptop', price: 1200, quantity: 30 },
    { name: 'Phone', price: 800, quantity: 50 },
    { name: 'Tablet', price: 600, quantity: 20 },
    { name: 'App', price: 600, quantity: 120 },
    { name: 'Apple', price: 900, quantity: 15 }
  ];



function sortProducts(arr,parameter,order)
{
    let newArr = [];
    newArr = arr.map(function(a){return a});
    
    if (parameter === "price")
    {
        if (order === "asc")
        {  
            newArr.sort(function(a,b){
                let price1 = a.price;
                let price2 = b.price;

                if (price1 <= price2)
                {
                    return -1;
                }
                return 1;
            });

            return newArr;
        }
        else if (order === "desc")
        {
            newArr.sort(function(a,b){
                let price1 = a.price;
                let price2 = b.price;

                if (price1 >= price2)
                {
                    return -1;
                }
                return 1;
            });
            return newArr;
        }
        else
        {
            return "Enter correct Order or the Order Parameter is missing...";
        }
    }
    else if (parameter === "name")
    {
        if (order === "asc")
        {
            newArr.sort(function(a,b){
                let name1 = a.name;
                let name2 = b.name;

                let minName = undefined;
                let maxName = undefined;

                if (name1.length <= name2.length)
                {
                    minName = name1;
                    maxName = name2;
                }
                else
                {
                    minName = name2;
                    maxName = name1;
                }

                for (let i=0; i<minName.length; i++)
                {
                    let letter1 = minName[i];
                    let letter2 = maxName[i];
                    
                    let asciiLetter1 = letter1.charCodeAt(0);
                    let asciiLetter2 = letter2.charCodeAt(0);

                    if (asciiLetter1 < asciiLetter2)
                    {
                        if (name1 === minName)
                        {
                            return -1;
                        }
                        return 1;
                    }
                    else if (asciiLetter2 < asciiLetter1)
                    {
                        if (name1 === maxName)
                        {
                            return -1;
                        }
                        return 1;
                    }
                }

                if (name1 === minName)
                {
                    return -1;
                }
                else if (name2 === minName)
                {
                    return 1;
                }
            });

            return newArr;
        }
        else if (order === "desc")
        {
            newArr.sort(function(a,b){
                let name1 = a.name;
                let name2 = b.name;

                let minName = undefined;
                let maxName = undefined;

                if (name1.length <= name2.length)
                {
                    minName = name1;
                    maxName = name2;
                }
                else
                {
                    minName = name2;
                    maxName = name1;
                }

                for (let i=0; i<minName.length; i++)
                {
                    let letter1 = minName[i];
                    let letter2 = maxName[i];
                    
                    let asciiLetter1 = letter1.charCodeAt(0);
                    let asciiLetter2 = letter2.charCodeAt(0);

                    if (asciiLetter1 > asciiLetter2)
                    {
                        if (name1 === minName)
                        {
                            return -1;
                        }
                        return 1;
                    }
                    else if (asciiLetter2 > asciiLetter1)
                    {
                        if (name1 === maxName)
                        {
                            return -1;
                        }
                        return 1;
                    }
                }

                if (name1 === maxName)
                {
                    return -1;
                }
                else if (name2 === maxName)
                {
                    return 1;
                }
            });  
            
            return newArr;
        }
        else
        {
            return "Enter correct Order or the Order Parameter is missing...";
        }
    }
    else if (parameter === "quantity")
    {
        if (order === "asc")
        {
            newArr.sort(function(a,b){
                let q1 = a.quantity;
                let q2 = b.quantity;

                if (q1 <= q2)
                {
                    return -1;
                }
                return 1;
            });

            return newArr;
        }
        else if (order === "desc")
        {
            newArr.sort(function(a,b){
                let q1 = a.quantity;
                let q2 = b.quantity;

                if (q1 >= q2)
                {
                    return -1;
                }
                return 1;
            });

            return newArr;
        }
        else
        {
            return "Enter correct Order or the Order Parameter is missing...";
        }
    }
    else
    {
        return "Key not found";
    }
}

let ans = sortProducts(products,"quantity","xyx");

console.log(ans);
