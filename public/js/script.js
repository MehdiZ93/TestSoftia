fetch("http://localhost:3000/student/all").then(response => {
    return response.json();
}).then(data => {
    let res = "<option value=''> -- Select a name --</option>";
    data.forEach(element => {
        res += `<option value=${element.id}>${element.nom} ${element.prenom}</option>`
    })
    document.getElementById('name').innerHTML = res;
}).catch(err => {
    // Do something for an error here
});
let conv = null;
document.getElementById('name').addEventListener('change', () => {
    const id = document.getElementById('name').value;
    console.log(id);
    fetch(`http://localhost:3000/convention/${id}`).then(response => {
        return response.json();
    }).then(data => {
        conv = data;
        document.getElementById('convention').value = data[0].id;
        document.getElementById('conventionId').value = data[0].id;
        fetch(`http://localhost:3000/student/${id}`).then(response => {
            return response.json();
        }).then(data => {
            document.getElementById('message').value =
                `Bonjour ${data[0].nom} ${data[0].prenom},

Vous avez suivi ${conv[0].nbHeure} de formation chez FormationPlus.
Pouvez-vous nous retourner ce mail avec la pièce jointe signée.

Cordialement,
FormationPlus`;
        }).catch(err => {
            // Do something for an error here
        });
    }).catch(err => {
        // Do something for an error here
    });
});
