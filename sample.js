function emailCheck(email) {

  // 條件一：不可為空
  if(email.length == 0)
    return false
  // 條件二：信箱格式正確
  // [英數組合]@[英數組合].[英數組合]
  if(email.indexOf('@') == -1 || email.indexOf('@') == -1)
    return false
  
  const username = email.split('@')[0]
  const domain = email.split('@')[1].split('.')

  if(username.length == 0)
    return false
  if(domain.length < 2)
    return false
  if(domain[0].length == 0 || domain[1].length == 0)
    return false


  return true
}

function passwordCheck(password) {
  // 條件一：長度 > 6
  if(password.length < 6)
    return false
  // 條件二：須包含數字、大小寫英文字母
  re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
  if(!re.test(password))
    return false

  return true
}

module.exports = {
  emailCheck, 
  passwordCheck,
}; 