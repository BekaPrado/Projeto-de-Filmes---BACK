/***************************************************************************************************************************
 * OBJETIVO: Arquivo de configurações para padronizar mensagens e status codes da API
 * DATA: 18/02/2025
 * AUTOR: Rebeka 
 * Versão: 1.0
 **************************************************************************************************************************/

/****************************************** STATUS CODE DE MENSAGENS DE ERRO **********************************************/
const ERROR_REQUIRED_FIELDS = {status: false , status_code: 400, message: "Não foi possivel realzar a requisição, pois existem campos obrigatórios que não foram preenchidos ou não atendem a quantidade de caracteres!!!"}
//Padronizando const
const ERROR_INTERNAL_SERVER = {status: false, status_code: 500, message: "Devido a erros internos no servidor, não foi possível processar a requisição"}


/******************************************STATUS CODE DE MENSAGENS DE SUCESSO*********************************************/
const SUCESS_CREATED_ITEM = {status: true, status_code: 201, message: "Item criada com sucesso!!!"}


module.exports = {
    ERROR_REQUIRED_FIELDS,
    ERROR_INTERNAL_SERVER,
    SUCESS_CREATED_ITEM
}

