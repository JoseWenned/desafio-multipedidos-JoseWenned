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
                <h2 class="user-name">Nome: ${userFound.name}</h2>
                <p class="user-age">Age: ${userFound.age}</p>
                <p class="user-email">E-mail: ${userFound.email}</p>
            `;
            console.log(userFound, "User found succesusfully.")
        })
        .catch(erro => {
            const resultElement = document.getElementById("result-user");
            resultElement.innerHTML = `
                <p>${erro}</p>
            `;
            console.error(erro)
        });
}