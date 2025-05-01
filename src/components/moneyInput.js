export function moneyInput({ label = '', placeholder = '', onSelect = null }) {
  return {
    label,
    placeholder,
    input: '',

    formatInput(e) {
      const cleaned = e.target.value.replace(/[^\d,]/g, '');
      this.input = `$${cleaned}`;
      onSelect(cleaned);
    },

    isFilled() {
      return !!this.input;
    },
  };
}
