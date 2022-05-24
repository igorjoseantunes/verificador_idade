function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) < 1920) {
        window.alert('[ERRO] verifique os dados e tente novamente.')
    } 
    
    else {
        var fsex = document.getElementsByName('checksex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        var par = document.createElement('p')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'assets/crianca-m.jpg')
            }
            else if (idade > 10 && idade <= 25) {
                img.setAttribute('src', 'assets/jovem-m.jpg')
            } else if (idade > 25 && idade <= 60) {
                img.setAttribute('src', 'assets/adulto-m.jpg')
            } 
            else {
                img.setAttribute('src', 'assets/idoso-m.jpg')
            }
        } 
        
        else {
            genero = 'Mulher'

            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'assets/crianca-f.jpg')
            }
            else if (idade > 10 && idade <= 25) {
                img.setAttribute('src', 'assets/jovem-f.jpg')
            }
            else if (idade > 25 && idade <= 60) {
                img.setAttribute('src', 'assets/adulto-f.jpg')
            }
            else  {
                img.setAttribute('src', 'assets/idoso-f.jpg')
            }

        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade.`
        res.appendChild(img)
        res.innerHTML += '"O que a memória ama fica eterno."'
        res.appendChild(par)
        par.innerHTML = '(Rubens Alves)'
    }
}