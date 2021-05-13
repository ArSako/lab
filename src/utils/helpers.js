export const roundUp = (number) => {
    if (Number.isInteger(number)) {
        return number;
    }
    return +number.toFixed(3);
}

export const importImage = (imageName) => {
    return require(`@/assets/svg/${imageName}`)
}

export function getButtonsOptions(){
    return [
        {
            action: this.onOff,
            image: importImage('off.svg'),
        },
        {
            action: this.sign,
            image: importImage('plus_minus.svg'),
        },
        {
            action: this.sqrt,
            image: importImage('sqrt.svg')
        },
        {
            action: this.percent,
            image: importImage('percent.svg')
        },
        {
            action: this.mrc,
            image: importImage('mrc.svg')
        },
        {
            action: this.m_minus,
            image: importImage('m_minus.svg')
        },
        {
            action: this.m_plus,
            image: importImage('m_plus.svg')
        },
        {
            action: this.subtract,
            image: importImage('minus.svg'),
            additionalClass: "button_wrapper--minus",
        },
        {
            action: this.append,
            image: importImage('numbers/7.svg'),
            number: '7',
        },
        {
            action: this.append,
            image: importImage('numbers/8.svg'),
            number: '8',
        },
        {
            action: this.append,
            image: importImage('numbers/9.svg'),
            number: '9',
        },
        {
            action: this.multiply,
            image: importImage('multiply.svg'),
            additionalClass: "button_wrapper--multiply",
        },
        {
            action: this.append,
            image: importImage('numbers/4.svg'),
            number: '4',
        },
        {
            action: this.append,
            image: importImage('numbers/5.svg'),
            number: '5',
        },
        {
            action: this.append,
            image: importImage('numbers/6.svg'),
            number: '6',
        },
        {
            action: this.divide,
            image: importImage('divide.svg'),
        },
        {
            action: this.append,
            image: importImage('numbers/1.svg'),
            number: '1',
        },
        {
            action: this.append,
            image: importImage('numbers/2.svg'),
            number: '2',
        },
        {
            action: this.append,
            image: importImage('numbers/3.svg'),
            number: '3',
        },
        {
            action: this.append,
            image: importImage('numbers/0.svg'),
            number: '0',
        },
        {
            action: this.decimal,
            image: importImage('dot.svg'),
            additionalClass: "button_wrapper--dot",
            additionalImageClass: "scale_0_5"
        },
        {
            action: this.equal,
            image: importImage('equals.svg'),
            additionalImageClass: "scale_0_5"
        },
        {
            action: this.add,
            image: importImage('plus.svg'),
            additionalClass: "button_wrapper--plus ",
            additionalImageClass: "scale_0_5"
        },
    ]
}