/**
 * Class name utility function
 * Combines clsx functionality for conditional classes
 */
import clsx, { ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}