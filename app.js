/***************************************************************************************************************************
 * OBJETIVO: Criar uma API para realizar o CRUD do sistema de controle de Filmes
 * DATA: 11/02/2025
 * AUTOR: Rebeka 
 * Versão: 1.0
 * Observação: 
 *          Para criar a API precisamos instalar: 
 *                 express             npm install express --save
 *                 cors                npm install cors --save 
 *                 body-parser         npm install body-parser --save
 * 
 *          Para criar a integração com o Banco de Dados precisamos instalar:
 *                 prisma               npm install prisma -save(para fazer a conexão com o BD)
 *                 prisma/client        npm install @prisma/client --save (para rodar os scripts SQL)
 *                                                  
 **************************************************************************************************************************/


/*
    Para criar uma API devemos instalar:
     express - npm install expres --save                 (Serve para criar a API)
     cors - npm install express --save                   (Serve para as premissões da API)
     body-parser - npm install body-parser --save        (Serve paara a API receber dados na requisição*/ 



     const express        = require('express')
     const cors           = require('cors')
     const bodyParser     = require('body-parser')
     
     
     //Inicia a utilização do express
     const app = express()
     
     //response - Significa a resposta da API
     //request - Significa a chegada de dados na API
     
     app.use((request, response, next) =>{
         //Permissõe de onde virão as requisições na API
         // * - fica liberado para qualquer máquina ou colocar o IP 
         // da maquina que vai realizar as requisições
         response.header('Access-Control-Allow-Origin', '*')
     
         //Permissão de quais metodos a API irá responder - CORS CUIDA DESSAS PERMISSÕES ---VERBOS HTTP
             //get - pegar dados da API na tela
             //post - inserir ovos itens e salvar 
             //put - alterar dados existentes na api
             //delete - excluir item existente na API
         response.header('Access-Control-Allow-Methods', 'GET')
     
         app.use(cors()) //Aplica/ATIVA as restrições do CORS da requisição
     
         next()
     })
     
    
const funcoes = require('./modulo/funcoes');

//---------------------------------------------------------------------------------------------------

//get atualizarFilme

app.post('', async function (request, response) )