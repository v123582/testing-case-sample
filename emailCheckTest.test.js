const {emailCheck} = require('./sample')

let i = 1

function emailCheckTest(input, expect){
    
    const output = emailCheck(input)
    const rusult = output === expect ? 'Success' : 'Fail'
    console.log(`[case ${i++}: ${rusult}] input: ${input}, expect output: ${expect}, output: ${output}`)

}

emailCheckTest('admin', false)
emailCheckTest('admin@', false)
emailCheckTest('admin@alphacamp', false)
emailCheckTest('admin@alphacamp.', false)
emailCheckTest('admin@.com', false)
emailCheckTest('admin@alphacamp.com', true)

