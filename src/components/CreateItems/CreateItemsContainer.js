import { connect } from 'react-redux';
import CreateItems from './CreateItems'
import { loadItem } from '../../redux/actions/actions'

const mapStateToProps = state => {
  return ({ items: state.createItem.items})
}

const mapDispatchToProps = dispatch => ({
  loadItem: (data) => {
    dispatch(loadItem(data))
  },
})

const CreateItemsContainers = connect(
  mapStateToProps,
  mapDispatchToProps 
)(CreateItems);

export default CreateItemsContainers;