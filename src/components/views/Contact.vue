<template>
  <v-container>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-else-if="sending">
      Sending...
    </div>
    <template>
      <v-row>
        <v-col cols="8" v-if="!sent">
          <h1 class="text-left">Get in touch.</h1>
          <form class="mt-4">
           <v-text-field
             v-model="name"
             :error-messages="nameErrors"
             :counter="20"
             label="Name"
             required
             @input="$v.name.$touch()"
             @blur="$v.name.$touch()"
           ></v-text-field>
           <v-text-field
             v-model="email"
             :error-messages="emailErrors"
             label="E-mail"
             required
             @input="$v.email.$touch()"
             @blur="$v.email.$touch()"
           ></v-text-field>
          <v-textarea
            v-model="message"
            :error-messages="messageErrors"
            :counter="200"
            label="Message"
            required
            @input="$v.message.$touch()"
            @blur="$v.message.$touch()"
          ></v-textarea>
           <v-btn text class="mr-4" @click="send" :valid="valid">
             Send
           </v-btn>
           <v-btn text @click="clear">
             Clear
           </v-btn>
         </form>
        </v-col>
        <v-col cols="8" v-else>
          <v-card flat>
            <v-card-title>
              Thanks for getting in touch. We aim to reply within 24 hours.
            </v-card-title>
            <v-card-title>Whilst you're waiting to hear back, have a look around!</v-card-title>
            <v-btn text @click="$router.push('/')">Check out some tools</v-btn>
          </v-card>
        </v-col>
        <v-col cols="1" class="ml-2">
          <v-divider vertical></v-divider>
        </v-col>
        <v-col cols="2">
          <h2 class="text-left">Help us out</h2>
          <p class="text-left mt-4">
            We are always looking to add new content and we need your help
          </p>
          <p class="text-left">
            Let us know if we have missed any of your favourite tools
          </p>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
import emailjs from 'emailjs-com'

export default {
  name: 'Home',
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(20) },
    email: { required, email },
    message: { required, maxLength: maxLength(200) }
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      valid: false,
      sending: false,
      sent: false,
      error: null
    }
  },
  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name cannot be longer than 20 characters')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    messageErrors () {
      const errors = []
      if (!this.$v.message.$dirty) return errors
      !this.$v.message.maxLength && errors.push('Message cannot exceed 200 characters')
      !this.$v.message.required && errors.push('Message is required.')
      return errors
    }
  },
  methods: {
    clear() {
      this.sending = false
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.message = ''
    },
    async send(e) {
      try {
        e.preventDefault()
        this.$v.$touch()
        if (!this.$v.$invalid) {
          const { name, email, message } = this
          this.sending = true
          await emailjs.send(process.env.VUE_APP_EMAIL_SERVICE, process.env.VUE_APP_EMAIL_TEMPLATE, { name, email, message }, process.env.VUE_APP_EMAIL_USER)
          this.sent = true
          this.clear()
        }
      } catch (error) {
        this.sending = false
        this.error = error
      }
    }
  }
}
</script>
