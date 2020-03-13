namespace hospital{

    export class Medico extends Funcinario{
        private crm: number|undefined;
        private especialidade: string|undefined;

        getCrm():number|undefined{
            return this.crm;
        }
        setCrm(crm:number):void{
            this.crm = crm;
        }
        getEspecialidade():string|undefined{
            return this.especialidade;
        }
        setEspecialidade(especialidade:string):void{
            this.especialidade = especialidade;
        }

    }
}