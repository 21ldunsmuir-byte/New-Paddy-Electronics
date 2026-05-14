import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BRANCHES = {
  dunLaoghaire: {
    name: "New Paddy Dun Laoghaire",
    address: "67 Convent Road, Dun Laoghaire, Co. Dublin",
    phone: "(01) 2303852",
    hours: "Mon–Sat: 10:00am – 6:00pm",
    value: "dun-laoghaire",
  },
  leopardstown: {
    name: "New Paddy Leopardstown",
    address: "Unit 3B, Leopardstown SC, Ballyogan Road, Dublin 18",
    phone: "(01) 2944561",
    hours: "Mon–Sat: 10:30am – 6:00pm",
    value: "leopardstown",
  },
} as const;

export const IPHONE_MODELS = [
  "iPhone 7/8/SE 2020",
  "iPhone 7/8 Plus",
  "iPhone X/XS/XR/XS Max",
  "iPhone 11",
  "iPhone 12",
  "iPhone 13",
  "iPhone 14",
  "iPhone 15 Series",
];

export const IPAD_MODELS = [
  "iPad (All Generations)",
  "iPad Air",
  "iPad Pro",
  "iPad Mini",
];

export const SAMSUNG_S_MODELS = [
  "Samsung S20", "Samsung S21", "Samsung S22", "Samsung S23", "Samsung S24",
];

export const SAMSUNG_A_MODELS = [
  "Samsung A12", "Samsung A32", "Samsung A52", "Samsung A53", "Samsung A54",
];

export const GAME_CONSOLES = [
  "Sony PS4", "Sony PS5", "Xbox 360", "Xbox One Series", "Nintendo Switch", "Nintendo Switch Lite",
];

export const LAPTOP_BRANDS = [
  "Apple MacBook", "Dell", "HP", "Lenovo", "Asus", "Acer", "Microsoft Surface", "Other",
];
