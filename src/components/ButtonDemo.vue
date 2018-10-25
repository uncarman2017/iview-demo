/* eslint-disable */
<template>
  <div>
    <Button>Default</Button>
    <Button type="primary" @click="click('Primary',$event)">Primary</Button>
    <Button type="dashed" @click="click('Dashed',$event)">Dashed</Button>
    <Button type="text"  @click="click('Text',$event)">Text</Button>
    <br><br>
    <Button type="info" @click="++ counter">Info</Button>
    <p>The button above has been clicked {{ counter }} times.</p>
    <Button type="success" @click="click('Success',$event)">Success</Button>
    <Button type="warning" @click="click('Warning',$event)">Warning</Button>
    <Button type="error" @click="click('Error',$event)">Error</Button>
  </div>
</template>

<script>
export default {
  name: 'ButtonDemo',
  components: {},
  data: function() {
    return {counter: 0}
  },
  methods: {
    click: function (msg, event) {
      event.preventDefault()
      alert(event.target.tagName + ': ' + msg)
    }
  }
}
</script>

<style scoped>

</style>
