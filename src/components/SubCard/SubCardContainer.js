import { connect } from 'react-redux';
import { deleteItem, cantItem } from '../../redux/actions/actions';
import SubCard from './SubCard'

const mapDispatchToProps = dispatch => ({
    deleteItem: (id) => {
      dispatch(deleteItem(id))
    },
    cantItem: (item)=>{
      dispatch(cantItem(item))
    }
})

const sub = connect(
  null,
  mapDispatchToProps 
)(SubCard);

export default sub;