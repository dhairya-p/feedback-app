import PropTypes from "prop-types"
import Card from "./shared/Card"
import { FaTimes } from 'react-icons/fa'

function FeedbackItem({item, handleDelete}) {
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => handleDelete(item.id)} className="close">
          <FaTimes color='purple' />
        </button>
        <div className="text-display">{item.text}</div> 
    </Card>
  )

  /* return (
      <div className="card" style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)': '#fff',
        color: reverse ? '#fff' : '#000',
      }}>{children}</div>
    )
  */
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}
  

export default FeedbackItem
