// Student Grade Generator

function generateGrade() {
    // get the input value
    const marks = document.getElementById("marks").value;

    // calculate the grade based on the marks
    let grade;
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60 && marks <= 79) {
        grade = "B";
    } else if (marks >= 50 && marks <= 59) {
        grade = "C";
    } else if (marks >= 40 && marks <= 49) {
    grade = "D";
    } else {
        grade = "E";
    }

    // show the result
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `The student's grade is: ${grade}`;
}


// Speed Detector

function detectSpeed() {
    // get the input value
    const speed = document.getElementById("speed").value;

    // calculate the demerit points based on the speed
    let demeritPoints = 0;
    if (speed > 70) {
      demeritPoints = Math.floor((speed - 70) / 5);
    }

    // show the result
    const resultElement = document.getElementById("product");
    if (demeritPoints > 12) {
      resultElement.innerHTML = "License suspended";
    } else if (demeritPoints > 0) {
      resultElement.innerHTML = `Points: ${demeritPoints}`;
    } else {
      resultElement.innerHTML = "YES";
    }
}

// Net Salary Calculator

window.addEventListener('load', ()=>{
    // Global variables 
    const calculateBtn = document.getElementById('calculate')
    const netSalaryInput = document.getElementById('netInput')
    const monthlyPeriod = document.getElementById('monthly')
    const annuallyPeriod = document.getElementById('annually')
    
    let grossSalaryDisplay = document.getElementById('grossResult')
    const kraDisplay = document.getElementById('kra')
    const nssfDisplay = document.getElementById('nssf')

    const income = []
    const personalRelief = 28800
    
    // Saving the amount into the income array 
    netSalaryInput.addEventListener('input', ()=>{
        const incomeSalary = netSalaryInput.value
        income.push(incomeSalary)
        return income
    })

    //Things to be done when the button is clicked
    calculateBtn.addEventListener('click', ()=>{
        // cheking payment period
        if(annuallyPeriod.checked == true && monthlyPeriod.checked == true){
            alert("Both monthly and annually can't be checked")
            return
        }

        // When monthly is checked, it multiplies the amount entered by 12
        if (monthlyPeriod.checked == true){
            //makes the annually section to be readonly
            document.getElementById('annually').disabled = true;
            let monthlyIncome = (income.slice(-1))
            let monthlySalary = (monthlyIncome.map(Number) * 12)

            /* Returns an alert when the user has not entered an amout
            or when the user enters a value less than 288000*/
            if(monthlySalary < 288000){
                alert(`${monthlySalary} is not applicable to taxation`)
            }
            /* Calculates both gross salry, nssf, nhif when the amount entered
            is between 288000 and 388000 */
            if(monthlySalary < 388000){
                const kraRate = (0.10 * monthlySalary)
                const nssfRate = (0.06 * monthlySalary)
                const grossIncome = (monthlySalary + personalRelief - nssfRate - kraRate)
                grossSalaryDisplay.textContent = grossIncome
                kraDisplay.textContent = kraRate
                nssfDisplay.innerText = nssfRate
            }
            /* Calculates both gross salry, nssf, nhif when the amount entered
            is over 388000 */
            if(monthlySalary > 388000){
                const kraRate = (0.30 * monthlySalary)
                const nssfRate = (0.06 * monthlySalary)
                const grossIncome = (monthlySalary + personalRelief - nssfRate - kraRate)
                grossSalaryDisplay.textContent = grossIncome
                kraDisplay.textContent = kraRate
                nssfDisplay.innerText = nssfRate
            }
        }
        // Performs several functions when annually is checked
        if(annuallyPeriod.checked == true){
            document.getElementById('monthly').disabled = true;
            let anuallyIncome = income.slice(-1)
            let annualySalary = (anuallyIncome.map(Number) * 1)

            /* Returns an alert when the user has not entered an amout
            or when the user enters a value less than 288000*/
            if(annualySalary < 288000){
                alert(`${annualySalary} is not applicable to taxation`)
            }

            /* Calculates both gross salary, nssf, nhif when the amount entered
            is between 288000 and 388000 */
            if(annualySalary > 288000 && annualySalary < 388000){
                const kraRate = (0.10 * annualySalary)
                const nssfRate = (0.06 * annualySalary)
                const grossIncome = (annualySalary + personalRelief - nssfRate - kraRate)
                grossSalaryDisplay.textContent = grossIncome
                kraDisplay.textContent = kraRate
                nssfDisplay.innerText = nssfRate
            }
            
            /* Calculates both gross salary, nssf, nhif when the amount entered
            is above 388000 */
            if(annualySalary > 388000){
                const kraRate = (0.30 * annualySalary)
                const nssfRate = (0.06 * annualySalary)
                const grossIncome = (annualySalary + personalRelief - nssfRate - kraRate)
                grossSalaryDisplay.textContent = grossIncome
                kraDisplay.textContent = kraRate
                nssfDisplay.innerText = nssfRate
            }
        }
    })
})