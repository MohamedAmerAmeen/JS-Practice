"use strict";

const totalAmount = document.querySelector('.loanAmount')
const NumberOfYears = document.querySelector('.NumberOfYears')
const InterestRate = document.querySelector('.InterestRate')
const calcButton = document.querySelector('.calcButton')

calcButton.addEventListener('click', function(){
  const totalAm = Number(totalAmount.value)
  const noOfYears = Number(NumberOfYears.value)
  const bankInterest = Number(InterestRate.value)
  if(totalAmount && noOfYears && bankInterest){
     const monthlyPay = (((totalAm * bankInterest / 100) * noOfYears) + totalAm) / (noOfYears*12)
    swal({
      title: "Loan Inquiry!",
      text: `Your monthly paymeny will be ${monthlyPay}`,
      icon: "success",
      button: "Ok!",
    });
    totalAm = noOfYears = bankInterest = ""
  }else{
    swal({
      title: "Loan Inquiry!",
      text: `Please fill out all empty fields`,
      icon: "error",
      button: "Ok!",
    });
  }
})
