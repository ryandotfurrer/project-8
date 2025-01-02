import { parse, format } from 'date-fns';

export const formatTo12Hour = (time: string): string => {
  try {
    // Parse the time string (expected format: HH:mm)
    const date = parse(time, 'HH:mm', new Date());
    // Format to 12-hour time with AM/PM
    return format(date, 'h:mm a');
  } catch (error) {
    console.error('Error formatting time:', error);
    return time;
  }
};