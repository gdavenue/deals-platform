export function dropdown({
  label = '',
  placeholder = '',
  options = [],
  onSelect = null,
}) {
  return {
    open: false,
    label,
    placeholder,
    options,
    selected: '',
    toggle() {
      this.open = !this.open;
    },
    select(option) {
      this.selected = option;
      this.open = false;
      onSelect(option);
    },
    isSelected() {
      return this.selected !== '';
    },
  };
}
