namespace hospital{
    // medicos
    let m = new Medico ("Marcos Giomoto","123.456.789-10")
    m.setCodFuncionario(1);
    m.setCrm(232356);
    m.setEspecialidade('Clinica Geral');

    let m1 = new Medico("Marcia Giomoto","321.654.987-11");
    m1.setCodFuncionario(2);
    m1.setCrm(213265);
    m1.setEspecialidade('Pediatria');

    let m2 = new Medico("Vinicius Santos","556.897.852-21");
    m2.setCodFuncionario(3);
    m2.setCrm(985636);
    m2.setEspecialidade('Psiquiatria');

    //enfermeiros
    let e = new Enfermeiro('Maria do Socorro', '032.265.336-98');
    e.setCodFuncionario(4);
    e.setCoren(236564);

    let e1 = new Enfermeiro('Marcia Nardes', '024.987.235-12');
    e1.setCodFuncionario(5);
    e1.setCoren(235698);

    let e2 = new Enfermeiro('Vitor Martins', '253.696.987-99');
    e2.setCodFuncionario(6);
    e2.setCoren(254678);

    // pacientes
    let p = new Paciente('Jose Augusto', '032.265.567-77');
    p.setCodPaciente(1);
    

    let p1 = new Paciente('Denise Alencar', '024.456.987-88');
    p1.setCodPaciente(2);
    

    let p2 = new Paciente('Maria Aparecida','032.569.231-55');
    p2.setCodPaciente(3);

    //hospital
    let h = new Hospital();
    h.setNomeHospital("Hospital São Judas Tadeu");
    h.addMedico(m);
    h.addMedico(m1);
    h.addMedico(m2);
    h.addEnfermeiro(e);
    h.addEnfermeiro(e1);
    h.addEnfermeiro(e2);
    h.addPaciente(p);
    h.addPaciente(p1);
    h.addPaciente(p2);

    document.getElementById('h_nome').textContent 		 = h.getNomeHospital();

    let tbMedico = document.getElementById("tbMedico");

    h.getMedico().forEach(medico => {
        let html = "<tr><td> # "+medico.getCodFuncionario()+
        "</td><td>"+medico.getNome()+"</td><td>"+medico.getCpf()+
        "</td><td>"+medico.getEspecialidade()+"</td><td>"+medico.getCrm()+"</td></tr>";

        tbMedico.innerHTML += html;
    });

    let tbEnfermeiro = document.getElementById("tbEnfermeiro");
   
    h.getEnfermeiro().forEach(enfermeiro => {
        let html1 = "<tr><td> # "+enfermeiro.getCodFuncionario()+
        "</td><td>"+enfermeiro.getNome()+"</td><td>"+enfermeiro.getCpf()+
        "</td><td>"+enfermeiro.getCoren()+"</td></tr>";

        tbEnfermeiro.innerHTML += html1;
    });

    let tbPaciente = document.getElementById("tbPaciente");
   
    h.getPaciente().forEach(paciente => {
        let html1 = "<tr><td> # "+paciente.getCodPaciente()+
        "</td><td>"+paciente.getNome()+"</td><td>"+paciente.getCpf()+
        "</td>";

        tbPaciente.innerHTML += html1;
    });
}