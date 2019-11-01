import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {fetchStream, editStream} from '../../actions';

class StreamLikes extends React.Component {
  addLike = e => {
   
      this.props
        .editStream (this.props.streamId, {
          likes_count: this.props.likes === 0 ? 1 : this.props.likes + 1,
        })
        .then (window.location.reload ())
      }

  render () {
    return (
      //   <button className="ui heart icon" onClick={this.addLike}> </button>
      (
        <div className="ui labeled button" tabindex="0">
          <div className="ui red button" onClick={this.addLike}>
            <i className=   "heart icon" > </i> Like
          </div>
          <a class="ui basic red left pointing label">
            Count:{this.props.likes}
          </a>
        </div>
      )
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  return {
    stream: Object.values (state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect (mapStateToProps, {fetchStream, editStream}) (
  StreamLikes
);
