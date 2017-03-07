Vue.component('jumbotron', {
  template: '#jumbotron-template',
  props: ['display', 'lead']
})

Vue.component('card', {
  template: '#card-template',
  props: ['project']
})

var app = new Vue({
  el: '#app',
  data: {
    "projects": [
    {
      "name": "sukusuku 일본어",
      "description": "일본어 기초 단어장",
      "type": "개인프로젝트",
      "technics": ["Vue.js", "Vuex", "Bulma"],
      "link": "http://sukusuku.surge.sh/",
      "repository": {
        "type": "GitHub",
        "url": "https://github.com/sukusuku2017/word"
      },
      "img": "./src/images/sukusuku.png",
      "date": "201703"
    },
    {
      "name": "K-Tube",
      "description": "유투브 아이돌 관련 영상 모음",
      "type": "개인프로젝트",
      "technics": ["React", "Flux", "Bootstrap"],
      "link": "https://ktube.bookstour.com/",
      "repository": {
        "type": "Bitbucket"
      },
      "date": "201703"
    },
    {
      "name": "The Idol",
      "description": "아이돌 리스트",
      "type": "개인프로젝트",
      "technics": ["React", "Flux", "Firebase", "Bootstrap"],
      "link": "https://the-idol.firebaseapp.com/",
      "repository": {
        "type": "GitHub",
        "url": "https://github.com/gyp2016/the.idol"
      },
      "img": "",
      "date": "201703"
    },
    {
      "name": "나를 찾아줘 - Gone Girl",
      "description": "유기동물 관련 정보",
      "type": "개인프로젝트",
      "technics": ["Polymer", "Firebase", "PolymerElements"],
      "link": "https://gonegirl.firebaseapp.com/",
      "repository": {
        "type": "GitHub",
        "url": "https://github.com/sukusuku2017/word"
      },
      "date": "201703"
    },
    {
      "name": "북스투어 - BooksTour",
      "description": "중고도서 거래 서비스",
      "type": "ACornerRetail",
      "technics": ["Backbone.js", "Marionette.js", "Bootstrap"],
      "link": "https://bookstour.com/",
      "repository": {
        "type": "Bitbucket"
      },
      "img": "./src/images/bookstour.png",
      "date": "201703"
    },
    {
      "name": "쿱펀드 - Coopfund",
      "description": "주택대출 P2P 서비스",
      "type": "ACornerRetail",
      "technics": ["React", "Flux", "Bootstrap"],
      "link": "http://www.coopfund.co.kr/",
      "repository": {
        "type": "Bitbucket"
      },
      "img": "./src/images/coopfund.png",
      "date": "201703"
    }
  ]
  }
})
