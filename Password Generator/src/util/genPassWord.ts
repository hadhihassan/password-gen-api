// export const generatePassword = ({
//     length,
//     upperCase,
//     lowerCase,
//     symbol,
//     number
// }: PasswordProperty): string => {
//     let characters = '';
//     let password = '';

//     if (upperCase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     if (lowerCase) characters += 'abcdefghijklmnopqrstuvwxyz';
//     if (symbol) characters += '!@#$%^&*()-_+=[]{}|;:,.<>?';
//     if (number) characters += '0123456789';

//     for (let i = 0; i < length; i++) {
//         password += characters.charAt(Math.floor(Math.random() * characters.length));
//     }

//     return password;
// };