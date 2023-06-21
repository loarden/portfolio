import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion } from 'framer-motion';
import Animation from './Animation';

function NextPage() {
  return (
    <Animation>

    <motion.div 
    initial={{
      y: '0px'
    }}
    animate={{
      y: '-10px',
      transition: {
        ease: 'easeInOut',
        repeat: 'Infinity',
        duration: 2,
      }
    }}
    exit={{
      y: '0px'
    }}
    className='absolute bottom-4 right-1/2'>
      <KeyboardArrowDownIcon sx={{fontSize: '2em'}}/>
    </motion.div>
    </Animation>
  )
}

export default NextPage