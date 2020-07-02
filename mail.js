// returns array of the username and domain of an email address
function emailParts(address) {
  return {'username':address.split("@")[0].toLowerCase(), 'domain':address.split("@")[1].toLowerCase()};
}
