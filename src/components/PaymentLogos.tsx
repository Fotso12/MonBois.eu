import React from 'react';

// Official Visa Logo SVG
export const VisaLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <svg className={`${className} w-auto shadow-sm rounded`} viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="32" rx="4" fill="#1434CB" />
    <path fillRule="evenodd" clipRule="evenodd" d="M38.8 8.4L33.7 23.6H29.6L25.4 12.1C25 10.9 24.3 10.2 23.3 9.7C21.7 8.9 19 8.2 16.5 7.7L16.9 6H25.4C26.5 6 27.5 6.8 27.7 8L29.8 19.3L34.6 6H38.8V8.4ZM48.5 17.8C48.5 13.8 42.9 13.6 42.9 11.6C42.9 11 43.5 10.3 44.9 10.1C45.6 10 47.7 9.9 49.9 10.9L50.8 6.7C49.6 6.3 48 5.8 45.9 5.8C41.2 5.8 37.9 8.3 37.9 11.9C37.9 14.6 40.3 16.1 42.1 17C44 17.9 44.6 18.5 44.6 19.3C44.6 20.5 43.2 21 41.9 21C39.6 21 38.3 20.4 37.2 19.9L36.3 24.3C37.6 24.9 39.9 25.4 42.3 25.4C47.3 25.4 50.5 22.9 50.5 19.1L48.5 17.8ZM63.8 6H60.4C59.3 6 58.5 6.3 58.1 7.3L49.7 23.6H54.7L55.7 20.8H61.8L62.4 23.6H66.9L63.8 6ZM57.1 17L59.7 9.8L61.2 17H57.1ZM77.9 6H73.1C72 6 71.3 6.6 70.9 7.6L63 23.6H68.1L69.1 20.8H75.3L75.9 23.6H80.4L77.9 6ZM70.5 17L73.1 9.8L74.6 17H70.5Z" fill="white" />
    <path d="M22.9 6L16 23.6H20.9L27.8 6H22.9Z" fill="#F7B600" />
  </svg>
);

// Official Mastercard Logo SVG
export const MastercardLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <svg className={`${className} w-auto shadow-sm rounded`} viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="32" rx="4" fill="#1A1F71" />
    <circle cx="43" cy="16" r="10" fill="#EB001B" />
    <circle cx="57" cy="16" r="10" fill="#F79E1B" />
    <path d="M50 8.6C47.3 10.6 45.6 13.7 45.6 17.2C45.6 20.7 47.3 23.8 50 25.8C52.7 23.8 54.4 20.7 54.4 17.2C54.4 13.7 52.7 10.6 50 8.6Z" fill="#FF5F00" />
  </svg>
);

// Official Apple Pay Logo SVG
export const ApplePayLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <svg className={`${className} w-auto shadow-sm rounded`} viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="32" rx="4" fill="#000000" />
    <path d="M37.3 14.8C37.3 13.3 38.3 12.5 39.7 11.4C38.9 10.3 37.6 9.6 36.3 9.6C34.7 9.6 33.7 10.6 32.8 10.6C31.9 10.6 30.7 9.7 29.5 9.7C27.6 9.7 25.8 10.8 24.8 12.5C22.7 16.1 24.2 21.4 26.3 24.4C27.3 25.8 28.5 27.4 30.1 27.3C31.6 27.2 32.2 26.3 34.1 26.3C35.9 26.3 36.4 27.3 37.9 27.3C39.6 27.3 40.6 25.8 41.6 24.3C42.8 22.6 43.3 21 43.4 20.8C43.3 20.8 40.3 19.6 40.3 16C40.3 13 42.7 11.6 42.9 11.5C41.5 9.5 39.3 9.2 38.6 9.1C36.8 8.9 35.3 10.2 34.4 10.2C33.6 10.2 32.4 9.1 30.9 9.1" fill="white" />
    <path d="M34.8 7.9C35.6 6.9 36.1 5.4 35.9 4C34.7 4 33.1 4.8 32.3 5.8C31.6 6.6 31 8.1 31.2 9.5C32.6 9.6 34 8.8 34.8 7.9Z" fill="white" />
    <text x="47" y="21" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Pay</text>
  </svg>
);

// Official Société Générale (SG) Logo SVG
export const SGLogo: React.FC<{ className?: string }> = ({ className = "h-7" }) => (
  <svg className={`${className} w-auto shadow-sm rounded`} viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="140" height="32" rx="4" fill="#000000" />
    {/* Red top square */}
    <rect x="6" y="5" width="22" height="11" fill="#E2001A" />
    {/* Black bottom square with white bar divider */}
    <rect x="6" y="16" width="22" height="11" fill="#000000" />
    <rect x="6" y="15.5" width="22" height="1" fill="#FFFFFF" />
    <rect x="5" y="4" width="24" height="24" rx="1" stroke="#FFFFFF" strokeWidth="1" fill="none" />
    {/* SG text */}
    <text x="35" y="21" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="Arial, sans-serif" letterSpacing="0.5">
      SOCIETE GENERALE
    </text>
  </svg>
);

// Official BoursoBank Logo SVG
export const BoursoBankLogo: React.FC<{ className?: string }> = ({ className = "h-7" }) => (
  <svg className={`${className} w-auto shadow-sm rounded`} viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="110" height="32" rx="4" fill="#E20074" />
    <text x="55" y="21" fill="#FFFFFF" fontSize="12" fontWeight="900" fontFamily="Arial, sans-serif" textAnchor="middle">
      BoursoBank
    </text>
  </svg>
);

// Official BNP Paribas Logo SVG
export const BNPLogo: React.FC<{ className?: string }> = ({ className = "h-7" }) => (
  <svg className={`${className} w-auto shadow-sm rounded`} viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="120" height="32" rx="4" fill="#008855" />
    {/* Star icons */}
    <path d="M12 9L13.2 12.5H16.8L13.9 14.6L15 18L12 15.8L9 18L10.1 14.6L7.2 12.5H10.8L12 9Z" fill="#F7B600" />
    <text x="24" y="21" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif" letterSpacing="0.5">
      BNP PARIBAS
    </text>
  </svg>
);

// Official Crédit Agricole Logo SVG
export const CreditAgricoleLogo: React.FC<{ className?: string }> = ({ className = "h-7" }) => (
  <svg className={`${className} w-auto shadow-sm rounded`} viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="130" height="32" rx="4" fill="#005B5C" />
    <path d="M10 8H22V13H10V8ZM10 15H22V24H10V15Z" fill="#00A88F" />
    <path d="M16 11L24 21H18L10 11H16Z" fill="#E2001A" />
    <text x="30" y="20" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="Arial, sans-serif" letterSpacing="0.5">
      CREDIT AGRICOLE
    </text>
  </svg>
);

// Official UBA Cameroun Logo SVG
export const UBALogo: React.FC<{ className?: string }> = ({ className = "h-7" }) => (
  <svg className={`${className} w-auto shadow-sm rounded`} viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="32" rx="4" fill="#D32F2F" />
    <text x="20" y="22" fill="#FFFFFF" fontSize="16" fontWeight="900" fontFamily="Arial, sans-serif" letterSpacing="1">
      UBA
    </text>
    <text x="58" y="15" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="Arial, sans-serif">
      United Bank
    </text>
    <text x="58" y="23" fill="#FFCDD2" fontSize="7" fontWeight="bold" fontFamily="Arial, sans-serif">
      Cameroun
    </text>
  </svg>
);
