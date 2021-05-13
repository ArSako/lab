<template>
  <main>
    <div class="calculator">
      <div class="calculator_body">
        <div class="calculator_screen_wrapper">
          <div class="calculator_screen" v-if="isEnabled">
            <p class="calculator_screen_memory" v-if="memory">M</p>
            <p class="calculator_screen_display">{{ display }}</p>
          </div>
          <div class="calculator_screen" v-else>
          </div>
        </div>
        <div class="buttons_container">
          <Button v-for="button in buttons"
                  v-bind:key="button.id"
                  :action="button.action"
                  :additional-class="button.additionalClass"
                  :image="button.image"
                  :additional-image-class="button.additionalImageClass"
                  :number="button.number"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Button from "@/components/Button";

const utils = require('@/utils/helpers');

export default {
  name: "Calculator",
  components: {Button},
  data: function () {
    return {
      buttons: utils.getButtonsOptions.bind(this)(),
      isEnabled: false,
      previous: null,
      display: '0',
      operator: null,
      operatorClicked: false,
      memory: 0,
    };
  },
  methods: {
    onOff: function () {
      this.isEnabled = !this.isEnabled;
      this.clear();
    },
    clear() {
      this.display = '0';
      this.memory = 0;
    },
    mrc() {
      if (this.isEnabled) {
        this.display = this.memory;
        this.memory = 0;
      }
    },
    m_plus() {
      if (this.isEnabled) {
        this.memory += Number(this.display);
      }
    },
    m_minus() {
      if (this.isEnabled) {
        this.memory -= Number(this.display);
      }
    },
    sign() {
      if (this.isEnabled) {
        this.display = utils.roundUp(
            this.display < 0
                ? (this.display = this.display - this.display * 2)
                : (this.display = this.display - this.display * 2)
        );
      }
    },
    percent() {
      if (this.isEnabled) {
        this.display = utils.roundUp(this.display / 100);
      }
    },
    sqrt() {
      if (this.isEnabled) {
        if (this.display > 0) this.display = utils.roundUp(Math.sqrt(this.display));
      }
    },
    append(number) {
      if (this.isEnabled) {

        if (this.operatorClicked === true) {
          this.display = '';
          this.operatorClicked = false;
        }
        this.display =
            this.display === '0'
                ? (this.display = number)
                : '' + this.display + number;
      }
    },
    decimal() {
      if (this.isEnabled) {
        if (!this.operatorClicked) {
          if (this.display.indexOf('.') === -1) {
            this.display = `${this.display}.`
          }
        }
      }
    },
    divide() {
      if (this.isEnabled) {
        this.operator = (a, b) => utils.roundUp(a / b);
        this.previous = this.display;
        this.operatorClicked = true;
      }
    },
    multiply() {
      if (this.isEnabled) {
        this.operator = (a, b) => utils.roundUp(a * b);
        this.previous = this.display;
        this.operatorClicked = true;
      }
    },
    subtract() {
      if (this.isEnabled) {
        this.operator = (a, b) => utils.roundUp(a - b);
        this.previous = this.display;
        this.operatorClicked = true;
      }
    },
    add() {
      if (this.isEnabled) {
        this.operator = (a, b) => utils.roundUp(a + b);
        this.previous = this.display;
        this.operatorClicked = true;
      }
    },
    equal() {
      if (this.isEnabled) {
        this.display = utils.roundUp(this.operator(Number(this.previous), Number(this.display)));
        this.previous = null;
        this.operatorClicked = true;
      }
    }
  }
}
</script>

<style lang="sass">
.calculator
  background: linear-gradient(180deg, #2771AA -3.6%, #081925 71.1%)
  max-width: 130px
  padding: 1px
  border-radius: 7px

.calculator_body
  padding-top: 26px
  padding-left: 10px
  padding-right: 10px
  background: linear-gradient(180deg, #4EA4DC 51.6%, #081925 161.2%)
  border-radius: 8px

.calculator_screen_wrapper
  padding: 2px 2px 1px
  height: 27px
  border-radius: 3px
  background: linear-gradient(0deg, #18476B -2.9%, #2771AA 59.3%, #081925 148.8%)

.calculator_screen
  display: flex
  background: #DFE3D8
  height: 27px
  padding-right: 4px
  border-radius: 3px
  font-size: 13px
  text-align: right
  line-height: 27px
  overflow-x: hidden
  padding-left: 5px
  align-items: center

  &_memory
    font-size: 3px
    margin: 0

  &_display
    margin: 0 0 0 auto

.buttons_container
  display: grid
  grid-template-columns: repeat(4, 1fr)
  grid-template-rows: 14px repeat(5, 18px)
  gap: 6px 4px
  padding: 8px 0 9px

</style>
