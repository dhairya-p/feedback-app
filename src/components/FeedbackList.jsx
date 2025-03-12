import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }

  return (
    <div className='feedback-list'>
        {feedback.map((item) => (
            <FeedbackItem key={item.id} 
            item={item}
            handleDelete = { handleDelete } />
        ))}
    </div>
  )
  /*
    <div className='feedback-list'>
      <AnimatePresence initial={false}>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            animate={{ opacity: 1, scale: 1}}
            exit={{ opacity: 0, scale: 0}}
            transition={{ duration: 0.4 }}
            layout
          >
            <FeedbackItem 
              item={item}
              handleDelete={handleDelete} 
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  */
  
}

FeedbackList.propTypes = {
    feedback: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
}

export default FeedbackList
