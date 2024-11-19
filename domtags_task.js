
// // Create table with dom

// function fun(){
//     let username=prompt('enter username:-')
//     let ele=document.getElementsByTagName("p")
//     ele[0].innerHTML=`<h1>${username}</h1>`
// }


// let table=document.createElement("table")
// document.body.appendChild(table)
// let f_r=document.createElement("tr")
// table.appendChild(f_r)

// let th1=document.createElement("th")
// f_r.appendChild(th1)
// th1.innerText="s.no"
// let th2=document.createElement("th")
// f_r.appendChild(th2)
// th2.innerText="Name"


// table.style.border="2px solid black"
// th1.style.border="2px solid black"
// th2.style.border="2px solid black"
// table.style.fontSize="40px"

// let r1=document.createElement("tr")
// table.appendChild(r1)
// r1.innerHTML="<td>A1</td><td>Jani</td>"
// let r2=document.createElement("tr")
// table.appendChild(r2)
// r2.innerHTML="<td>A2</td><td>tuesday</td>"
// let r3=document.createElement("tr")
// table.appendChild(r3)
// r3.innerHTML="<td>A3</td><td>omesh</td>"
// let r4=document.createElement("tr")
// table.appendChild(r4)
// r4.innerHTML="<td>A4</td><td>naveen</td>"
// let r5=document.createElement("tr")
// table.appendChild(r5)
// r5.innerHTML="<td>A5</td><td>Rebel</td>"

// console.log(table)


// Method-2:-
function fun(){
    let user=prompt("enter user name:-")
    let p=document.getElementsByTagName("p")[0]
    p.innerText=`${user}`
    
}

let tab=document.createElement("table")
document.body.appendChild(tab)

tab.style.border="1px solid red"
tab.style.fontSize="20px"

let th1=document.createElement("th")
tab.appendChild(th1)
th1.innerText="s.no"
let th2=document.createElement("th")
tab.appendChild(th2)
th2.innerText="Name"
let th3=document.createElement("th")
tab.appendChild(th3)
th3.innerText="age"
let th4=document.createElement("th")
tab.appendChild(th4)
th4.innerText="gender"
let th5=document.createElement("th")
tab.appendChild(th5)
th5.innerText="city"


let arr=[1,2,3,4,5]
let name_arr=["Darling","salaar","sahoo","spirit","rebel"]
let ages=[20,21,22,23,24,25]
let gender=["M","F","M","M","F"]
let city=["Hitech-city","Amerpet","Kphb","JNTU","Kairathabad"]
for (i=0;i<arr.length;i++){
    let row=document.createElement("tr")
    tab.appendChild(row)
    let data=document.createElement("td")
    row.appendChild(data)
    data.innerText=arr[i]
    let data1=document.createElement("td")
    row.appendChild(data1)
    data1.innerText=name_arr[i]
    let age=document.createElement("td")
    row.appendChild(age)
    age.innerText=ages[i]
    let gen=document.createElement("td")
    row.appendChild(gen)
    gen.innerText=gender[i]
    let cy=document.createElement("td")
    row.appendChild(cy)
    cy.innerText=city[i]
}

console.log(tab)
