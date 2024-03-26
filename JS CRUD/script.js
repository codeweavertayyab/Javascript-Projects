
function handleSubmit() {
    let stdid = document.getElementById("idfield").value;
    let stdname = document.getElementById("namefield").value;
    let stdage = document.getElementById("agefield").value;
    let stdemail = document.getElementById("emailfield").value;
    let stdphone = document.getElementById("numfield").value;
    if (stdid == '' && stdname == '' && stdage == '' && stdemail == '' && stdphone == '') {
        let alertbody = document.querySelector('section');
        let rrow = document.createElement('div');
        rrow.innerHTML = `
        
        <div class="alert alert-danger alert-dismissible fade show" id="myalert" role="alert">
         <strong>Incomplete Or False Information!</strong> 
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        alertbody.appendChild(rrow);
        
    }
    else {
        let student ={
            id:stdid,
            name:stdname,
            age:stdage,
            email:stdemail,
            phone:stdphone
        }
        let studentData = localStorage.getItem('studentData') ?
            JSON.parse(localStorage.getItem('studentData')) : [];
        studentData.push(student);

        localStorage.setItem('studentData', JSON.stringify(studentData));





        const inputs = document.querySelectorAll('#idfield, #namefield, #agefield, #emailfield, #numfield');

        inputs.forEach(input => {
            input.value = '';
        });
        let alertbody = document.querySelector('section');
        let rrow = document.createElement('div');
        rrow.innerHTML = `
        
        <div class="alert alert-success alert-dismissible fade show" id="myalert" role="alert">
         <strong>Student Added Successfully!</strong> 
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div> 
        `;
        
        alertbody.appendChild(rrow);

    }



}
function handleCollect() {
    let studentData = JSON.parse(localStorage.getItem('studentData'));
    let tablebody = document.querySelector('tbody');
    tablebody.innerHTML = '';

    if (studentData && studentData.length > 0) {
        studentData.forEach(student => {
            let row = document.createElement('tr');
            row.innerHTML = `
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.email}</td>
        <td>${student.phone}</td>
        <td><button class="btn btn-danger" onclick="handleDelete()">DELETE</button></td>
        `;
            tablebody.appendChild(row)
        })
    }


}
function handleDelete(){
    
}