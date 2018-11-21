function headerFormat () {
  var imgHeight = $(".t-01").innerHeight();
  var paddingHeight = imgHeight * .436;
  var containerWidth = $(".container").innerWidth();
  var navBtnWidth = 0;
  $(".t-03").each(function(){
    navBtnWidth += $(this).innerWidth();
  });
  console.log(containerWidth - navBtnWidth);
  var navPaddingWidth = ((containerWidth - navBtnWidth) / (2*($(".t-03").length-1))) - 2;
  // navPaddingWidth += ((navPaddingWidth * 2) / $(".t-03").length);
  console.log(navPaddingWidth);
  $(".t-02").css("padding-top", paddingHeight);
  $(".t-03").css({paddingLeft: navPaddingWidth, paddingRight: navPaddingWidth});
}

function footerFormat() {
  var logoHeight = $(".t-24 img").innerHeight();
  var paddingHeight = logoHeight * .436;
  $(".t-28").css("padding-top", paddingHeight);
}

function calculateMortgage(loanAmount, interestRate, termYears, tax, insurance) {
  var i = interestRate / 1200;
  var n = termYears * 12;
  var payment = (loanAmount * ((i * Math.pow(1+i, n)) / (Math.pow(1+i, n) - 1)));
  if (Number.isInteger(tax)) {
    payment+=tax;
  }
  if (Number.isInteger(insurance)) {
    payment+=insurance;
  }
  console.log("Payment: " + payment);
  return payment;
}

function calculateTotalPaid(monthlyPayment, termYears) {
  return monthlyPayment * termYears * 12;
}

function interestPaid(totalPaid, loanAmount, tax, insurance) {
  return totalPaid - (loanAmount + tax + insurance);
}
