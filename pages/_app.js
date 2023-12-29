import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

import Layout from '../components/Layout';
import Transition from '../components/Transition';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const { route } = router;
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={route} className="h-full">
          <Transition />
          <Component {...pageProps} />;
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
