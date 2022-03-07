// document.getElementById('button').addEventListener('click', loadData);

// function loadData() {
//   //Create an XHR Object
//   const xhr = new XMLHttpRequest();

//   //Open
//   xhr.open('GET', 'data.txt', true);

//   xhr.onload = function () {
//     if (this.status === 200) {
//       document.getElementById('output').innerHTML=`<h1>${this.responseText}</h1>`
//     }
//   };

//   xhr.send();
// }

document.getElementById('button1').addEventListener('click',loadCustomer);
document.getElementById('button2').addEventListener('click',loadCustomers);

function loadCustomer(e){
  const xhr = new XMLHttpRequest();
  xhr.open('GET','customer.json',true);

  xhr.onload = function(){
    if(this.status===200){
      const customer=JSON.parse(this.responseText);

      const output = `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.Phone}</li>
      </ul>
      `
      document.getElementById('customer').innerHTML=output;
    }
  }

  xhr.send()
}

//Load Customers ....
function loadCustomers(e){
  const xhr = new XMLHttpRequest();
  xhr.open('GET','customers.json',true);

  xhr.onload = function(){
    if(this.status===200){
      const customers=JSON.parse(this.responseText);

      let output=''

     customers.forEach((customer)=>{
       output+=
    `<ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.Phone}</li>
      </ul>
      `
      }) 
      document.getElementById('customers').innerHTML=output;
    }
  }

  xhr.send()
}

