import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion } from 'framer-motion';
import Animation from './Animation';

function NextPage({ page }) {
  return (
    <Animation>

      <motion.div
        animate={{
          y: [0, 10, 0],
          transition: {
            ease: 'easeInOut',
            repeat: 'Infinity',
            duration: 3,
          }
        }}
        className='absolute z-50 bottom-4 w-full flex justify-center'>
        <a href={`#${page}`}>
          <KeyboardArrowDownIcon sx={{ fontSize: '3em' }} />
        </a>
      </motion.div>
    </Animation>
  )
}

export default NextPage