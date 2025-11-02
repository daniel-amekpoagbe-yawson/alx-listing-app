export interface CardProps {
  image: string;
  title: string;
  description: string;
  price: number;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}
