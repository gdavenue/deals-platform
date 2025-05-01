export function selector({ label = '', options = [], onSelect = null }) {
  return {
    label,
    options,
    selected: '',
    select(status) {
      this.selected = status;
      onSelect(status);
    },
    clear() {
      this.selected = '';
    },
  };
}
