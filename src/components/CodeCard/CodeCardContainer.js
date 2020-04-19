import { connect } from 'react-redux';
import { deleteItem, addBundle, deleteBundle, cantItem } from '../../redux/actions/actions';
import CodeCard from './CodeCard'

const mapStateToProps = state => ({
  itemsCode: state.createItem.items,
  bundles: state.createBundle.bundles
})

const mapDispatchToProps = dispatch => ({
    deleteItem: (id) => {
      dispatch(deleteItem(id))
    },
    addBundle: (bundle) => {
      dispatch(addBundle(bundle))
    },
    deleteBundle: (bundle) => {
      dispatch(deleteBundle(bundle))
    },
    cantItem: (item)=>{
      dispatch(cantItem(item))
    }
})

const code = connect(
  mapStateToProps,
  mapDispatchToProps 
)(CodeCard);

export default code;