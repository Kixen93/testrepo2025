// line komment

/*
Több soros komment

*/

/*
*Adattípusok

*/
// string vagy karaakterlánc
//kiírás
console.log('fütyi');

//nagybetűssé alakítás

//reverse/megfordítás


//hozzáfűzés




//number

//kiírás
console.log(500);

//másik szám hozzáadása
//kivonás
//maradékos osztás

//boolean
console.log(true);
console.log(false);

// logikai és
//(boolean, boolean)=>boolean

//negálás0
//...

// undefined
console.log(undefined);
//null
console.log(null);

/*
Array(Tömb)
*/

// Array<_>
//array of ?

//Array<string>
console.log(["elso", "masodik", "harmadik"]);
//Array<number>
console.log([1, 2, 3]);

//szűrés
//sorba rendezés
//új elem hozzáadása
//agregálás

//index alapú kikérés
console.log([1, 2, 3][1]);

//nem javasolt
console.log([false, 2, "fasz"]);

//több dimenziósak

// Array<Array<number>>
console.log([[2,3],[4,5],[5,6]][1][1]);

/*
Object(objektum)
*/

//kulcs és értékpárok sorozata

console.log(
    {
        firstName: "József",
        lastName: "Kovács",
        age: 30
    }
);

//lookup, kulcs alapú kikérés


console.log(
    {
        firstName: "József",
        lastName: "Kovács",
        age: 30
    }.lastName
);


console.log(
    {
        firstName: "József",
        lastName: "Kovács",
        age: 30
    }['firstName']
);


console.log(
    {
        firstName: "József",
        lastName: "Kovács",
        age: 30,
        adress: {

            street: 'Rigó utca',
            number: 9,
            city: 'Budapest'


        }
    }.adress.street
);



console.log(
    {
        firstName: "József",
        lastName: "Kovács",
        age: 30,
        phone: ['06705031887','06709427877'],
        adress: {

            street: 'Rigó utca',
            number: 9,
            city: 'Budapest'


        }
    }.phone[0]
);

console.log(
    [
        {
            brand: "Apple",
            type: "Iphone 13 mini",
            price: 300000,
            provider: {
                country: 'HU',
                name: 'Vodafone'

            }
        },
        {
            brand: "Sony",
            type: "XPERIA I VII",
            price: 600000,
            provider: {
                country: 'HU',
                name: 'Vodafone'

            }
        },
        {
            brand: "Apple",
            type: "Iphone 16 Pro",
            price: 500000,
            provider: {
                country: 'HU',
                name: 'Vodafone'

            }
        },
        {
            brand: "Samsung",
            type: "Galaxy S25 Edge",
            price: 400000,
            provider: {
                country: 'HU',
                name: 'Telekom'

            }
        }    
    
    ]
);


//az első telefon neve

console.log(
    [
        {
            brand: "Apple",
            type: "Iphone 13 mini",
            price: 300000,
            provider: {
                country: 'HU',
                name: 'Vodafone'

            }
        },
        {
            brand: "Sony",
            type: "XPERIA I VII",
            price: 600000,
            provider: {
                country: 'HU',
                name: 'Vodafone'

            }
        },
        {
            brand: "Apple",
            type: "Iphone 16 Pro",
            price: 500000,
            provider: {
                country: 'HU',
                name: 'Vodafone'

            }
        },
        {
            brand: "Samsung",
            type: "Galaxy S25 Edge",
            price: 400000,
            provider: {
                country: 'HU',
                name: 'Telekom'

            }
        }    
    
    ][0].type
);

//az második telefon ára

console.log(
    [
        {
            brand: "Apple",
            type: "Iphone 13 mini",
            price: 300000,
            provider: {
                country: 'HU',
                name: 'Vodafone'

            }
        },
        {
            brand: "Sony",
            type: "XPERIA I VII",
            price: 600000,
            provider: {
                country: 'HU',
                name: 'Vodafone'

            }
        },
        {
            brand: "Apple",
            type: "Iphone 16 Pro",
            price: 500000,
            provider: {
                country: 'HU',
                name: 'Vodafone'

            }
        },
        {
            brand: "Samsung",
            type: "Galaxy S25 Edge",
            price: 400000,
            provider: {
                country: 'HU',
                name: 'Telekom'

            }
        }    
    
    ][1].price
);


//az harmadik telefon szolgáltatójának országa neve

console.log(
    [
        {
            brand: "Apple",
            type: "Iphone 13 mini",
            price: 300000,
            provider: {
                country: 'HU',
                name: 'Vodafone'

            }
        },
        {
            brand: "Sony",
            type: "XPERIA I VII",
            price: 600000,
            provider: {
                country: 'HU',
                name: 'Vodafone'

            }
        },
        {
            brand: "Apple",
            type: "Iphone 16 Pro",
            price: 500000,
            provider: {
                country: 'UK',
                name: 'Vodafone'

            }
        },
        {
            brand: "Samsung",
            type: "Galaxy S25 Edge",
            price: 400000,
            provider: {
                country: 'HU',
                name: 'Telekom'

            }
        }    
    
    ][2].provider.country
);











