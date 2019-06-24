import React, { Component } from 'react';
import { connect } from "react-redux";
import * as galleryActions from './reducer';
import get from 'lodash.get';
import SpinnerWidget from '../spinner';
import { withRouter } from 'react-router-dom';

class GalleryWidgetContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        //this.props.dispatch({type: "gallery/GET_LIST_DATA_STARTED"});
        this.props.getListData();
    }
    redirectToAddGallery = (e) => {
        const { history } = this.props;
        e.preventDefault();
        console.log('-----переходимо на сторінку додавання----');
        history.push('/gallery/add');
    }
    addPhotoCropper = (e) => {
        const { history } = this.props;
        e.preventDefault();
        console.log('-----переходимо на сторінку додавання----');
        history.push('/gallery/add/cropper');
    }
    render() { 
        console.log('----this props Gallery-----', this.props);
        const {isListLoading} = this.props;
        const listContent = this.props.list.map(item => {
            return (
            <div key={item.id} className="col-lg-3 col-md-4 col-6">
                <a href="#" className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src={item.image} alt="" />
                </a>
            </div>
            )
        });
        return ( 
            <div>
                <div className="container">

                    <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">Thumbnail Gallery</h1>
                    <button className="btn btn-success" onClick={this.redirectToAddGallery}>Додати фото</button>
                    <button className="btn btn-info" onClick={this.addPhotoCropper}>Додати фото cropper</button>
                    <hr className="mt-2 mb-5" />

                    <div className="row text-center text-lg-left">                     
                       {listContent}
                    </div>

                </div>

                <SpinnerWidget loading={isListLoading} />
            </div>


        );
    }
}
const mapStateToProps = (state) => {
    return {
        list: get(state, 'gallery.list.data'),
        isListLoading: get(state, 'gallery.list.loading'),
        isListError: get(state, 'gallery.list.error')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getListData: () => {
            dispatch(galleryActions.getListData());
        }
    }
}
 
const GalleryWidget = withRouter(connect(mapStateToProps, mapDispatchToProps)(GalleryWidgetContainer));
export default GalleryWidget;