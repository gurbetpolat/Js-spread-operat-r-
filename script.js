/*********Spread Operatörü*********/

/* Objeyi yada diziyi yayma işlemidir. Spread operatörü ile iterable nesneleri tek tek öğelerine bölebiliyoruz diyede biliriz. Birden fazla spread kullanabiliriz*/


const user=["Emre","Buse","Mustafa","Şinasi"]


function getName(name1,name2,name3,name4){

    console.log(name1)
    console.log(name2)
    console.log(name3)
    console.log(name4)

}

getName(user[0],user[1],user[2])//Normal şartlarda bu şekilde çağırıyorduk.

getName(...user) //Spread operatörüyle bu şekilde yayama işlemi yaparakda çağırabiliriz.



const user_1={

    name:"Emre",
    surName:"Demir"

}

const newUser_1={
    ...user_1
}

newUser_1.surName="POLAT"


/* bu şekilde de tanımlayabiliriz 

const newUser_1={
    ...user_1

    newUser_1.surName="POLAT"
}




*/

console.log(user_1)

console.log(newUser_1)



/*--------------------------------*/
function request(opts={}){

    const options={
        error:true,
        success:true,
        ...opts
    }

    console.log(options)
}

request({
    error:false,
    success:false
})

/*-----------------------------------*/

const sayilar=[2,3,4,5,6]

console.log([1,...sayilar,7])


/*-----------------------------------*/


