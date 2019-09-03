const {passwordCheck} = require('./sample')

let i = 1

function passwordCheckTest(input, expect){
    
    const output = passwordCheck(input)
    const rusult = output === expect ? 'Success' : 'Fail'
    console.log(`[case ${i++}: ${rusult}] input: ${input}, expect output: ${expect}, output: ${output}`)

}

passwordCheckTest('1', false)
passwordCheckTest('111111', false)
passwordCheckTest('111111a', false)
passwordCheckTest('111111aA', true)
