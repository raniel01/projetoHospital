namespace hospital {
    
    export class Funcinario extends Pessoa{
        private codFuncionario: number|undefined;

        getCodFuncionario():number|undefined{
            return this.codFuncionario;
        }
        setCodFuncionario(codFuncionario:number):void{
            this.codFuncionario = codFuncionario;
        }
    } 
}