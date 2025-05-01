export function formController() {
  return {
    isProcessing: false,

    formData: {
      assetType: '',
      businessStatus: '',
      businessType: '',
      country: '',
      employeeCount: '',
      lastYearExpenses: '',
      lastYearRevenue: '',
      licenseType: '',
      licenseYear: '',
    },
    isFilled() {
      return Object.values(this.formData).every((val) => val !== '');
    },

    async submit() {
      this.isProcessing = true;

      const data = Object.fromEntries(
        Object.entries(this.formData).map(([key, val]) => [
          key,
          val === '' ? null : val,
        ])
      );
      console.log(JSON.stringify(data, null, 2));

      await new Promise((resolve) => setTimeout(resolve, 2000));

      this.isProcessing = false;
    },
  };
}
