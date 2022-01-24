<template>
  <div>
    {{ message }}
  </div>
</template>

<script lang="ts">
import { cloneDeep } from 'lodash'
import data from '../data.json'

export default {
  data() {
    return { message: 'Hello Vue!' }
  },
  methods: {
    doIt() {
      const t = [1, 2]
      const p = cloneDeep(t)
      console.log(p)
    },
  },
  created() {
    console.log('data:', data)
  },
}
</script>

<style></style>
