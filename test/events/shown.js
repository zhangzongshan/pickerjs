window.QUnit.test('events#shown', (assert) => {
  const input = document.createElement('input');
  const done = assert.async();

  document.body.appendChild(input);
  assert.expect(1);

  const picker = new window.Picker(input);

  input.addEventListener('shown', () => {
    assert.ok(true);
    done();
    picker.hide();
  }, false);

  picker.show();
});
