// ./app/ui/fonts.ts
import { Inter,Lusitana} from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

// Define lusitana locally
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
