import { connect } from 'react-redux';
import { loadListBundles, deleteListBundle } from '../../redux/actions/actions';
import CardBundle from './CardBundle'

const mapStateToProps = state => ({
  listBundles: state.listBundles 
})

const mapDispatchToProps = dispatch => ({
  loadListBundles: (listBundles) => {
      dispatch(loadListBundles(listBundles))
    },
    deleteListBundle: (id) => {
      dispatch(deleteListBundle(id))
    }
  })

const bundle = connect(
  mapStateToProps,
  mapDispatchToProps 
)(CardBundle);

export default bundle;