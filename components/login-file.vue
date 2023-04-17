<template>
    <div class="loginFile">
        <div v-if="!newAccount && findCookie"  class="loginFile-content">
            <div class="loginFile-content__title">Авторизация</div>
            <div class="loginFile-content__inputArea">
                <div class="loginFile-content__inputArea-login">
                    <span class="inputArea-login__title">Логин</span>
                    <input class="inputArea-login__input" type="text" placeholder="Введите Логин" v-model="userData.login">
                </div>
                <div class="loginFile-content__inputArea-password">
                    <span class="inputArea-password__title">Пароль</span>
                    <input class="inputArea-password__input" type="text" placeholder="Введите пароль" v-model="userData.password">
                </div>
            </div>
            <div class="loginFile-content__loginBtn" @click="sendUserData">Войти</div>
            <div class="loginFile-content__regBtn">Нет аккаунта? <span class="regBtn" @click="registration">Зарегистрироваться</span></div>
        </div>
        <div v-else-if="newAccount" class="loginFile-content">
            <div class="loginFile-content__title">Регистрация</div>
            <div class="loginFile-content__inputArea">
                <div class="loginFile-content__inputArea-login">
                    <span class="inputArea-login__title">Телефон</span>
                    <input class="inputArea-login__input" type="text" placeholder="Введите Логин" v-model="userData.login">
                </div>
            </div>
            <div class="loginFile-content__loginBtn" @click="sendUserDataReg">Отправить</div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: 'loginFile',
        data() {
            return {
                findCookie: false,
                newAccount: false,
                userData: {
                    login: "",
                    password: ""
                },
            }
        },
        methods: {
            ...mapActions(['LOGINSWAGGER', 'REGSWAGGER']),
            registration() {
                this.newAccount = true
            },
            sendUserData() {
                document.cookie = `login = ${this.userData.login}; max-age = 3600`                  //Сохранение логина и пароля в куки на час
                document.cookie = `password = ${this.userData.password}; max-age = 3600`
                this.LOGINSWAGGER(this.userData)
            },
            sendUserDataReg() {
                this.REGSWAGGER(this.userData)
                this.newAccount = false
            },
            //Если в куках есть пароль и логин, то в ход произодёт автоматически
            returnedUser() {
                if ( document.cookie.replace(/(?:(?:^|.*;\s*)login\s*\=\s*([^;]*).*$)|^.*$/, "$1") && document.cookie.replace(/(?:(?:^|.*;\s*)password\s*\=\s*([^;]*).*$)|^.*$/, "$1") ) {
                    let cookieUserData = {
                        login: document.cookie.replace(/(?:(?:^|.*;\s*)login\s*\=\s*([^;]*).*$)|^.*$/, "$1"),
                        password: document.cookie.replace(/(?:(?:^|.*;\s*)password\s*\=\s*([^;]*).*$)|^.*$/, "$1")
                    }
                    this.LOGINSWAGGER(cookieUserData)
                }
                else {
                    this.findCookie = true
                }
            }
        },
        mounted() {
            this.returnedUser()
        }
    }
</script>