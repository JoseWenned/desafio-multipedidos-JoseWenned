import { users } from "./database.js";

function searchUser( arrayUser, valueSearch ){

    return new Promise(( resolve, reject ) => {

        setTimeout(() => {

            const result = arrayUser.find(user => 
              Object.values( user ).some(value => String( value ).includes( valueSearch ))
            );

            if( result ){
                resolve( result );
            }else {
                reject( "User not found." );
            }

        }, 1000);

    });

};

const value = "" // Search here for user to be printed on screen.

if(value.trim() !== "") {
    searchUser( users, value) 
        .then(userFound => {
            const resultElement = document.getElementById("result-user");
            resultElement.innerHTML = `
                <h2>Nome: ${userFound.name}</h2>
                <p>Nome: ${userFound.age}</p>
                <p>Nome: ${userFound.email}</p>
            `;
        })
        .catch(erro => {
            const resultElement = document.getElementById("result-user");
            resultElement.innerHTML = `
                <p>${erro}</p>
            `;
        });
}