export const selectStyles = {
    control: (provided: any) => ({
      ...provided,
      borderColor: '#ced4da',
      borderRadius: '4px',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#f06292',
      },
      width: '100%',
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#f0f0f0' : '#fff',
      color: '#333',
      cursor: 'pointer',
    }),
  };
  