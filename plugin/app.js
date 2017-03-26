const taskIdContainer = document.getElementById('key-val');
const taskDescriptionContainer = document.getElementById('summary-val');
const { textContent: taskId } = taskIdContainer;
const { textContent: taskDescription } = taskDescriptionContainer;

const taskData = `${taskId} ${taskDescription}`;

function copyToClipboard(text) {
  const textarea = createElement('textarea');

  textarea.textContent = text;
  document.body.appendChild(textarea);
  textarea.select();

  try {
    document.execCommand('copy');
    console.info('Task description was successful copied!')
  } catch (e) {
    console.error('Copy to clipboard failed!', e);
  } finally {
    document.body.removeChild(textarea);
  }

  function createElement(elementName) {
    return document.createElement(elementName);
  }
}

copyToClipboard(taskData);
