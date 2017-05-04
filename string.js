var exports = module.exports = {};

function PasswordMessage(m){
  this.name = "Password Message";
  this.message = m;
}

function inRange(char,min,max){
    let unicode = char.charCodeAt(0);
    if(unicode>=min && unicode<=max){
      return true;
    }
    else{
      return false;
    }
}

exports.checkLength = function(str){
    let valid = (str.length >= 8 && str.length <= 20);
    try{
        if(str.length < 8){
            throw new PasswordMessage("Your password is too short. Should be at least 8 letters.");
        }
        else if(str.length > 20){
            throw new PasswordMessage("Your password is too long. Should be at most 20 letters.");
        }
        else{
            throw new PasswordMessage("Your password is an appropriate length.");
        }
    }
    catch(e){
        console.log(e.name+": "+e.message);
        return valid;
    }
}


exports.containsUpper =function(str){
  let hasUpper = false;
  try{
    for(var a=0; a<str.length; a++){
      if(inRange(str[a],65,90)){
        hasUpper = true;
        throw new PasswordMessage("has uppercase character");
      }
    }
    if(hasUpper == false){
      throw new PasswordMessage("does not have an uppercase character");
    }
  }
  catch(e){
    console.log(e.message);
    return hasUpper;
  }
}

exports.containsLower =function(str){
  let hasLower = false;
  try{
    for(var a=0; a<str.length; a++){
      if(inRange(str[a],97,122)){
        hasLower = true;
        throw new PasswordMessage("has lowercase character");
      }
    }
    if(hasLower == false){
      throw new PasswordMessage("does not have an lowercase character");
    }
  }
  catch(e){
    console.log(e.message);
    return hasLower;
  }
}

exports.containsNumerical = function(str){
  let hasNumerical = false;
  try{
    for(var a=0; a<str.length; a++){
      if(inRange(str[a],48,57)){
        hasNumerical = true;
        throw new PasswordMessage("has numerical character");
      }
    }
    if(hasUpper == false){
      throw new PasswordMessage("does not have a numerical character");
    }
  }
  catch(e){
    console.log(e.message);
    return hasNumerical;
  }
}

exports.containsSpecial =function(str){
  let hasSpecial = false;
  let special =  [33,64,35,36,37,94,38,42];
  try{
    for(var a=0; a<str.length; a++){
      for(var b=0; b<special.length; b++){
        if(str[a]==special[b]){
          hasSpecial = true;
          throw new PasswordMessage("has special character");
        }
      }
    }
    if(hasSpecial == false){
      throw new PasswordMessage("does not have special character");
    }
  }
  catch(e){
    console.log(e.message);
    return hasSpecial;
  }
}
