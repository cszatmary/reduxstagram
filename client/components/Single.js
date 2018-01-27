import React, { Component } from 'react';

import Photo from './Photo';
import Comments from './Comments';

export default class Single extends Component {
    render() {
        const index = this.props.posts.findIndex(post => post.code === this.props.params.postId);
        const post = this.props.posts[index];

        return (
            <div className="single-photo">
                <Photo index={index} post={post} {...this.props} />
                <Comments />
            </div>
        );
    }
}
