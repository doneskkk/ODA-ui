import React, {useState} from 'react';
import Select from 'react-select';
import i18n from "i18next";

const LanguageSwitcher = () => {
  const languageOptions = [
    { value: 'en', label: 'EN' },
    { value: 'ru', label: 'RU' },
    { value: 'ro', label: 'RO' }
  ];


  const [selectedLanguage, setSelectedLanguage] = useState(
      languageOptions.find(lang => lang.value === (localStorage.getItem('i18nextLng') || 'ro'))
  );

  const handleLanguageChange = (selectedOption) => {
    const newLanguage = selectedOption.value;
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('i18nextLng', newLanguage);
    setSelectedLanguage(selectedOption);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: '80px',
      minHeight: '32px',
      height: '32px',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '6px',
      boxShadow: state.isFocused ? '0 0 0 2px rgba(66, 153, 225, 0.15)' : 'none',
      cursor: 'pointer',
      '&:hover': {
        border: '1px solid #cbd5e0'
      },
      display: 'flex',
      alignItems: 'center'
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '0 6px',
      display: 'flex',
      justifyContent: 'center'
    }),
    singleValue: (provided) => ({
      ...provided,
      margin: 0,
      color: '#2d3748',
      fontSize: '13px',
      fontWeight: 500,
      textAlign: 'center'
    }),
    indicatorSeparator: () => ({
      display: 'none'
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: '0 4px',
      color: '#718096',
      '&:hover': {
        color: '#4a5568'
      }
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '6px',
      overflow: 'hidden',
      marginTop: '4px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      zIndex: 9999
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
          ? '#edf2f7'
          : state.isFocused
              ? '#f7fafc'
              : '#ffffff',
      color: '#2d3748',
      fontSize: '13px',
      cursor: 'pointer',
      textAlign: 'center',
      padding: '6px 8px',
      '&:hover': {
        backgroundColor: '#f7fafc'
      }
    }),
    input: (provided) => ({
      ...provided,
      display: 'none'
    })
  };

  return (
      <div className="inline-block">
        <Select
            options={languageOptions}
            value={selectedLanguage}
            onChange={handleLanguageChange}
            styles={customStyles}
            isSearchable={false}
        />
      </div>
  );
};

export default LanguageSwitcher;