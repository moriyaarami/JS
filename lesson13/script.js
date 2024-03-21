const tbody = document.querySelector('tbody');


for (const pro of products) {
    const tr = document.createElement('tr');
    finalPrice = pro.price - (pro.price * pro.discount / 100);
    tr.innerHTML = `
       <td>${pro.id}</td>
       <td>${pro.name}</td>
       <td>${pro.price}</td>
       <td>${pro.discount || 0}%</td>
       <td>${Math.round(finalPrice)}</td>
       <td>${pro.madeIn}</td>
       <td style= "background-color: ${pro.color}">${pro.color}</td>
       `;




    tbody.appendChild(tr);

    console.log(tr);

    /*  const td = document.createElement('td'); */

}