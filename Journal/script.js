document.getElementById('saveEntry').addEventListener('click', function() {
    const journalInput = document.getElementById('journalInput');
    const entryValue = journalInput.value.trim();
    if (entryValue === '') return;

    const li = document.createElement('li');
    li.textContent = entryValue;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'removeEntry';
    removeBtn.onclick = function() {
        li.remove();
    };
    li.appendChild(removeBtn);

    document.getElementById('journalList').appendChild(li);
    journalInput.value = ''; 
});