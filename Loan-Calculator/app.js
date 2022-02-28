document.getElementById('loan-form').addEventListener('submit',function(e){
    //Hide results
    document.getElementById('results').style.display='none';
    document.getElementById('loading').style.display='block';
    
    setTimeout(calculateResults,2000);
    e.preventDefault()
});

function calculateResults(){
    console.log('Calculating ....');
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculateInterest = parseFloat(interest.value)/100/12;
    const calculatedPayments = parseFloat(years.value)*12;
    
    //Compute monthly payments

    const x = Math.pow(1+calculateInterest,calculatedPayments);
    const monthly = (principal*x*calculateInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly*calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly*calculatedPayments)-principal).toFixed(2);
        document.getElementById('results').style.display='block';
        document.getElementById('loading').style.display='none';
    }
    else{
        showErrors('Please check your numbers...')
    }
}

function showErrors(errorMsg){
    document.getElementById('results').style.display='none';
    document.getElementById('loading').style.display='none';
    //Create a div
    const errorDiv = document.createElement('div');

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading')

    errorDiv.className = 'alert alert-danger';

    errorDiv.appendChild(document.createTextNode(errorMsg));

    card.insertBefore(errorDiv,heading);

    //ClearError after 3 sec
    setTimeout(clearError,3000);
}

function clearError(){
    document.querySelector('.alert').remove();
}