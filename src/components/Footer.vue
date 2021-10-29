<template>
  <footer class="footer">
    <div class="footer-left-wrap">
      <ul
        v-if="contact"
        class="contact"
      >
        <li
          v-for="(item, index) in contact"
          :key="index"
          class="contact-item"
        >
          <NavLink :link="item.link">
            <component :is="item.iconComponent" />
            {{ item.text }}
          </NavLink>
        </li>
      </ul>
    </div>

    <div class="footer-right-wrap">
      <ul
        v-if="copyright"
        class="copyright"
      >
        <li
          v-for="(item, index) in copyright"
          :key="index"
          class="copyright-item"
        >
          <template v-if="item.link">
            <NavLink :link="item.link">
              {{ item.text }}
            </NavLink>
          </template>
          <template v-else>
            <a>{{ item.text }}</a>
          </template>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import {
  GithubIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitchIcon,
  YoutubeIcon,
  PhoneIcon,
} from 'vue-feather-icons'
import NavLink from './NavLink.vue'

export default {
  components: {
    GithubIcon,
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    LinkedinIcon,
    TwitchIcon,
    YoutubeIcon,
    PhoneIcon,
    NavLink,
  },

  computed: {
    contact () {
      return (
        [
            {
                type: 'twitch',
                link: 'https://twitch.tv/MilkTruckGaming'
            },
            {
                type: 'github',
                link: 'https://github.com/Gamermaker-dev',
            }
        ]
      )
        .map(({ type, link }) => {
          return {
            iconComponent: this.getIconComponentName(type),
            link,
          }
        })
        .filter(({ iconComponent }) => iconComponent)
    },

    copyright () {
      return (
        [
            {
                text: 'Privacy Policy',
                link: 'https://policies.google.com/privacy?hl=en-US',
            },
            {
                text: 'MIT Licensed | Copyright © 2018-present Vue.js',
                link: '',
            },
        ]
      )
    },
  },

  methods: {
    getIconComponentName (contactType) {
      switch (contactType) {
        case 'github':
          return 'GithubIcon'
        case 'facebook':
          return 'FacebookIcon'
        case 'twitter':
          return 'TwitterIcon'
        case 'instagram':
          return 'InstagramIcon'
        case 'linkedin':
          return 'LinkedinIcon'
        case 'twitch':
          return 'TwitchIcon'
        case 'youtube':
          return 'YoutubeIcon'
        case 'phone':
          return 'PhoneIcon'
        default:
          return ''
      }
    },
  },
}
</script>

<style scoped>
ol, ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer {
  height: 60px;
  box-sizing: border-box;
  background: linear-gradient(90deg, #7a01ff, #641ec1);
  color: #FFF;
  display: flex;
  padding: 15px 32px;
  word-break: wrap;

  @media (max-width: 800px) {
        height: 100px;
        flex-direction: column;
  }

}

.footer .footer-left-wrap {
    line-height: 30px;
    flex: 1;
    display: flex;

    @media (max-width: 800px;) {
        align-items: center;
        justify-content: center;
    }
}

.footer .footer-left-wrap .contact {
      display: flex;
}

.footer .footer-left-wrap .contact .contact-item {
        flex: 1;
        margin-right: 10px;
}

.footer .footer-left-wrap .contact .contact-item a {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.45);
          text-decoration: none;
          transition: color 0.3s;
}
.footer .footer-left-wrap .contact .contact-item a:hover {
            color: #FFF;
}

.footer .footer-right-wrap {
    flex: 1;
    display: none;
    align-items: center;
    
    @media (min-width: 600px) {
      display: flex;
      justify-content: flex-end;
    }
}
    
.footer .footer-right-wrap .copyright {
      display: flex;
      justify-content: flex-end;
}

.footer .footer-right-wrap .copyright .copyright-item {
        flex: 0 0 auto;
        padding: 0 10px;
        position: relative;
        line-height: 12px;
}

.footer .footer-right-wrap .copyright .copyright-item:last-child {
          border-right: none;
}

.footer .footer-right-wrap .copyright .copyright-item:last-child a {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: color 0.3s;
}

.footer .footer-right-wrap .copyright .copyright-item:last-child a:hover {
            color: rgba(255, 255, 255, 0.9);
}
</style>
