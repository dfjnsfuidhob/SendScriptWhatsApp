function enviarScript(scriptText){
    const lines = scriptText.split("\n"); 

    let i = 0;       

    setInterval(() => { 
        if(i >= lines.length) return

        if(lines[i].trim() != ''){ 
            console.log(lines[i]); 
    
            window.InputEvent = window.Event || window.InputEvent;
    
            const event = new InputEvent('input', { bubbles: true });
    
            const textbox = document.querySelector('#main div._13NKt');
    
            textbox.textContent = lines[i];
    
            textbox.dispatchEvent(event);
    
            document.querySelector("#main span[data-testid=send]").click();                   

        }
        i++;
    }, 250)
}

enviarScript(`SHREK

Teu passado é todo coberto de glória,
Dia a dia tu conquistas mais vitórias,

Tua bandeira alvinegra desfraudada,
Teu time em campo tem vitória assegurada,

Campeão da popularidade,
Tua torcida hoje é toda cidade,

É o grande povo a te estimular,
É o vovô Ceará vai ganhar,

És o time das grandes campanhas,
Sempre aqui ou lá fora tu ganhas,

Com teus craques em campo a brilhar,
Ceará tua glória é lutar
