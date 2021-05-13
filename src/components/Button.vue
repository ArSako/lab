<template>
  <div class="button_wrapper" :class="additionalClass">
    <button class="button" @click="action(number)">
      <img :class="additionalImageClass" :src="image" alt=""/>
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    action: {
      type: Function,
    },
    additionalClass: {
      type: String,
      default: '',
    },
    image: {
      type: String,
    },
    additionalImageClass: {
      type: String,
      default: '',
    },
    number: {
      type: String,
      default: '',
    }
  },
}
</script>

<style lang="sass">
.button
  display: block
  border: none
  outline: none
  padding: 5px 3px 4px
  width: 100%
  height: 100%
  border-radius: 1px
  font-size: 4px
  background: linear-gradient(0deg, #4EA4DC -416%, #2BAFDE 401%)
  transition: .3s

  &_wrapper
    padding: 1px
    background: linear-gradient(180deg, #18476B -5.2%, #2771AA 45.84%, #081925 119.3%)
    border-radius: 2px

    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4)
      .button
        padding: 3px 2px 2px

    &--plus
      grid-row: 5/7
      grid-column: 4

    &--dot
      > button
        padding: 7px 1px 2px

    &--minus
      img
        transform: scale(0.4)

    &--multiply
      img
        transform: scale(0.7)

  > img
    width: 100%
    height: 100%

.button:hover
  background: linear-gradient(180deg, #4EA4DC 51.6%, #081925 131.2%)

.button:active
  background: linear-gradient(0deg, #18476B -2.9%, #2771AA 59.3%, #081925 148.8%)

.scale_0_5
  transform: scale(0.5)
</style>