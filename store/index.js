// eslint-disable-next-line no-unused-vars

import Vuex from 'vuex'
import axios from 'axios'



const store = () => new Vuex.Store({
    state: {
        response: {},                                                               //Ответ от сервера при логине
        info: null                                                                  //Ответ от сервера(данные о пользователе)
    },


    mutations: {
        SETLOGIN: (state, response) => {
            state.response = response
        },
        SETINFO: (state, info) => {
            state.info = info
        }
    },



    actions: {
        REGSWAGGER({}, userData) {                                                  //Регистрация нового пользователя
            return axios('https://api.av100.ru/v3/register',{
                method: "POST",
                headers: {
                    'X-Api-Key': "8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9",
                    'X-Device-OS': userData.login,
                },
                data: {
                    "login": userData.login,
                }
            })
                .then((response) => {
                    console.log(response)
                    return response
                })
                .catch(console.log('error'))
        },
        LOGINSWAGGER({commit}, userData) {                                          //Авторизация
            return axios('https://api.av100.ru/v3/login',{
                method: "POST",
                headers: {
                    'X-Api-Key': "8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9",
                    'X-Device-OS': userData.login,
                },
                data: {
                    "login": userData.login,
                    "password": userData.password,
                    "fromuser": 0
                }
            })
                .then((response) => {
                    commit('SETLOGIN', response)
                    return response
                })
                .catch(console.log('error'))
        },
        GETUSERINFO({commit}, userProps) {                                          //Получение информации о пользователе
            return axios('https://api.av100.ru/v3/user/' + userProps.userID ,{
                method: "GET",
                headers: {
                    'X-Api-Key': "8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9",
                    "X-User-Token": userProps.userToken,
                    'X-Device-OS': userProps.userDeviceOs,
                }
            })
                .then((info) => {
                    commit('SETINFO', info)
                    return info
                })
                .catch(console.log('error'))
        },
        PUTUSERINFO({}, userProps) {                                                //Изменение информации о пользователе(почты)
            return axios('https://api.av100.ru/v3/user/' + userProps.userID ,{
                method: "PUT",
                headers: {
                    'X-Api-Key': "8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9",
                    "X-User-Token": userProps.userToken,
                    'X-Device-OS': userProps.userDeviceOs,
                },
                data: {
                    "email": userProps.userEmail,
                }
            })
                .then((response) => {
                    console.log(response)
                    return response
                })
                .catch(console.log('error'))
        },
    },



    getters: {
        GETLOGINSTATUS(state) {                                                     //Получение информации о респонзе из стора при логине пользователя(в частности получаем код ответа)
            return state.response
        },
        GETUSERINFOFROMSTATE(state) {                                               //Получение информации о пользователе из стора
            return state.info
        }
    }
})

export default store
