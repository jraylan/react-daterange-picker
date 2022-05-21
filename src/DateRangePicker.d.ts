import React, { ReactNode } from 'react';

export interface DateRangePickerProps<TValue extends string | Date = string | Date> {
  autoFocus?: boolean | undefined;
  calendarAriaLabel?: string | undefined;
  calendarClassName?: string | string[] | undefined;
  calendarIcon?: ReactNode | undefined;
  className?: string | string[] | undefined;
  clearAriaLabel?: string | undefined;
  clearIcon?: ReactNode | undefined;
  closeCalendar?: boolean | undefined;
  dayAriaLabel?: string | undefined;
  dayPlaceholder?: string | undefined;
  disableCalendar?: boolean | undefined;
  disabled?: boolean | undefined;
  format?: string | undefined;
  isOpen?: boolean | undefined;
  locale?: string | undefined;
  maxDate?: Date | undefined;
  maxDetails?: 'century' | 'decade' | 'year' | 'month' | undefined;
  minDate?: Date | undefined;
  monthAriaLabel?: string | undefined;
  name?: string | undefined;
  nativeInputAriaLabel?: string | undefined;
  onCalendarClose?: () => void | undefined;
  onCalendarOpen?: () => void | undefined;
  onChange?: (value: Date[]) => void | undefined;
  onFocus?: (event: FocusEvent) => void | undefined;
  openCalendarOnFocus?: boolean | undefined;
  rangeDivider?: ReactNode | undefined;
  required?: boolean | undefined;
  returnValue?: 'start' | 'end' | 'range' | undefined;
  showLeadingZeros?: boolean | undefined;
  value: TValue | TValue[];
  yearAriaLabel?: string | undefined;
  yearPlaceholder?: string | undefined;
}

declare function DateTimeRangePicker(props: DateRangePickerProps): React.SFC<DateRangePickerProps>;

export default DateTimeRangePicker;
