var agenda=[];
var index;
class Contact{
    constructor(nume,telefon){
        this.nume=nume;
        this.telefon=telefon;
    }
}
function adauga_contact(){
    var l_nume=document.getElementById("nume_contact").value;
    var l_telefon=document.getElementById("telefon_contact").value;
    var l_c=new Contact(l_nume,l_telefon);
    agenda.push(l_c);

}
function display_contact(){
    var htmlContact= `
    <table>
        <tr>
            <th>Nume</th>
            <th>Telefon</th>
            <th></th>
            <th></th>
        </tr>
        
    </table> `;

for (var i=0;i<agenda.length;i++){
    htmlContact=htmlContact + `
    <tr>
    <td>${agenda[i].nume}</td>
    <td>${agenda[i].telefon}</td>
    <td>
    <button id="modifica" onclick="index=${i} ; displayContact()"> Modifica</button>
    </td>
    <td>
    <button id="sterge" onclick="index=${i}; displayContact()"> Sterge</button>
        </td>
    </tr> `;
}
    htmlContact=htmlContact + "<table>";
    document.getElementById("lista_wrapper").innerHTML=htmlContact;
}
function sterge(){
    agenda.splice(index,1); //se sterge o unitate din locatia index
}