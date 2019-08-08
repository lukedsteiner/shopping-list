$('form').on('submit', event => {
    event.preventDefault();
    let item = $('#shopping-list-entry').val();
    let code = [];
    code.push(`<li>
    <span class="shopping-item">${item}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
    $('.shopping-list').append(code);
})

$('ul').on('click', '.shopping-item-delete', event => {
   $(this).closest('li').remove();
})

$('ul').on('click', '.shopping-item-toggle', event => {
  $(event.target).closest('span').toggleClass('shopping-item__checked');
})
