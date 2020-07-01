import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faInstagram, faMedium } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faEnvelope,
  faGithub,
  faTwitter,
  faInstagram,
  faMedium
)

Vue.component('fa-icon', FontAwesomeIcon)
