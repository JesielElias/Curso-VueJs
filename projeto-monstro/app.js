new Vue({
    el: '#app',
    data:{
        running: false,            
        playerLife: 100,
        monsterLife: 100,  
        logs: []       
    },
    computed: {
        hasResult(){
            return this.playerLife <= 0 || this.monsterLife <= 0
        }
    },
    methods: {
        attack(playerAttack, monsterAttack) {
            if (!this.hasResult){
                this.playerLife -= monsterAttack;
                if (monsterAttack > 0)
                    this.registerLog(`O monstro atingiu o jogador causando ${monsterAttack} de dano`, 'monster');
                this.monsterLife -= playerAttack;
                if (playerAttack > 0)
                    this.registerLog(`O jogador atingiu o monstro causando ${playerAttack} de dano`, 'player');
                this.playerLife = this.playerLife < 0 ? 0 : this.playerLife;
                this.monsterLife = this.monsterLife < 0 ? 0 : this.monsterLife;
                console.log(this.logs[0]);
            }
        },
        specialAttack(){
            this.attack(12, 10)
        },
        simpleAttack(){
            this.attack(8, 10)
        },
        quit(){
            this.running = false
            
        },
        heal(){
            if (this.playerLife < 100 ){
                this.playerLife += 12;
                this.registerLog(`O jogador se curou em 12 pontos`, 'playerHeal');                
                this.playerLife = this.playerLife > 100 ? 100 : this.playerLife;                                     
            }
                   
            this.attack(0, 10);
        },
        newGame(){
            this.running = true;
            this.playerLife = 100;
            this.monsterLife = 100;
        },
        registerLog(text, cls){
            this.logs.unshift({text, cls})
        }
    },
    watched: {

    }
})