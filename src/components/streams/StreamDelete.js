import React , {Fragment, Component} from 'react';
import { connect } from "react-redux";
import { withRouter} from "react-router";
import { Link } from "react-router-dom";
import { fetchStream , deleteStream } from "../../actions";
import Modal from "../Modal";

class StreamDelete extends Component {
    
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }
    
    renderActions () {
        const id = this.props.match.params.id;
        return (
            <Fragment>
                <button onClick={() => this.props.deleteStream(id)} className="ui button negative"> Delete </button>
                <Link to="/" className="ui button"> Cancel </Link>
            </Fragment>
        );
    };

    render () {

        if(!this.props.stream) {
            return <Fragment> Loading ... </Fragment>
        };

        return (
            <div>
                <Modal 
                title="Delte Stream"
                content={`Are you sure you want to delete ${this.props.stream.title} ?`} 
                actions={this.renderActions()}
                onDismiss={() => this.props.history.push("/")}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps , { fetchStream , deleteStream })(withRouter(StreamDelete));
