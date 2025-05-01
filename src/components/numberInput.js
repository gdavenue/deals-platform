export function numberInput({ label = '', placeholder = '', onSelect = null }) {
  return {
    label,
    placeholder,
    value: '',

    onInput() {
      this.value = this.value.replace(/[^0-9]/g, '');
	  onSelect(this.value);
    },

    isFilled() {
      return this.value !== '';
    },
  };
}
