namespace hospital{
    
    export class Hospital{
        private nomeHospital: string;
        private enfermeiros: Array<Enfermeiro> = [];
        private medicos: Array<Medico> = [];
        private pacientes: Array<Paciente> = [];

        getNomeHospital():string|undefined{
            return this.nomeHospital;
        }
        setNomeHospital(nomeHospital:string):void{
            this.nomeHospital = nomeHospital;
        }

        addEnfermeiro(enfermeiro:Enfermeiro):void{
            this.enfermeiros.push(enfermeiro);
        }
        getEnfermeiro(){
            return this.enfermeiros;
        }

        addMedico(medico:Medico):void{
            this.medicos.push(medico);
        }
        getMedico(){
            return this.medicos;
        }

        addPaciente(paciente:Paciente):void{
            this.pacientes.push(paciente);
        }
        getPaciente(){
            return this.pacientes;
        }
    }
}