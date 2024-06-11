import { ClassValue } from 'clsx';

import { cn } from '../lib/utils';

type Props = {
  className?: ClassValue;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
};

export default function Input({
  className,
  value,
  setValue,
  placeholder,
}: Props) {
  return (
    <input
      className={cn(
        'rounded-base border-2 border-black p-[10px] font-base ring-offset-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-2 outline-none transition-all',
        className
      )}
      type='text'
      name='text'
      size={40}
      placeholder={placeholder}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value)
      }
      aria-label={placeholder}
    />
  );
}
