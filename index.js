

console.log("log checking");

const { hash } = window.location;  // destructuring the url to get its "hash" attribute

final_message_display = atob(hash.replace('#', ''));  // decoding the hash parameter
if (final_message_display)
{
  document.querySelector('#unencrypted-div').style.display = "none";
  document.querySelector('#final_message').style.display = "block";
  document.querySelector('#instruction').style.display = "none";
  document.querySelector('.app_title').style.display = "none";
  document.querySelector('h1').innerHTML = final_message_display;
}

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();  // prevents the form from being sent to a server, which is the default behaviour

  document.querySelector('#encrypted-div').style.display = "block";

  msg = document.querySelector('#unencrypted');
  msg_encrypted = btoa(msg.value);  // performs some base64 encoding

  encryption = document.querySelector('#encrypted')
  encryption.value = `${window.location}#${msg_encrypted}`;
  encryption.select();   // encrypted link gets selected for user to copy
});



/*Future improvements
- custom encoding
- better UI
*/
