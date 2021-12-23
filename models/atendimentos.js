const moment = require('moment')

const conexao = require('../infraestrutura/conexao')


class Atendimento {

    adiciona(atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        
        const dataValida = moment(data).isSameOrAfter(dataCriacao)

        const validacao = [
            {nome : 'data',
            valido: dataValida,
            mensagem: 'A data do atendimento deve ser igual ou após a data atual'
        }
        ]

        const erros = validacao.filter(campo => !campo.valido)

       
        if(dataValida === false ){
            res.status(400).json(erros)
        }
        else{
            const atendimentoDatado = {...atendimento,dataCriacao, data}
            const sql = 'INSERT INTO Atendimentos SET ?'
    
            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
                if(erro){
                    res.status(400).json(erro)
                }
                else {
                    res.status(201).json(atendimento)
                }
            })
        }

       

    }

    lista(res){
        const sql = 'SELECT * FROM Atendimentos'

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }
            else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`
        console.log(`${id}`)

        conexao.query(sql, (erro, resultados) =>{
            if(erro){
                res.status(400).json(erro)
            }
            else {
                res.status(200).json(resultados)
            }
        })

    }

    altera(id, valores ,res) {
        if(valores.data){
             valores.data =  moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')

        }
        const sql = 'UPDATE Atendimentos SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }
            else{
                res.status(200).json({...valores,id})
            }
            
        })

    }

    deleta(id, res){
        const sql = 'DELETE FROM Atendimentos WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }
            else{
                res.status(200).json(id)
            }
        }
        )
    }
}

module.exports = new Atendimento