export interface PasswordProperty {
    length : number,
    symbol : boolean
    number : boolean
    lowerCase : boolean
    upperCase : boolean
    [key: string]: boolean | number; 
}