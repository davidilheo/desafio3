
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'mago':
          ataque = 'magia';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
          case 'caçador':
          ataque = 'arco';
          break;
        default:
          ataque = 'usou as mãos';
      }
  
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  const heroiMago = new Heroi('Phasmatus', 230, 'mago');
  const heroiGuerreiro = new Heroi('Trevor', 30, 'guerreiro');
  const heroiMonge = new Heroi('Kratos', 25, 'monge');
  const heroiNinja = new Heroi('Hanzo', 19, 'ninja');
  const heroiCacador = new Heroi('Ranger', 35, 'caçador');
  
  heroiMago.atacar();       
  heroiGuerreiro.atacar(); 
  heroiMonge.atacar();
  heroiNinja.atacar();  
  heroiCacador.atacar();