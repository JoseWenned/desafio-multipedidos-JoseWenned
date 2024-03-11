import { users } from "./database.js";

function searchUser(arrayUser, valueSearch){

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const resultado = arrayUser.find(user => 
              Object.values(user).some(value => String(value).includes(valueSearch))
            );

            if(resultado){
                resolve(resultado);
            }else {
                reject("User not found.");
            }
            
        }, 1000);

    });

};

searchUser(users, "Pedro")
  .then(userFound => {
    console.log("Usuário encontrado:", userFound);
  })
  .catch(erro => {
    console.error(erro);
  });