<template>
  <div v-html="table"></div>
</template>

<script>
import jsonToStringDom from './jsonToStringDom'

export default {
  props: ['data'],
  computed: {
    table() {
      if (this.data) {
        return jsonToStringDom(this.data)
      } else {
        return ''
      }
    },
  },
}
</script>

<style lang="scss">
.show_table {
  border: 1px solid #e8e8e8;
  table {
    border-collapse: collapse;
    border: 1px solid #e8e8e8;
    width: 100%;
    overflow: hidden;
    border-radius: 4px;
    tr {
      display: table-row;
      vertical-align: inherit;
      border-color: inherit;
      border-bottom: 1px solid #e8e8e8;
      th {
        background-color: #fafafa;
        text-align: inherit;
        padding: 16px 24px;
        border-right: 1px solid #e8e8e8;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 400;
        font-size: 14px;
        line-height: 1.5;
      }
      td {
        display: table-cell;
        color: rgba(0, 0, 0, 0.65);
        font-size: 14px;
        line-height: 1.5;
        padding: 16px 24px;
        border-right: 1px solid #e8e8e8;
        &.item {
          padding: 0;
          .show_table{
              border:0
          }
        }
      }
    }
  }
}
</style>
