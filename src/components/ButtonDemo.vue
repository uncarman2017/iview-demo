/* eslint-disable */
<template>
  <div>
    <h2>普通按钮</h2>
    <Button>Default</Button>
    <Button type="primary" @click="click('Primary',$event)">Primary</Button>
    <Button type="dashed" @click="click('Dashed',$event)">Dashed</Button>
    <Button type="text" @click="click('Text',$event)">Text</Button>
    <br><br>
    <Button type="info" @click="++ counter">Info</Button>
    <p>The button above has been clicked {{ counter }} times.</p>
    <Button type="success" v-on:click="click('Success',$event)">Success</Button>
    <Button type="warning" @click="click('Warning',$event)">Warning</Button>
    <Button type="error" @click="click('Error',$event)">Error</Button>
    <h2>幽灵按钮</h2>
    <template>
      <Button type="default" ghost>Default</Button>
      <Button type="primary" ghost>Primary</Button>
      <Button type="dashed" ghost>Dashed</Button>
      <Button type="text" ghost>Text</Button>
      <Button type="info" ghost>Info</Button>
      <Button type="success" ghost>Success</Button>
      <Button type="warning" ghost>Warning</Button>
      <Button type="error" ghost>Error</Button>
    </template>
    <h2>圆角按钮</h2>
    <Button type="primary" shape="circle" icon="ios-search"></Button>
    <Button type="primary" icon="ios-search">Search</Button>
    <Button type="primary" shape="circle" icon="ios-search">Search</Button>
    <Button type="primary" shape="circle">Circle</Button>
    <br><br>
    <Button shape="circle" icon="ios-search"></Button>
    <Button icon="ios-search">Search</Button>
    <Button shape="circle" icon="ios-search">Search</Button>
    <Button shape="circle">Circle</Button>
    <h2>选择按钮</h2>
    <RadioGroup v-model="buttonSize" type="button">
      <Radio label="large">Large</Radio>
      <Radio label="default">Default</Radio>
      <Radio label="small">small</Radio>
    </RadioGroup>
    <br><br>
    <Button :size="buttonSize" type="primary">Primary</Button>
    <Button :size="buttonSize" type="default">Default</Button>
    <Button :size="buttonSize" type="dashed">Dashed</Button>
    <Button :size="buttonSize" type="text">Text</Button>
    <br><br>
    <Button :size="buttonSize" icon="ios-download-outline" type="primary" shape="circle"></Button>
    <Button :size="buttonSize" icon="ios-download-outline" type="primary">Download</Button>
    <br><br>
    <ButtonGroup :size="buttonSize">
      <Button :size="buttonSize" type="primary">
        <Icon type="ios-arrow-back"/>
        Backward
      </Button>
      <Button :size="buttonSize" type="primary">
        Forward
        <Icon type="ios-arrow-forward"/>
      </Button>
    </ButtonGroup>
    <h2>长条按钮</h2>
    <Button type="success" long>SUBMIT</Button>
    <br><br>
    <Button type="error" long>DELETE</Button>
    <h2>按钮失效性</h2>
    <Button>Default</Button>
    <Button disabled>Default(Disabled)</Button>
    <br>
    <Button type="primary">Primary</Button>
    <Button type="primary" disabled>Primary(Disabled)</Button>
    <br>
    <Button type="dashed">Dashed</Button>
    <Button type="dashed" disabled>Dashed(Disabled)</Button>
    <br>
    <Button type="text">Text</Button>
    <Button type="text" disabled>Text(Disabled)</Button>
    <h2>按钮载入中状态</h2>
    <Button type="primary" loading>Loading...</Button>
    <Button type="primary" :loading="loading" @click="toLoading">
      <span v-if="!loading">Click me!</span>
      <span v-else>Loading...</span>
    </Button>
    <Button type="primary" :loading="loading2" icon="ios-power" @click="toLoading2">
      <span v-if="!loading2">Click me!</span>
      <span v-else>Loading...</span>
    </Button>
    <Button loading shape="circle"></Button>
    <Button loading shape="circle" type="primary"></Button>
    <h2>按钮组合</h2>
    <h4>Basic</h4>
    <br><br>
    <ButtonGroup>
      <Button>Cancel</Button>
      <Button type="primary">Confirm</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button disabled>Yesterday</Button>
      <Button disabled>Today</Button>
      <Button disabled>Tomorrow</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button type="primary">L</Button>
      <Button>M</Button>
      <Button>M</Button>
      <Button type="dashed">R</Button>
    </ButtonGroup>
    <br><br>
    <h4>Icons</h4>
    <br><br>
    <ButtonGroup>
      <Button type="primary">
        <Icon type="ios-arrow-back"></Icon>
        Backward
      </Button>
      <Button type="primary">
        Forward
        <Icon type="ios-arrow-forward"></Icon>
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button type="primary" icon="ios-skip-backward"></Button>
      <Button type="primary" icon="ios-skip-forward"></Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button icon="ios-color-wand-outline"></Button>
      <Button icon="ios-sunny-outline"></Button>
      <Button icon="ios-crop"></Button>
      <Button icon="ios-color-filter-outline"></Button>
    </ButtonGroup>
    <br><br>
    <h4>Circle</h4>
    <br><br>
    <ButtonGroup shape="circle">
      <Button type="primary">
        <Icon type="ios-arrow-back"></Icon>
        Backward
      </Button>
      <Button type="primary">
        Forward
        <Icon type="ios-arrow-forward"></Icon>
      </Button>
    </ButtonGroup>
    <ButtonGroup shape="circle">
      <Button type="primary" icon="ios-skip-backward"></Button>
      <Button type="primary" icon="ios-skip-forward"></Button>
    </ButtonGroup>
    <ButtonGroup shape="circle">
      <Button icon="ios-color-wand-outline"></Button>
      <Button icon="ios-sunny-outline"></Button>
      <Button icon="ios-crop"></Button>
      <Button icon="ios-color-filter-outline"></Button>
    </ButtonGroup>
    <br><br>
    <h4>Size</h4>
    <br><br>
    <ButtonGroup size="large">
      <Button>Large</Button>
      <Button>Large</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button>Default</Button>
      <Button>Default</Button>
    </ButtonGroup>
    <ButtonGroup size="small">
      <Button>Small</Button>
      <Button>Small</Button>
    </ButtonGroup>
    <br><br>
    <ButtonGroup size="large" shape="circle">
      <Button>Large</Button>
      <Button>Large</Button>
    </ButtonGroup>
    <ButtonGroup shape="circle">
      <Button>Default</Button>
      <Button>Default</Button>
    </ButtonGroup>
    <ButtonGroup size="small" shape="circle">
      <Button>Small</Button>
      <Button>Small</Button>
    </ButtonGroup>

    <h2>按钮纵向排列</h2>
    <ButtonGroup vertical>
      <Button icon="logo-facebook"></Button>
      <Button icon="logo-twitter"></Button>
      <Button icon="logo-googleplus"></Button>
      <Button icon="logo-tumblr"></Button>
    </ButtonGroup>

    <h2>按钮跳转</h2>
    <Button to="/components/icon-en">Normal</Button>
    <Button to="/components/icon-en" replace>No history</Button>
    <Button to="//iviewui.com" target="_blank">New window</Button>
  </div>
</template>

<script>
  export default {
    name: 'ButtonDemo',
    components: {},
    data: function () {
      return {
        counter: 0,
        buttonSize: 'large',
        loading: false,
        loading2: false
      }
    },
    methods: {
      click: function (msg, event) {
        event.preventDefault()
        alert(event.target.tagName + ': ' + msg)
      },
      toLoading () {
        this.loading = true
      },
      toLoading2 () {
        this.loading2 = true
      }
    }
  }
</script>

<style scoped>

</style>
