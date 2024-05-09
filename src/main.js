const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const question = 'what is the weather'

const tellPromise = tell(question);

const welcomePromise = welcome();

welcome()
    .then((welcomeMessage) =>
        goodbye().then((goodbyeMessage) => `${welcomeMessage}\n${goodbyeMessage}`)
    )
    .then(console.log)
    .catch(console.error);

tellPromise
    .then((fortune) => {
        console.log(question)
        console.log(fortune)
    })
    .catch((error) => {
        console.log("Failure by design:",error);
    });

setTimeout(() => console.log(tellPromise), 500);