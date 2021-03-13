<template>
  <div
    @click="popupClickEvent($event)"
    class="contact-modal"
    :class="{ 'contact-modal--open': modalOpen }"
  >
    <div class="contact-modal__popup" v-if="modalOpen">
      <div class="contact-modal__bar">
        <img
          @click="toggleContactModal"
          class="contact-modal__bar__icon"
          src="@/assets/icons/close_orange.svg"
          width="18px"
          height="18px"
        >
      </div>
      <div class="contact-modal__content">
        <h2 class="contact-modal__content__heading">Question or topic you want us to cover?</h2>
        <textarea
          v-model="message"
          class="contact-modal__content__textarea mb-6"
          name="message"
          id="contact-modal-message"
          label="contact-modal-message"
          placeholder="Type here and leave us a message, then click send to get in touch!"
          cols="100"
          rows="8"
        />
        <button @click="send" class="contact-modal__content__button">
          {{ this.sending ? 'Sending...' : 'Send' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ContactModal',
  data () {
    return {
      message: '',
      error: '',
      sending: false,
      sent: false
    }
  },
  computed: {
    ...mapState({
      modalOpen: state => state.modals.contactModalOpen
    })
  },
  methods: {
    ...mapActions([ 'toggleContactModal' ]),
    popupClickEvent(event) {
      if (event.target.classList.contains('contact-modal')) {
        this.toggleContactModal()
      }
    },
    async send() {
      try {
        // e.preventDefault()
        this.sending = true
        await emailjs.send(process.env.VUE_APP_EMAIL_SERVICE, process.env.VUE_APP_EMAIL_TEMPLATE, { name: 'Nick', email: 'Nick@Nick.com', message: this.message }, process.env.VUE_APP_EMAIL_USER)
        this.sent = true
        this.sending = false
        this.message = ''
      } catch (error) {
        this.sending = false
        this.error = error
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 0;
  opacity: 0;
  width: 100%;
  z-index: 99;
  background: rgba(33, 33, 33, 0.6);
  transition: opacity 0.4s ease-in;
  &--open {
    height: 100%;
    opacity: 1;
  }
  &__bar {
    position: relative;
    background: var(--c-darkgrey);
    width: 100%;
    height: 61px;
    border-radius: 8px 8px 0 0;
    &__icon {
      position: absolute;
      top: 50%;
      right: var(--spacer-sm);
      transform: translateY(-50%);
      cursor: pointer;
    }
  }
  &__popup {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    border-radius: 10px;
    width: 826px;
    background: var(--c-offwhite);
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
    color: var(--c-primary);
  }
  &__content {
    padding: var(--spacer-base) var(--spacer-lg) var(--spacer-lg);
    &__heading {
      color: var(--c-primary);
      font-weight: bold;
      font-size: var(--font-3xl);
      font-family: var(--font-header);
      padding-bottom: var(--spacer-base);
    }
    &__textarea {
      width: 100%;
      box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      padding: var(--spacer-base);
    }
    &__button {
      text-transform: uppercase;
      color: var(--c-white);
      font-family: var(--font-primary);
      font-weight: 700;
      letter-spacing: 0.1em;
      padding: var(--spacer-sm) 20px;
      background: linear-gradient(97.57deg, var(--c-orange) 50%, #F6836A 107.15%);
      border-radius: 8px;
      -o-transition: all 200ms ease-in-out;
      -webkit-transition: all 200ms ease-in-out;
      -moz-transition: all 200ms ease-in-out;
      -ms-transition: all 200ms ease-in-out;
      transition: all 200ms ease-in-out;
      &:hover {
        filter: brightness(0.92);
      }
    }
  }
}
</style>