import { useEffect, useState } from 'react';
import { formatCountdown, secondsUntil } from '@/utils/formatDate';
import useInterval from '@/hooks/useInterval';

/**
 * Ticks down the payment window. Returns the remaining seconds and an "MM:SS"
 * label; the interval stops once the deadline passes or is cleared.
 */
export default function usePaymentCountdown(deadline) {
  const [seconds, setSeconds] = useState(() =>
    deadline ? secondsUntil(deadline) : 0,
  );

  useEffect(() => {
    setSeconds(deadline ? secondsUntil(deadline) : 0);
  }, [deadline]);

  useInterval(
    () => setSeconds(secondsUntil(deadline)),
    deadline && seconds > 0 ? 1000 : null,
  );

  return { seconds, label: formatCountdown(seconds), expired: seconds <= 0 };
}
