<template>
  <div>
    <!-- Если код ответа не 200, то компонент с формой логина/регистрации видна -->
    <loginFile  v-if="this.getLoginStatus != 200"></loginFile> 
    <div class="settings">
      <div class="settings-header">
        <p class="settings-header__title">Настройки</p>
      </div>
      <div class="settings-body">


        <div class="settings-body__option">
          <div class="settings-body__option-header">
            <p class="option-header__title">Звонок через SIP</p>
            <div class="option-header__switcher">
              <input type="checkbox" name="" id="" class="option-header__switcher-checkbox">
              <div class="option-header__switcher-newcheckbox"></div>
            </div>          
          </div>
          <div class="settings-body__option-body">
            <div class="option-body__content">
              <p class="option-body__content-title">Включите эту функцию чтобы Авито и другие площадки не блокировали ваш аккаунт. Будет выглядеть так, будто звонки совершаются с разных номеров.</p>
            </div>
          </div>
        </div>


        <div class="settings-body__option">
          <div class="settings-body__option-header">
            <p class="option-header__title">Учётная запись</p>
          </div>
          <div class="settings-body__option-body">
            <div class="option-body__content">
              <div class="option-body__content-block">
                <div class="content-block__title">
                  <p class="content-block__title-word">Компания</p>
                </div>
                <input v-if="this.GETUSERINFOFROMSTATE != null" type="text" class="content-block__input inputBlock"  readonly="readonly" v-bind:value="getUserInfoFromState.data.companyname">
              </div>
              <div class="option-body__content-block">
                <div class="content-block__title">
                  <p class="content-block__title-word">Логин</p>
                </div>
                <input v-if="this.GETUSERINFOFROMSTATE != null" type="text" class="content-block__input inputBlock"  readonly="readonly" v-bind:value="getUserInfoFromState.data.login">
              </div>
              <div class="option-body__content-block">
                <div class="content-block__title">
                  <p class="content-block__title-word">Номер телефона</p>
                </div>
                <input v-if="this.GETUSERINFOFROMSTATE != null" type="text" class="content-block__input inputBlock" v-model="getUserInfoFromState.data.phone">
              </div>
              <div class="option-body__content-block">
                <div class="content-block__title">
                  <p class="content-block__title-word">Имя</p>
                </div>
                <input v-if="this.GETUSERINFOFROMSTATE != null" type="text" class="content-block__input inputBlock" v-model="getUserInfoFromState.data.fname">
              </div>
              <div class="option-body__content-block">
                <div class="content-block__title">
                  <p class="content-block__title-word">Фамилия</p>
                </div>
                <input v-if="this.GETUSERINFOFROMSTATE != null" type="text" class="content-block__input inputBlock" v-model="getUserInfoFromState.data.sname">
                <div class="content-block__anotation">* Не обязательно</div>
              </div>
            </div>
          </div>
        </div>


        <div class="settings-body__option">
          <div class="settings-body__option-header">
            <p class="option-header__title">Оповещения о новых подборках</p>
          </div>
          <div class="settings-body__option-body">
            <div class="option-body__content">
              <p class="option-body__content-title">Выберите, куда будут приходить уведомления при появлении автомобилей, которые подходят под критерии вашей подборки.</p>
              <p class="option-body__content-descriptions">Уведомления</p>
              <div class="option-body__content-checkboxes firstcb">
                <div class="content-checkboxes__container">
                  <input type="radio" name="notifications" id="" class="content-checkboxes__checkbox offCB">
                  <div class="content-checkboxes__newcheckbox"></div>
                  <label for="Выкл.">Выкл</label>
                </div>
              </div>
              <div class="option-body__content-checkboxes">
                <div class="content-checkboxes__container">
                  <input disabled style="cursor: auto;" type="radio" name="notifications" id="" class="content-checkboxes__checkbox">
                  <div class="content-checkboxes__newcheckbox disableCB"></div>
                  <label for="Push" >Push</label>
                </div>
                <v-icon style="font-size: 16px; color: #ccc;" class="content-checkboxes__prompt" @mouseenter.stop="showPrompt($event)" @mouseleave.stop="closePrompt($event)">mdi-information</v-icon>
                <div class="promptBlock">
                  <span class="promptBlockText">Можно установить только в приложении</span>
                </div>
              </div>
              <div class="option-body__content-checkboxes">
                <div class="content-checkboxes__container">
                  <input type="radio" name="notifications" id="" class="content-checkboxes__checkbox emailCB">
                  <div class="content-checkboxes__newcheckbox"></div>
                  <label for="Email">Email</label>
                </div>
                <span v-if="this.GETUSERINFOFROMSTATE != null && this.showFormValue != true">{{ getUserInfoFromState.data.email }}</span>
                <input v-if="this.GETUSERINFOFROMSTATE != null" type="text" name="" id="" class="content-checkboxes__inputValue inputBlock" v-bind:style="{display: 'none'}" v-model="userEmail" placeholder="email">
                <v-icon style="font-size: 16px; color: #2dc574;" class="content-checkboxes__showInputvalue" @click="showForm($event)">mdi-pencil-outline</v-icon>
              </div>
              <div class="option-body__content-checkboxes">
                <div class="content-checkboxes__container">
                  <input type="radio" name="notifications" id="" class="content-checkboxes__checkbox tgCB">
                  <div class="content-checkboxes__newcheckbox"></div>
                  <label style="color:#2dc574; text-decoration: underline;" for="Telegram ID">Telegram ID</label>
                </div>
                <input type="text" name="" id="" class="content-checkboxes__inputValue inputBlock" v-bind:style="{display: 'none'}" placeholder="telegram ID" v-model="tg">
                <v-icon style="font-size: 16px; color: #2dc574;" class="content-checkboxes__showInputvalue" @click="showForm($event)">mdi-pencil-outline</v-icon>
              </div>
            </div>
          </div>
        </div>


        <div class="settings-body__option">
          <div class="settings-body__option-header">
            <p class="option-header__title">Переход в карточку</p>
          </div>
          <div class="settings-body__option-body">
            <div class="option-body__content">
              <p class="option-body__content-title">Выберите, каким образом будет открываться детальное представление выбранного вами транспорта.</p>
              <div class="option-body__content-checkboxes firstcb">
                <div class="content-checkboxes__container">
                  <input type="radio" name="cart" id="" class="content-checkboxes__checkbox localCardCB">
                  <div class="content-checkboxes__newcheckbox"></div>
                  <label for="В карточку в текущем окне">В карточку в текущем окне</label>
                </div>
              </div>
              <div class="option-body__content-checkboxes">
                <div class="content-checkboxes__container">
                  <input type="radio" name="cart" id="" class="content-checkboxes__checkbox separateCardCB">
                  <div class="content-checkboxes__newcheckbox"></div>
                  <label for="В карточку в отдельном окне">В карточку в отдельном окне</label>
                </div>
              </div>
              <div class="option-body__content-checkboxes">
                <div class="content-checkboxes__container">
                  <input type="radio" name="cart" id="" class="content-checkboxes__checkbox sourceCB">
                  <div class="content-checkboxes__newcheckbox"></div>
                  <label for="На источник">На источник</label>
                </div>
                <v-icon style="font-size: 16px; color: #ccc;" class="content-checkboxes__prompt" @mouseenter.stop="showPrompt($event)" @mouseleave.stop="closePrompt($event)">mdi-information</v-icon>
                <div class="promptBlock">
                  <span class="promptBlockText">Прямой переход в объявление на источнике</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div class="settings-body__option">
          <div class="settings-body__option-header">
            <p class="option-header__title">Прочие настройки</p>
          </div>
          <div class="settings-body__option-body">
            <div class="option-body__content">
              <div class="option-body__content-timeZone" v-bind:style="{overflow: openCloseSelectMenu ? 'visible' : 'hidden'}">
                <div class="content-timeZone__title">Часовой пояс</div>
                <div class="content-timeZone__select">
                  {{ selectedRegion }}
                  <v-icon style="font-size: 20px;" v-bind:style="{transform: openCloseSelectMenu ? 'rotate(180deg)' : 'rotate(0)'}" class="content-timeZone__select-oc" @click="openCloseSelectMenu = !openCloseSelectMenu">mdi-chevron-down</v-icon>
                  <div class="content-timeZone__select-regionsContainer">
                    <div class="content-timeZone__select-regions"
                      v-for="region in regions"
                      v-bind:key="region.regClass"
                      v-bind:class="region.regClass"
                      @click="selectZone($event.target), openCloseSelectMenu = !openCloseSelectMenu"
                      >{{ region.regValue }}
                      <v-icon style="font-size: 15px; opacity: 0;" class="content-timeZone__select-regionsSelected">mdi-check-outline</v-icon>
                    </div>
                  </div>
                </div>
              </div>
              <div class="option-body__content-checkboxes">
                <div class="content-checkboxes__container firstcb">
                  <input type="checkbox" name="" id="" class="content-checkboxes__checkbox autoRedCB">
                  <div class="content-checkboxes__newcheckbox tip">
                    <v-icon class="tipCB" style="font-size: 18px; color: white;">mdi-check</v-icon>
                  </div>
                  <label for="">Автоматически переходить к новым объявлениям</label>
                </div>
                <v-icon style="font-size: 16px; color: #ccc;" class="content-checkboxes__prompt" @mouseenter.stop="showPrompt($event)" @mouseleave.stop="closePrompt($event)">mdi-information</v-icon>
                <div class="promptBlock">
                  <span class="promptBlockText">Лента будет автоматически обновляться 1 раз в 3 секунды</span>
                </div>
              </div>
              <div class="option-body__content-checkboxes">
                <div class="content-checkboxes__container">
                  <input type="checkbox" name="" id="" class="content-checkboxes__checkbox colorsCB">
                  <div class="content-checkboxes__newcheckbox tip">
                    <v-icon class="tipCB" style="font-size: 18px; color: white;">mdi-check</v-icon>
                  </div>
                  <label for="">Включить цвета в ленте</label>
                </div>
                <v-icon style="font-size: 16px; color: #ccc;" class="content-checkboxes__prompt" @mouseenter.stop="showPrompt($event)" @mouseleave.stop="closePrompt($event)">mdi-information</v-icon>
                <div class="promptBlock">
                  <span class="promptBlockText">Включение зеленого/желтого цвета</span>
                </div>
              </div>
              <div class="option-body__content-saveBtn" @click="saveUserData(GETLOGINSTATUS)">Сохранить</div>
            </div>
          </div>
        </div>


        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import loginFile from '@/components/login-file.vue'
export default {
  name: 'IndexPage',
  components: {
    loginFile,
  },
  data() {
    return {
      tg: '',
      userEmail: '',
      showFormValue: false,
      openCloseSelectMenu: false,
      selectedRegion: 'Выберите регион',
      regions: [
        {regClass: 'klg', regValue: 'Калининград'},
        {regClass: 'msk', regValue: 'Москва'}, 
        {regClass: 'smr', regValue: 'Самара'},
        {regClass: 'ekb', regValue: 'Екатеринбург'},
        {regClass: 'omsk', regValue: 'Омск'},
        {regClass: 'krsk', regValue: 'Красноярск'},
        {regClass: 'irksk', regValue: 'Иркутск'},
        {regClass: 'iaksk', regValue: 'Якутск'},
        {regClass: 'vldvk', regValue: 'Владивосток'},
        {regClass: 'mgdn', regValue: 'Магадан'},
        {regClass: 'kmch', regValue: 'Камчатка'}
      ]
    }
  },
  computed: {
      ...mapGetters(['GETLOGINSTATUS', 'GETUSERINFOFROMSTATE']),  //GETLOGINSTATUS обращаемся в store.response, смотрим какой код ответа
      getLoginStatus() {                                          //Получаем статус ответа от сервера( если 200, то отрисовка компонента )
        if (this.GETLOGINSTATUS.status === 200) {
          this.getUserInfo(this.GETLOGINSTATUS)                   //Обращаемся к методу getUserInfo(263)
        }
        return this.GETLOGINSTATUS.status
      },
      getUserInfoFromState() {                                    //Получаем инфу о юзере из стора
        if ( this.GETUSERINFOFROMSTATE != null ) {
          return this.GETUSERINFOFROMSTATE
        }
      }
  },
  methods: {
    ...mapActions(['GETUSERINFO', 'PUTUSERINFO']),
    getUserInfo(loginStatus) {                                    //Вызываем экшн GETUSERINFO с параметрами userProps(269)
      let userProps = {
        userID: loginStatus.data.user.id,
        userToken: loginStatus.data.token,
        userDeviceOs: loginStatus.data.user.login
      }
      this.GETUSERINFO(userProps)
    },
    saveUserData(saveProps) {                                     //Сохраняем данные в localstorage(281) и отправляем данные о почте на сервер методом PUT
      let userProps = {
        userID: saveProps.data.user.id,
        userToken: saveProps.data.token,
        userDeviceOs: saveProps.data.user.login,
        userEmail: this.userEmail
      }
      this.PUTUSERINFO(userProps)
      this.saveToLocalStorage()
    },
    saveToLocalStorage() {                                        //Сохранение данных о выбранном городе и чекбоксах в ЛС
      let checkBoxesAndSelReg = {
        saveCBS: [],
        selectRegion: null
      }
      let cbs = document.querySelectorAll('.content-checkboxes__checkbox')
      let switcher = document.querySelector('.option-header__switcher-checkbox')
      let selectZones = document.querySelectorAll('.content-timeZone__select-regions')
      console.log(selectZones)
      console.log(cbs)
      selectZones.forEach((el) => {
        if (el.classList.contains('selectZone')) {
          let zoneClasses = el.classList.value.split(' ')
          zoneClasses.pop()
          zoneClasses.shift()
          zoneClasses.join(', ')
          checkBoxesAndSelReg.selectRegion = zoneClasses[0]
        }
      })
      if (switcher.checked) {
        checkBoxesAndSelReg.saveCBS.push(switcher.classList.value)
      }
      cbs.forEach((el) => {
        if (el.checked) {
          let activeCB = el.classList.value.split(' ')
          activeCB.shift()
          activeCB.join(', ')
          checkBoxesAndSelReg.saveCBS.push(activeCB[0])
        }
      })
      const parsed = JSON.stringify(checkBoxesAndSelReg)
      localStorage.setItem('cbsregs', parsed)
    },
    selectZone(eventTarget) {                                                                 //Получаем выбранный элемент, вешаем на него класс, чтобы он подсвечивался в списке 
      document.querySelectorAll('.content-timeZone__select-regions').forEach((el) => {
        el.classList.remove('selectZone')
        el.firstElementChild.style.opacity = '0'
      })
      let region = eventTarget
      this.selectedRegion = region.innerText
      region.classList.add('selectZone')
      region.firstElementChild.style.opacity = '1'
    },
    showForm($event) {                                                                        //Показывает инпут для редактирования почты
      this.userEmail = $event.target.previousElementSibling.previousElementSibling.innerHTML
      $event.target.previousElementSibling.style.display = 'block'
      $event.target.style.display = 'none'
      this.showFormValue = true
    },
    showPrompt($event) {                                                                      //Всплывающие
      $event.target.nextElementSibling.style.opacity = '1'
      $event.target.nextElementSibling.style.transform = 'translateY(10px)'
    },
    closePrompt($event) {
      $event.target.nextElementSibling.style.opacity = '0'
      $event.target.nextElementSibling.style.transform = 'translateY(0)'
    },                                                                                        //подсказки
    renderSavesCBs() {                                                                        //Получит из ЛС классы нажатых чекбоксов и выбранного города и установит их в активный режим
      if ( localStorage.getItem('cbsregs') ) {
      const lsProps = JSON.parse(localStorage.getItem('cbsregs'))
      if (lsProps.saveCBS.lenght != 0) {
        lsProps.saveCBS.forEach((el) => {
        let findCB = document.querySelector('.' + el)
        findCB.checked = true
        })
      }
      if (lsProps.selectRegion != null) {
        let selectZone = document.querySelector('.' + lsProps.selectRegion)
        this.selectZone(selectZone)
      }
    }
    }
  },
  mounted() {
    this.renderSavesCBs() //(337)
  }
}
</script>
