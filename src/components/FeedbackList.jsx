import { useAutoAnimate } from '@formkit/auto-animate/react'
import FeedbackItem from './FeedbackItem'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)
  const [animationParent] = useAutoAnimate()

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }

  return (
    <div className='feedback-list' ref = {animationParent}>
        {feedback.map((item) => (
            <FeedbackItem 
              key={item.id}
              item={item}
            />
        ))}
    </div>
  )
}

export default FeedbackList