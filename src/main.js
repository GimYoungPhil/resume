Vue.component('jumbotron', {
  template: '#jumbotron-template',
  props: ['info']
})

Vue.component('profile', {
  template: '#profile-template',
  props: ['profile']
})

Vue.component('career', {
  template: '#career-template',
  props: ['career'],
  computed: {
    priod: function() {
      return `${this.career.startDate} ~ ${this.career.endDate}`
    }
  }
})

Vue.component('project', {
  template: '#project-template',
  props: ['project'],
  computed: {
    priod: function() {
      return `${this.project.startDate} ~ ${this.project.endDate}`
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    "info": {
      "title": "About me",
      "subTitle": "..."
    },
    "profile": {
      "name": "Gim YoungPhil",
      "description": "Web Developer",
      "img": "src/images/profile.jpg",
      "git": "",
      "mail": ""
    },
    "skills": [
      {

      }
    ],
    "career": [
      {
        "name": "(주)에이코너리테일",
        "type": "Permanent Worker",
        "position": "과장",
        "role": "Web Front-End Development",
        "startDate": "2014/12",
        "endDate": "2016/10"
      },
      {
        "name": "링크잇 주식회사",
        "type": "Contract Worker",
        "position": "연구원",
        "role": "Web Front-End Development",
        "link": "http://linkit.kr/",
        "startDate": "2014/10",
        "endDate": "2014/06"
      },
      {
        "name": "(주)소프트웨어인라이프",
        "type": "Permanent Worker",
        "position": "선임",
        "role": "Web Front-End Development",
        "link": "http://www.softwareinlife.com/",
        "startDate": "2011/10",
        "endDate": "2014/05"
      },
      {
        "name": "(주)익스이노",
        "type": "Permanent Worker",
        "position": "주임",
        "role": "Web Application Development",
        "link": "http://www.exinno.net/",
        "startDate": "2010/08",
        "endDate": "2011/02"
      }
    ],
    "projects": [
      {
        "name": "스쿠스쿠 단어장",
        "description": "일본어 기초 단어장",
        "type": "개인프로젝트",
        "technics": ["Vue.js", "Vuex", "Bulma"],
        "link": "http://sukusuku.surge.sh/",
        "repository": {
          "type": "GitHub",
          "url": "https://github.com/sukusuku2017/word"
        },
        "img": "src/images/sukusuku.png",
        "startDate": "2016/12",
        "endDate": "2017/03"
      },
      {
        "name": "K-Tube",
        "description": "유투브 아이돌 관련 영상 모음",
        "type": "Personal project",
        "technics": ["React", "Flux", "Bootstrap"],
        "link": "https://ktube.bookstour.com/",
        "repository": {
          "type": "Bitbucket"
        },
        "startDate": "2016/07",
        "endDate": "2016/08"
      },
      {
        "name": "The Idol",
        "description": "아이돌 리스트",
        "type": "Personal project",
        "technics": ["React", "Flux", "Firebase", "Bootstrap"],
        "link": "https://the-idol.firebaseapp.com/",
        "repository": {
          "type": "GitHub",
          "url": "https://github.com/gyp2016/the.idol"
        },
        "img": "",
        "startDate": "2016/12",
        "endDate": "2017/03"
      },
      {
        "name": "나를 찾아줘 : Gone Girl",
        "description": "유기동물 관련 정보",
        "type": "Personal project",
        "technics": ["Polymer", "Firebase", "PolymerElements"],
        "link": "https://gonegirl.firebaseapp.com/",
        "repository": {
          "type": "GitHub",
          "url": "https://github.com/sukusuku2017/word"
        },
        "date": "201703"
      },
      {
        "name": "북스투어 : BooksTour",
        "description": "중고도서 거래 서비스",
        "type": "ACornerRetail",
        "technics": ["Backbone.js", "Marionette.js", "Bootstrap"],
        "link": "https://bookstour.com/",
        "repository": {
          "type": "Bitbucket"
        },
        "img": "./src/images/bookstour.png",
        "startDate": "2014/11",
        "endDate": "2015/08"
      },
      {
        "name": "쿱펀드 : Coopfund",
        "description": "주택대출 P2P 서비스",
        "type": "ACornerRetail",
        "technics": ["React", "Flux", "Bootstrap"],
        "link": "http://www.coopfund.co.kr/",
        "repository": {
          "type": "Bitbucket"
        },
        "img": "./src/images/coopfund.png",
        "startDate": "2015/09",
        "endDate": "2016/10"
      }
    ]
  }
})
