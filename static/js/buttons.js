// Taken from clipboardJS website
var btns = document.querySelectorAll('.copy-button');
for (var i = 0; i < btns.length; i++)
{
  btns[i].addEventListener('mouseleave', clearTooltip);
  btns[i].addEventListener('blur', clearTooltip);
}

function clearTooltip(e)
{
  e.currentTarget.setAttribute('class', 'btn btn-sm text-right copy-button mb-1');
  e.currentTarget.removeAttribute('tooltip');
}

function showTooltip(elem, msg)
{
  elem.setAttribute('class', 'btn btn-sm text-right copy-button mb-1 tooltip');
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
var clipboardVar  = new ClipboardJS('.copy-button', {
  text: function (trigger) {
    const query = trigger.getAttribute('data-clipboard-target');
    const target = document.querySelector(query);
    return target.getAttribute('href');
  }}
  );
clipboardVar.on('success', function (e)
{
  e.clearSelection();
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
  showTooltip(e.trigger, 'Copied!');
});
clipboardVar.on('error', function (e)
{
  console.error('Action:', e.action);
  console.error('Trigger:', e.trigger);
  showTooltip(e.trigger, fallbackMessage(e.action));
});
