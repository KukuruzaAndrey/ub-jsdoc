const vueRender = require('vue-server-renderer')
const Vue = require('vue')
const fs = require('fs')
const path = require('path')

Vue.component('anchor', {
  props: ['id'],
  template: fs.readFileSync(path.resolve(__dirname, '../tmpl/elements/anchor.vue'), 'utf-8')
})
Vue.component('func', {
  props: ['func'],
  template: fs.readFileSync(path.resolve(__dirname, '../tmpl/elements/func.vue'), 'utf-8')
})
Vue.component('member', {
  props: ['member'],
  template: fs.readFileSync(path.resolve(__dirname, '../tmpl/elements/member.vue'), 'utf-8')
})
Vue.component('type', {
  props: ['type'],
  template: fs.readFileSync(path.resolve(__dirname, '../tmpl/elements/type.vue'), 'utf-8')
})
Vue.component('event', {
  props: ['event'],
  template: fs.readFileSync(path.resolve(__dirname, '../tmpl/elements/event.vue'), 'utf-8')
})
Vue.component('example', {
  props: ['example'],
  template: fs.readFileSync(path.resolve(__dirname, '../tmpl/elements/example.vue'), 'utf-8')
})
Vue.component('search', {
  template: fs.readFileSync(path.resolve(__dirname, '../tmpl/elements/search.vue'), 'utf-8')
})
Vue.component('nav-collapse', {
  props: ['navigation'],
  template: fs.readFileSync(path.resolve(__dirname, '../tmpl/elements/nav-collapse.vue'), 'utf-8')
})
Vue.component('nav-plain', {
  props: ['navigation'],
  template: fs.readFileSync(path.resolve(__dirname, '../tmpl/elements/nav-plain.vue'), 'utf-8')
})
Vue.component('tutor-sidebar', {
  props: ['navigation'],
  template: fs.readFileSync(path.resolve(__dirname, '../tmpl/elements/tutor-sidebar.vue'), 'utf-8')
})
Vue.component('sidebar', {
  props: ['navigation'],
  template: fs.readFileSync(path.resolve(__dirname, '../tmpl/elements/sidebar.vue'), 'utf-8')
})
Vue.component('main-sidebar', {
  props: ['navigation'],
  template: fs.readFileSync(path.resolve(__dirname, '../tmpl/elements/main-sidebar.vue'), 'utf-8')
})
Vue.component('t-o-content', {
  props: ['tableOfContent'],
  template: fs.readFileSync(path.resolve(__dirname, '../tmpl/elements/t-o-content.vue'), 'utf-8')
})

// render one file
const renderFile = (data, vueTemplPath, htmlTemplPath, outputPath) => {
  const app = new Vue({
    data,
    template: fs.readFileSync(vueTemplPath, 'utf-8')
  })

  const renderer = vueRender.createRenderer({
    template: fs.readFileSync(htmlTemplPath, 'utf-8')
  })

  renderer.renderToString(app).then(html => {
    fs.writeFileSync(outputPath, html)
  }).catch(err => {
    console.error(err)
  })
}

module.exports = renderFile
