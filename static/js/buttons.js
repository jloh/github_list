// Taken from clipboardJS website
var btns = document.querySelectorAll('.repo-button');
for (var i = 0; i < btns.length; i++)
{
  btns[i].addEventListener('mouseleave', clearTooltip);
  btns[i].addEventListener('blur', clearTooltip);
}

function clearTooltip(e)
{
  e.currentTarget.setAttribute('class', 'btn btn-sm repo-button');
  e.currentTarget.removeAttribute('tooltip');
}

function showTooltip(elem, msg)
{
  elem.setAttribute('class', 'btn btn-sm repo-button tooltip');
  elem.setAttribute('data-tooltip', msg);
}
function fallbackMessage(action)
{
  var actionMsg = '';
  var actionKey = (action === 'cut' ? 'X' : 'C');
  if (/iPhone|iPad/i.test(navigator.userAgent))
  {
    actionMsg = 'No support :(';
  }
  else if (/Mac/i.test(navigator.userAgent))
  {
    actionMsg = 'Press ⌘-' + actionKey + ' to ' + action;
  }
  else
  {
    actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action;
  }
  return actionMsg;
}
var repoClipboard = new ClipboardJS('.repo-button');
repoClipboard.on('success', function (e)
{
  e.clearSelection();
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
  showTooltip(e.trigger, 'Copied!');
});
repoClipboard.on('error', function (e)
{
  console.error('Action:', e.action);
  console.error('Trigger:', e.trigger);
  showTooltip(e.trigger, fallbackMessage(e.action));
});
