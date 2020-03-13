namespace hospital {

    export class Pessoa {
        private nome : string;
        private cpf : string;

        constructor (nome:string, cpf:string){
            this.nome = nome;
            this.cpf = cpf;
        }
        
        getNome():string{
            return this.nome; 
        }
        setNome(nome:string):void{
            this.nome = nome;
        }

        getCpf():string{
            return this.cpf;
        }
        setCpf(cpf:string):void{
            this.cpf = cpf;
        }
    }
}