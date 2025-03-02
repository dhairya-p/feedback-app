import FeedbackItem from './FeedbackItem'
import propTypes from 'prop-types'

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
}

FeedbackList.propTypes = {
    feedback: propTypes.array.isRequired,
}

export default FeedbackList
