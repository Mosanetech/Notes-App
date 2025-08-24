import { parsePhoneNumber, isValidPhoneNumber, AsYouType } from 'libphonenumber-js';

export interface ValidationResult {
  isValid: boolean;
  isEmail: boolean;
  isPhone: boolean;
  message: string;
  formattedPhone: string;
}

export const validateEmailOrPhone = (rawInput: string): ValidationResult => {
  const value = rawInput.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[\+]?[\s\-\(\)]?[\d\s\-\(\)]{7,}$/;

  if (!value) {
    return {
      isValid: false,
      isEmail: false,
      isPhone: false,
      message: '',
      formattedPhone: ''
    };
  }

  if (emailRegex.test(value)) {
    return {
      isValid: true,
      isEmail: true,
      isPhone: false,
      message: 'Valid email address',
      formattedPhone: ''
    };
  }

  if (phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
    try {
      const phoneNumber = parsePhoneNumber(value);
      const isValid = isValidPhoneNumber(value);

      if (isValid && phoneNumber) {
        return {
          isValid: true,
          isEmail: false,
          isPhone: true,
          message: `Valid ${phoneNumber.country} phone number`,
          formattedPhone: phoneNumber.formatInternational()
        };
      }
    } catch {
      const formatted = new AsYouType().input(value);
      return {
        isValid: false,
        isEmail: false,
        isPhone: true,
        message: 'Please enter a valid phone number with country code (e.g., +2659985895025)',
        formattedPhone: formatted
      };
    }
  }

  return {
    isValid: false,
    isEmail: false,
    isPhone: false,
    message: 'Please enter a valid email address or phone number',
    formattedPhone: ''
  };
};
