import React, { Component } from 'react';
import classnames from 'classnames';
import 'cropperjs/dist/cropper.css';
import Cropper from 'react-cropper';
import './index.css';

class CropperWidgetContainer extends Component {
    state = {
        //loading: true
      }
    render() { 
        const { loading, src, onClose } = this.props;
        
        return ( 
            <div className={classnames('croppermodal', { 'open': loading })}>
                <div className="container">
                    <div className="row" style={{ margin: '100px' }}>
                        <div className="col-md-8">
                            <Cropper
                                style={{ height: 400, width: '100%' }}
                                aspectRatio={1 / 1}
                                guides={false}
                                viewMode={1}
                                dragMode="move"
                                src={src}   
                                // ref={cropper => { this.cropper = cropper; }}
                            />
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-success">Обрізати фото</button>
                            <button className="btn btn-danger" onClick={(e)=> onClose(e) }>Закрити</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const CropperWidget = CropperWidgetContainer;
 
export default CropperWidget;