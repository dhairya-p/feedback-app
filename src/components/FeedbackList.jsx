import { useAutoAnimate } from '@formkit/auto-animate/react'
import FeedbackItem from './FeedbackItem'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
  const {feedback, isLoading} = useContext(FeedbackContext)
  const [animationParent] = useAutoAnimate()

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>
  }

  return isLoading ? <h3>Loading...</h3>:(
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