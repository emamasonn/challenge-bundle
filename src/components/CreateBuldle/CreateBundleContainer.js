import { connect } from 'react-redux';
import CreateBundle from './CreateBundle'
import { loadItem, recordMemory } from '../../redux/actions/actions'

const mapStateToProps = state => {
  return ({ selectedBundle: state.createBundle.bundles})
}

const mapDispatchToProps = dispatch => ({
  loadItem: (data) => {
    dispatch(loadItem(data))
  },
  recordMemory: (bundles) => {
    dispatch(recordMemory(bundles))
  }
})

const CreateBundleContainers = connect(
  mapStateToProps,
  mapDispatchToProps 
)(CreateBundle);

export default CreateBundleContainers;