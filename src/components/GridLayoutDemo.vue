<template>
  <div>
    <h2>水平排列的布局</h2>
    <p>col必须放在row里面</p>
    <Row>
      <Col span="12">col-12</Col>
      <Col span="12">col-12</Col>
    </Row>
    <br>
    <Row>
      <Col span="8">col-8</Col>
      <Col span="8">col-8</Col>
      <Col span="8">col-8</Col>
    </Row>
    <br>
    <Row>
      <Col span="6">col-6</Col>
      <Col span="6">col-6</Col>
      <Col span="6">col-6</Col>
      <Col span="6">col-6</Col>
    </Row>

    <h2>区块间隔</h2>
    <Row :gutter="16">
      <Col span="6">
        <div>col-6</div>
      </Col>
      <Col span="6">
        <div>col-6</div>
      </Col>
      <Col span="6">
        <div>col-6</div>
      </Col>
      <Col span="6">
        <div>col-6</div>
      </Col>
    </Row>
  </div>
</template>

<script>
  // import 'iview/dist/styles/iview.css'
  export default {
    name: 'GridLayoutDemo'
  }
</script>

<style scoped>

</style>
