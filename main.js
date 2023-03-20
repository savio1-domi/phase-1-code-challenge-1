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

function calculateNetSalary() {
    // get user input for basic salary and benefits
    let basicSalary = parseFloat(document.getElementById("basicSalary").value);
    let benefits = parseFloat(document.getElementById("benefits").value);

    // calculate gross salary
    let grossSalary = basicSalary + benefits;

    // calculate payee (KRA)
    let KRA = 0;
    if (grossSalary <= 24000) {
    KRA = 0;
    } else if (grossSalary <= 40000) {
    KRA = (grossSalary - 24000) * 0.1;
    } else if (grossSalary <= 80000) {
    KRA = 1600 + (grossSalary - 40000) * 0.2;
    } else if (grossSalary <= 120000) {
    KRA = 9600 + (grossSalary - 80000) * 0.25;
    } else if (grossSalary <= 160000) {
    KRA = 21600 + (grossSalary - 120000) * 0.3;
    } else {
    KRA = 38400 + (grossSalary - 160000) * 0.35;
    }

    // calculate NHIF deductions
    let nhifDeductions = 0;
    if (grossSalary <= 5999) {
    nhifDeductions = 150;
    } else if (grossSalary <= 7999) {
    nhifDeductions = 300;
    } else if (grossSalary <= 11999) {
    nhifDeductions = 400;
    } else if (grossSalary <= 14999) {
    nhifDeductions = 500;
    } else if (grossSalary <= 19999) {
    nhifDeductions = 600;
    } else if (grossSalary <= 24999) {
    nhifDeductions = 750;
    } else if (grossSalary <= 29999) {
    nhifDeductions = 850;
    } else if (grossSalary <= 34999) {
    nhifDeductions = 900;
    } else if (grossSalary <= 39999) {
    nhifDeductions = 950;
    } else if (grossSalary <= 49999) {
    nhifDeductions = 1000;
    } else if (grossSalary <= 59999) {
    nhifDeductions = 1100;
    } else if (grossSalary <= 69999) {
    nhifDeductions = 1200;
    } else if (grossSalary <= 79999) {
    nhifDeductions = 1300;
    } else if (grossSalary <= 89999) {
    nhifDeductions = 1400;
    } else if (grossSalary <= 99999) {
    nhifDeductions = 1500;
    } else {
    nhifDeductions = 1700;
    }

    // calculate NSSF deductions
    let nssfDeductions = Math.min(grossSalary * 0.06, 2160);

    // calculate net salary
    let netSalary = grossSalary - KRA - nhifDeductions - nssfDeductions;

    // display results on page
    document.getElementById("grossSalary").innerHTML = `Gross Salary: KES ${grossSalary.toFixed(2)}`;
    document.getElementById("KRA").innerHTML = `Payee (KRA): KES ${KRA.toFixed(2)}`;
    document.getElementById("nhifDeductions").innerHTML = `NHIF Deductions: KES ${nhifDeductions.toFixed(2)}`;
    document.getElementById("nssfDeductions").innerHTML = `NSSF Deductions: KES ${nssfDeductions.toFixed(2)}`;
    document.getElementById("netSalary").innerHTML = `Net Salary: KES ${netSalary.toFixed(2)}`;
}