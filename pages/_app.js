import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import Intro from '../src/components/Intro'
import { useEffect, useState } from 'react'

config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);
  
  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key='loader' className='overflow-hidden'>
          <Intro setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          {!loading && (
          //   <motion.div
          //   key={router.route}
          //   initial="initialState"
          //   animate="animateState"
          //   exit="exitState"
          //   transition={{duration: 0.75}}
          //   variants={{
          //     initialState: {
          //       opacity: 0,
          //     },
          //     animateState: {
          //       opacity: 1,
          //     },
          //     exitState: {
          //       opacity: 0,
          //     }
          //   }}
          // >
            <Component {...pageProps}/>
          // </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  )
}

export default MyApp