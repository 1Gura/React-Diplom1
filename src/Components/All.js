import React, {Component} from 'react';
import PhotoPreview from "./PhotoPreview";
import Load from "./Load";


class All extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.newPostsSearch('latest');
        this.props.flagChange();
    }

    componentWillUnmount() {
        this.props.flagChange();
    }

    render() {
        const {newSearchPosts, flagLoad} = this.props;
        return(
            flagLoad ? <Load/> :
                <div className = "all">
                {newSearchPosts.map((post)=> {
                    return (
                        <PhotoPreview post = {post} key = {post.id}/>
                    )
                })}
            </div>
        )
    }
}

export default All;