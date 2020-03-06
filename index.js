const inquirer = require("inquirer");
const fs = require("fs");

function runInquirer() {
    const promptArray = [{
        type: "input",
        message: "What is your name?",
        name: "name"
    }, {
        type: "input",
        message: "What is your email?",
        name: "email"
    }, {
        type: "list",
        message: "What is your title",
        choices: ["Manager", "Engineer"],
        name: "title"
    }, {
        type: "input",
        message: "What is your github?",
        name: "github"
    }];

    return inquirer
        .prompt(promptArray);
}

 function jj() {
    let employeeArray = [];
    const x = 2;
    for (i = 0; i < x; i++) {
        const promise = new Promise(() => {
            runInquirer()
                .then(function({ name, id, email, title }) {

                    if (title === "Manager") {
                        runInquirerManager().then(function() {
                            this.employee = new Manager(name, id, email, github);
                            employeeArray.push(employee);
                        
                        });

                    } else if (title === "Engineer") {
                        runInquirerEngineer().then(function({ github }) {
                            this.employee = new Engineer(name, id, email, github);
                            employeeArray.push(employee);
                        });
                    } 
                }).catch(function(err) {
                    console.log("Error.");
                )};
        )});
    }
 const fs = require("fs");
    fs.writeFile('huh.html', html, function(err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
}
jj();

